"use strict";
// al inicio: importa tipos si compilas con tipos estrictos
// import type { ICredentialType, INodeProperties } from 'n8n-workflow';
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificaremailsApi = void 0;
class VerificaremailsApi /* implements ICredentialType */ {
    constructor() {
        this.name = 'verificaremailsApi';
        this.displayName = 'Verificaremails API';
        this.icon = 'file:../nodes/Verificaremails/verificaremails.svg';
        this.documentationUrl = 'https://www.verificaremails.com/docs/';
        this.properties /* : INodeProperties[] */ = [
            { displayName: 'API Key', name: 'apiKey', type: 'string', default: '', typeOptions: { password: true } },
        ];
        this.authenticate = {
            type: 'generic',
            properties: { headers: { Authorization: 'Bearer {{$credentials.apiKey}}' } },
        };
        this.test = {
            request: {
                baseURL: 'https://dashboard.verificaremails.com',
                url: '/myapi/ping', // o un endpoint real "light" de tu API
                method: 'GET',
            },
        };
    }
}
exports.VerificaremailsApi = VerificaremailsApi;
