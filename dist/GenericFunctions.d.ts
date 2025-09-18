import type { IExecuteFunctions, ILoadOptionsFunctions, IPollFunctions, IHookFunctions } from 'n8n-workflow';
export type VerificarService = 'email' | 'phone_hlr' | 'name' | 'address' | 'phone_mnp' | 'phone_syntactic' | 'name_correction' | 'name_autocomplete';
/**
 * Versión con apiKey pasado como argumento (igual que ya usabas).
 * Tipamos `this` para que TS entienda que estamos dentro de una ejecución de n8n.
 */
export declare function verificaremailsApiRequest(this: IExecuteFunctions | ILoadOptionsFunctions | IPollFunctions | IHookFunctions, method: 'GET' | 'POST', term: string | Record<string, any>, apiKey: string, service: VerificarService): Promise<any>;
