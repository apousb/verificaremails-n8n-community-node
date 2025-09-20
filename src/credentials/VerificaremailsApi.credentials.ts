// al inicio: importa tipos si compilas con tipos estrictos
// import type { ICredentialType, INodeProperties } from 'n8n-workflow';

export class VerificaremailsApi /* implements ICredentialType */ {
  name = 'verificaremailsApi';
  displayName = 'Verificaremails API';
  icon = 'file:../nodes/Verificaremails/verificaremails.svg';
  documentationUrl = 'https://www.verificaremails.com/docs/';

  properties /* : INodeProperties[] */ = [
    { displayName: 'API Key', name: 'apiKey', type: 'string', default: '' },
  ];

  authenticate = {
    type: 'generic' as const,
    properties: { headers: { Authorization: 'Bearer {{$credentials.apiKey}}' } },
  };

  test = {
    request: {
      baseURL: 'https://dashboard.verificaremails.com',
      url: '/myapi/ping', // o un endpoint real "light" de tu API
      method: 'GET',
    },
  };
}
