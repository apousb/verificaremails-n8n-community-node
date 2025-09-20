import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class VerificaremailsApi implements ICredentialType {
	name = 'verificaremailsApi';
	displayName = 'Verificaremails API';
	icon = 'file:../nodes/Verificaremails/verificaremails.svg';
	documentationUrl = 'https://www.verificaremails.com/docs/';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Token que se pasa como query param <code>auth-token</code>.',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://dashboard.verificaremails.com',
			description: 'Cámbialo solo si usas un dominio distinto.',
		},
	];

	authenticate = {
		type: 'generic' as const,
		properties: {
			qs: {
				'auth-token': '={{$credentials.apiKey}}',
			},
			headers: {
				accept: 'application/json',
			},
		},
	};

	test = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/myapi/email/validate/single?term=test%40example.com',
			method: 'GET',
		},
	};
}
