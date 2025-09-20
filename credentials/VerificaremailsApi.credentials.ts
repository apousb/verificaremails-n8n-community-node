import type {
  IAuthenticateGeneric,
  ICredentialTestRequest,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class VerificaremailsApi implements ICredentialType {
  name = 'verificaremailsApi';
  displayName = 'Verificaremails API';
  // Si quieres icono, ver nota al final. Lo quitamos para máxima compatibilidad.
  // icon?: Icon;
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

  // Inyecta el token en la query y la cabecera accept
  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      qs: {
        'auth-token': '={{$credentials.apiKey}}',
      },
      header: {
        accept: 'application/json',
      },
    },
  };

  // Test ligero (GET por defecto): debe responder 2xx o JSON de error => valida conectividad
  test: ICredentialTestRequest = {
    request: {
      baseURL: '={{$credentials.baseUrl}}',
      url: '/myapi/email/validate/single?term=test%40example.com',
    },
  };
}
