"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verificaremailsApiRequest = verificaremailsApiRequest;
async function verificaremailsApiRequest(method, term, apiKey, service) {
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
    const options = {
        headers: { Accept: 'application/json' },
        method,
        uri: `https://dashboard.verificaremails.com/myapi/${endpoint}?auth-token=${apiKey}&term=${encodeURIComponent(typeof term === 'string' ? term : JSON.stringify(term))}`,
        json: true,
    };
    try {
        // @ts-ignore - n8n provides helpers at runtime
        const response = await this.helpers.request(options);
        return response;
    }
    catch (error) {
        throw new Error(`Verificaremails API request failed: ${(error === null || error === void 0 ? void 0 : error.message) || error}`);
    }
}
