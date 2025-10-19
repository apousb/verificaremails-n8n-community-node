import {
	ICredentialType,
	INodeProperties,
	IAuthenticateGeneric,
	ICredentialTestRequest,
	IHttpRequestMethods,
} from 'n8n-workflow';

export class VerificaremailsApi implements ICredentialType {
	name = 'verificaremailsApi';
	displayName = 'VerificarEmails.com API';
	documentationUrl = 'https://www.verificaremails.com/docs/';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Your VerificarEmails API key',
		},
	];

	// Añade ?auth-token=<API_KEY> a todas las requests
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				'auth-token': '={{$credentials.apiKey}}',
			},
		},
	};

	// Test OK si responde HTTP 200
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://dashboard.verificaremails.com',
			url: '/myapi/all/credits',
			// method: 'GET' as IHttpRequestMethods, // <-- opcional, GET por defecto
			qs: {
				'auth-token': '={{$credentials.apiKey}}',
			},
		},
	};
}
