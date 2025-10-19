import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	IDataObject,
} from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow'; 

import { verificaremailsApiRequest } from '../../GenericFunctions';

type VerificarService =
	| 'email'
	| 'phone_hlr'
	| 'phone_mnp'
	| 'phone_syntactic'
	| 'name'
	| 'address'
	| 'name_correction'
	| 'name_autocomplete';

export class Verificaremails implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'VerificarEmails',
		name: 'verificaremails',
		icon: 'file:verificaremails.svg',
		group: ['transform'],
		version: 1,
		description: 'Validate emails, phones, names, and addresses using VerificarEmails.com API',
		defaults: {
			name: 'VerificarEmails',
		},
		inputs: [NodeConnectionType.Main],  
		outputs: [NodeConnectionType.Main], 
		credentials: [
			{
				name: 'verificaremailsApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Service',
				name: 'service',
				type: 'options',
				options: [
					{ name: 'Email Validation', value: 'email' },
					{ name: 'Phone HLR', value: 'phone_hlr' },
					{ name: 'Phone MNP', value: 'phone_mnp' },
					{ name: 'Phone Syntax', value: 'phone_syntactic' },
					{ name: 'Name Validation', value: 'name' },
					{ name: 'Address Validation', value: 'address' },
					{ name: 'Name Correction', value: 'name_correction' },
					{ name: 'Name Autocomplete', value: 'name_autocomplete' },
				],
				default: 'email',
				required: true,
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				default: '',
				displayOptions: { show: { service: ['email'] } },
			},
			{
				displayName: 'Phone (HLR)',
				name: 'phoneHlr',
				type: 'string',
				default: '',
				displayOptions: { show: { service: ['phone_hlr'] } },
			},
			{
				displayName: 'Phone (MNP)',
				name: 'phoneMnp',
				type: 'string',
				default: '',
				displayOptions: { show: { service: ['phone_mnp'] } },
			},
			{
				displayName: 'Phone (Syntax)',
				name: 'phoneSyntactic',
				type: 'string',
				default: '',
				displayOptions: { show: { service: ['phone_syntactic'] } },
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				displayOptions: { show: { service: ['name'] } },
			},
			{
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				displayOptions: { show: { service: ['address'] } },
			},
			{
				displayName: 'Input Name',
				name: 'nameInput',
				type: 'string',
				default: '',
				displayOptions: { show: { service: ['name_correction', 'name_autocomplete'] } },
			},
			{
				displayName: 'Use First Names',
				name: 'useFirstNames',
				type: 'boolean',
				default: true,
				displayOptions: { show: { service: ['name_correction', 'name_autocomplete'] } },
			},
			{
				displayName: 'Gender',
				name: 'gender',
				type: 'string',
				default: '',
				displayOptions: { show: { service: ['name_correction', 'name_autocomplete'] } },
			},
			{
				displayName: 'Country (ISO-2)',
				name: 'country',
				type: 'string',
				default: '',
				displayOptions: { show: { service: ['name_correction', 'name_autocomplete'] } },
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const out: INodeExecutionData[] = [];
		const continueOnFail = this.continueOnFail();

		const credentials = await this.getCredentials('verificaremailsApi');
		const apiKey = (credentials as IDataObject).apiKey as string;

		for (let i = 0; i < items.length; i++) {
			try {
				const service = this.getNodeParameter('service', i) as VerificarService;
				let term: IDataObject | string = '';

				switch (service) {
					case 'email':
						term = this.getNodeParameter('email', i) as string;
						break;
					case 'phone_hlr':
						term = this.getNodeParameter('phoneHlr', i) as string;
						break;
					case 'phone_mnp':
						term = this.getNodeParameter('phoneMnp', i) as string;
						break;
					case 'phone_syntactic':
						term = this.getNodeParameter('phoneSyntactic', i) as string;
						break;
					case 'name':
						term = this.getNodeParameter('name', i) as string;
						break;
					case 'address':
						term = this.getNodeParameter('address', i) as string;
						break;
					case 'name_correction': {
						const nameInput = this.getNodeParameter('nameInput', i) as string;
						const useFirstNames = this.getNodeParameter('useFirstNames', i) as boolean;
						const gender = this.getNodeParameter('gender', i) as string;
						const country = this.getNodeParameter('country', i) as string;
						const payload: IDataObject = { name: nameInput, use_first_names: Number(useFirstNames) };
						if (gender) payload.gender = gender;
						if (country) payload.country = country;
						term = payload;
						break;
					}
					case 'name_autocomplete': {
						const nameInput = this.getNodeParameter('nameInput', i) as string;
						const useFirstNames = this.getNodeParameter('useFirstNames', i) as boolean;
						const gender = this.getNodeParameter('gender', i) as string;
						const country = this.getNodeParameter('country', i) as string;
						const payload: IDataObject = { name: nameInput, use_first_names: Number(useFirstNames) };
						if (gender) payload.gender = gender;
						if (country) payload.country = country;
						term = payload;
						break;
					}
				}

				const response = await verificaremailsApiRequest.call(this, 'GET', term, apiKey, service);
				const status = response?.result?.status ?? response?.status ?? 'unknown';

				out.push({
					json: {
						service,
						term,
						status,
						apiResponse: response as unknown as IDataObject,
					},
					pairedItem: { item: i },
				});
			} catch (error) {
				if (continueOnFail) {
					out.push({
						json: { error: (error as Error).message ?? String(error) },
						pairedItem: { item: i },
					});
					continue;
				}
				throw error;
			}
		}

		return [out];
	}
}
