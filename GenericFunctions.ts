// src/GenericFunctions.ts
import type {
  IExecuteFunctions,
  ILoadOptionsFunctions,
  IPollFunctions,
  IHookFunctions,
  IDataObject,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

export type VerificarService =
  | 'email'
  | 'phone_hlr'
  | 'name'
  | 'address'
  | 'phone_mnp'
  | 'phone_syntactic'
  | 'name_correction'
  | 'name_autocomplete';

/**
 * Versión con apiKey pasado como argumento (igual que ya usabas).
 * Tipamos `this` para que TS entienda que estamos dentro de una ejecución de n8n.
 */
export async function verificaremailsApiRequest(
  this: IExecuteFunctions | ILoadOptionsFunctions | IPollFunctions | IHookFunctions,
  method: 'GET' | 'POST',
  term: string | Record<string, any>,
  apiKey: string,
  service: VerificarService,
): Promise<any> {
  const endpointMap: Record<VerificarService, string> = {
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
  const qs: IDataObject = {
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
    const response = await this.helpers.request(options);
    return response;
  } catch (error: any) {
    // Propaga un error estandarizado para que n8n muestre detalle en la UI
    throw new NodeApiError(this.getNode(), error, {
      message: error?.response?.body?.message ?? 'Verificaremails API request failed',
      description: error?.response?.body?.error ?? error?.message,
    });
  }
}