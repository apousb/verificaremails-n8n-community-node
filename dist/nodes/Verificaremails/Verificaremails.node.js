"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verificaremails = void 0;
const GenericFunctions_1 = require("../../GenericFunctions");
class Verificaremails {
    constructor() {
        this.description = {
            displayName: 'VerificarEmails',
            name: 'verificaremails',
            icon: 'file:verificaremails.svg',
            group: ['transform'],
            version: 1,
            description: 'Validate emails, phones, names, and addresses using VerificarEmails.com API',
            defaults: {
                name: 'VerificarEmails',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: 'verificaremailsApi',
                    required: true,
                },
            ],
            properties: [
                {
                    displayName: 'Service',
                    name: 'service',
                    type: 'options',
                    options: [
                        { name: 'Email Validation', value: 'email' },
                        { name: 'Phone HLR', value: 'phone_hlr' },
                        { name: 'Phone MNP', value: 'phone_mnp' },
                        { name: 'Phone Syntax', value: 'phone_syntactic' },
                        { name: 'Name Validation', value: 'name' },
                        { name: 'Address Validation', value: 'address' },
                        { name: 'Name Correction', value: 'name_correction' },
                        { name: 'Name Autocomplete', value: 'name_autocomplete' },
                    ],
                    default: 'email',
                    required: true,
                },
                {
                    displayName: 'Email',
                    name: 'email',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { service: ['email'] } },
                },
                {
                    displayName: 'Phone (HLR)',
                    name: 'phoneHlr',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { service: ['phone_hlr'] } },
                },
                {
                    displayName: 'Phone (MNP)',
                    name: 'phoneMnp',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { service: ['phone_mnp'] } },
                },
                {
                    displayName: 'Phone (Syntax)',
                    name: 'phoneSyntactic',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { service: ['phone_syntactic'] } },
                },
                {
                    displayName: 'Name',
                    name: 'name',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { service: ['name'] } },
                },
                {
                    displayName: 'Address',
                    name: 'address',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { service: ['address'] } },
                },
                {
                    displayName: 'Input Name',
                    name: 'nameInput',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { service: ['name_correction', 'name_autocomplete'] } },
                },
                {
                    displayName: 'Use First Names',
                    name: 'useFirstNames',
                    type: 'boolean',
                    default: true,
                    displayOptions: { show: { service: ['name_correction', 'name_autocomplete'] } },
                },
                {
                    displayName: 'Gender',
                    name: 'gender',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { service: ['name_correction', 'name_autocomplete'] } },
                },
                {
                    displayName: 'Country (ISO-2)',
                    name: 'country',
                    type: 'string',
                    default: '',
                    displayOptions: { show: { service: ['name_correction', 'name_autocomplete'] } },
                },
            ],
        };
    }
    async execute() {
        var _a, _b, _c, _d;
        const items = this.getInputData();
        const out = [];
        const continueOnFail = this.continueOnFail();
        const credentials = await this.getCredentials('verificaremailsApi');
        const apiKey = credentials.apiKey;
        for (let i = 0; i < items.length; i++) {
            try {
                const service = this.getNodeParameter('service', i);
                let term = '';
                switch (service) {
                    case 'email':
                        term = this.getNodeParameter('email', i);
                        break;
                    case 'phone_hlr':
                        term = this.getNodeParameter('phoneHlr', i);
                        break;
                    case 'phone_mnp':
                        term = this.getNodeParameter('phoneMnp', i);
                        break;
                    case 'phone_syntactic':
                        term = this.getNodeParameter('phoneSyntactic', i);
                        break;
                    case 'name':
                        term = this.getNodeParameter('name', i);
                        break;
                    case 'address':
                        term = this.getNodeParameter('address', i);
                        break;
                    case 'name_correction': {
                        const nameInput = this.getNodeParameter('nameInput', i);
                        const useFirstNames = this.getNodeParameter('useFirstNames', i);
                        const gender = this.getNodeParameter('gender', i);
                        const country = this.getNodeParameter('country', i);
                        const payload = { name: nameInput, use_first_names: Number(useFirstNames) };
                        if (gender)
                            payload.gender = gender;
                        if (country)
                            payload.country = country;
                        term = payload;
                        break;
                    }
                    case 'name_autocomplete': {
                        const nameInput = this.getNodeParameter('nameInput', i);
                        const useFirstNames = this.getNodeParameter('useFirstNames', i);
                        const gender = this.getNodeParameter('gender', i);
                        const country = this.getNodeParameter('country', i);
                        const payload = { name: nameInput, use_first_names: Number(useFirstNames) };
                        if (gender)
                            payload.gender = gender;
                        if (country)
                            payload.country = country;
                        term = payload;
                        break;
                    }
                }
                const response = await GenericFunctions_1.verificaremailsApiRequest.call(this, 'GET', term, apiKey, service);
                const status = (_c = (_b = (_a = response === null || response === void 0 ? void 0 : response.result) === null || _a === void 0 ? void 0 : _a.status) !== null && _b !== void 0 ? _b : response === null || response === void 0 ? void 0 : response.status) !== null && _c !== void 0 ? _c : 'unknown';
                out.push({
                    json: {
                        service,
                        term,
                        status,
                        apiResponse: response,
                    },
                    pairedItem: { item: i },
                });
            }
            catch (error) {
                if (continueOnFail) {
                    out.push({
                        json: { error: (_d = error.message) !== null && _d !== void 0 ? _d : String(error) },
                        pairedItem: { item: i },
                    });
                    continue;
                }
                throw error;
            }
        }
        return [out];
    }
}
exports.Verificaremails = Verificaremails;
