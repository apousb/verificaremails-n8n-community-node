export type VerificarService = 'email' | 'phone_hlr' | 'name' | 'address' | 'phone_mnp' | 'phone_syntactic' | 'name_correction' | 'name_autocomplete';
export declare function verificaremailsApiRequest(method: string, term: string | Record<string, any>, apiKey: string, service: VerificarService): Promise<any>;
