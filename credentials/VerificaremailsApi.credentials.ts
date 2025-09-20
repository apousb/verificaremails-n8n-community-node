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
			description:
				'Token a pasar en el parámetro de query <code>auth-token</code>.',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://dashboard.verificaremails.com',
			description: 'Modifícalo solo si usas un dominio distinto.',
		},
	];

	/**
	 * La API usa el token en query string => auth-token=<TOKEN>
	 * Usamos authenticate:generic con "qs" para añadirlo automáticamente
	 * a TODAS las peticiones que usen estas credenciales.
	 */
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

	/**
	 * Test ligero:
	 * GET /myapi/email/validate/single?term=test@example.com
	 * El token se añadirá automáticamente vía authenticate.qs como auth-token.
	 * Nota: con token inválido vuestra API responde JSON de error (code 100002),
	 * lo cual igualmente valida que el endpoint existe y responde.
	 */
	test = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/myapi/email/validate/single?term=test%40example.com',
			method: 'GET',
		},
	};
}
