"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerificaremailsApi = void 0;
class VerificaremailsApi {
    constructor() {
        this.name = 'verificaremailsApi';
        this.displayName = 'Verificaremails API';
        this.icon = 'file:../nodes/Verificaremails/verificaremails.svg';
        this.documentationUrl = 'https://www.verificaremails.com/docs/';
        this.properties = [
            { displayName: 'API Key', name: 'apiKey', type: 'string', default: '' },
        ];
    }
    ;
    ;
    ;
}
exports.VerificaremailsApi = VerificaremailsApi;
