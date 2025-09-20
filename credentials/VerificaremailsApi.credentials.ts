import type {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class VerificaremailsApi implements ICredentialType {
  name = 'verificaremailsApi';
  displayName = 'Verificaremails API';
  // icon: quitado para evitar incompatibilidades de tipos; no es obligatorio
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

  // Inyecta el token en query y la cabecera accept
  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      qs: {
        'auth-token': '={{$credentials.apiKey}}',
      },
      headers: {
        accept: 'application/json',
      },
    },
  };

  // Test ligero (GET por defecto). Con token inválido vuestra API devuelve JSON de error, lo cual valida conectividad.
  test: ICredentialTestRequest = {
    request: {
      baseURL: '={{$credentials.baseUrl}}',
      url: '/myapi/email/validate/single?term=test%40example.com',
    },
  };
}
