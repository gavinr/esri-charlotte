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

/* interface DataService {
  getById: <T>(id: string) => Promise<T | null>;
  search: <T>(criteria?: PayeesSearchCriteria) => Promise<T[] | null>;
} */

interface DataService<T> {
  getById: (id: string) => Promise<T | null>;
  search: (criteria?: PayeesSearchCriteria) => Promise<T[] | null>;
}

const baseUrl = 'http://localhost:8000/payees';

export const service: DataService<Payee> = {
  getById(id: string) {
    const response = fetch(`${baseUrl}/${id}`);
    const data = response.then(r => parseResponse<Payee>(r)).catch(handleError);
    return data;
  },

  search(criteria = {}) {
    return fetch(baseUrl)
      .then(r => parseResponse<Payee[]>(r))
      .catch(handleError);
  },
};

function parseResponse<T>(response: Response): Promise<T | null> {
  if (response.ok) {
    return response.json();
  } else if (response.status === 404) {
    return Promise.resolve(null);
  } else {
    return Promise.reject('Bad response');
  }
}

function handleError(error: Error): Promise<never> {
  console.error('Service error: ', error);
  return Promise.reject(new Error('Service error'));
}
