import { Payee } from '../common/common-types';

interface PayeesSearchFields {
  payeeName: string;
  categoryId: string;
  motto: string;
  active: boolean;
  'address.street': string;
  'address.city': string;
  'address.state': string;
  'address.zip': string;
}

type PayeesSearchCriteria = Partial<PayeesSearchFields>;

interface PayeeService {
  getById: (id: string) => Promise<Payee | null>;
  search: (criteria?: PayeesSearchCriteria) => Promise<Payee[] | null>;
  [key: string]: ((...args: any[]) => any) | string;
}

const baseUrl = 'http://localhost:8000/payees';

export const service: PayeeService = {
  getById(id) {
    const response = fetch(`${baseUrl}/${id}`);
    const data = response
      .then(r => parseResponse(r) as Promise<Payee | null>)
      .catch(handleError) as Promise<Payee | null>;
    return data;
  },

  search(criteria = {}) {
    return fetch(baseUrl)
      .then(r => parseResponse(r) as Promise<Payee[] | null>)
      .catch(handleError) as Promise<Payee[] | null>;
  },
};

function parseResponse(response: Response): Promise<Payee | Payee[] | null> {
  if (response.ok) {
    return response.json();
  } else if (response.status === 404) {
    return Promise.resolve(null);
  } else {
    return Promise.reject('Bad response');
  }
}

function handleError(error: Error) {
  console.error('Service error: ', error);
  return Promise.reject(new Error('Service error'));
}
