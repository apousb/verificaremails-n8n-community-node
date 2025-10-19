"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaremailsApiRequest = verificaremailsApiRequest;
const n8n_workflow_1 = require("n8n-workflow");
/**
 * Versión con apiKey pasado como argumento (igual que ya usabas).
 * Tipamos `this` para que TS entienda que estamos dentro de una ejecución de n8n.
 */
async function verificaremailsApiRequest(method, term, apiKey, service) {
    var _a, _b, _c, _d, _e, _f;
    const endpointMap = {
        email: 'email/validate/single',
        phone_hlr: 'phone/validate/single',
        name: 'name/validate/single',
        address: 'address/validate/single',
        phone_mnp: 'phonemnp/validate/single',
        phone_syntactic: 'phonesyntactic/validate/single',
        name_correction: 'fuzzysearch/validate/single',
        name_autocomplete: 'namecomplete/validate/single',
    };
    const endpoint = endpointMap[service];
    const url = `https://dashboard.verificaremails.com/myapi/${endpoint}`;
    const qs = {
        'auth-token': apiKey,
        term: typeof term === 'string' ? term : JSON.stringify(term),
    };
    const options = {
        method,
        qs,
        uri: url,
        json: true,
        headers: { Accept: 'application/json' },
    };
    try {
        // @ts-ignore — helpers la provee n8n en runtime
        const response = await this.helpers.httpRequest(options);
        return response;
    }
    catch (error) {
        // Propaga un error estandarizado para que n8n muestre detalle en la UI
        throw new n8n_workflow_1.NodeApiError(this.getNode(), error, {
            message: (_c = (_b = (_a = error === null || error === void 0 ? void 0 : error.response) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.message) !== null && _c !== void 0 ? _c : 'Verificaremails API request failed',
            description: (_f = (_e = (_d = error === null || error === void 0 ? void 0 : error.response) === null || _d === void 0 ? void 0 : _d.body) === null || _e === void 0 ? void 0 : _e.error) !== null && _f !== void 0 ? _f : error === null || error === void 0 ? void 0 : error.message,
        });
    }
}
