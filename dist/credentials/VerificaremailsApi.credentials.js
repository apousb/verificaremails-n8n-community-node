"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificaremailsApi = void 0;
class VerificaremailsApi {
    constructor() {
        this.name = 'verificaremailsApi';
        this.displayName = 'VerificarEmails.com API';
        this.documentationUrl = 'https://www.verificaremails.com/docs/';
        this.properties = [
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
        this.authenticate = {
            type: 'generic',
            properties: {
                qs: {
                    'auth-token': '={{$credentials.apiKey}}',
                },
            },
        };
        // Test OK si responde HTTP 200
        this.test = {
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
}
exports.VerificaremailsApi = VerificaremailsApi;
