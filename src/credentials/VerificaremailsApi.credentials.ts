import { ICredentialType, INodeProperties } from 'n8n-workflow';

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

	// (Opcional pero recomendado) añade el token a todas las requests del nodo
	// para no repetirlo en cada operación.
	authenticate = {
		type: 'generic',
		properties: {
			qs: {
				'auth-token': '={{$credentials.apiKey}}',
			},
		},
	};

	// ✅ Test: éxito si responde 200
	test = {
		request: {
			baseURL: 'https://dashboard.verificaremails.com',
			url: '/myapi/all/credits',
			method: 'GET',
			qs: {
				'auth-token': '={{$credentials.apiKey}}',
			},
			// timeout: 8000, // (opcional)
		},
	};
}
