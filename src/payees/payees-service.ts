import { Payee } from "../common/common-types";

interface PayeesSearchFields {
  payeeName: string;
  categoryId: string;
  motto: string;
  active: boolean;
  "address.street": string;
  "address.city": string;
  "address.state": string;
  "address.zip": string;
}

type PayeesSearchCriteria = Partial<PayeesSearchFields>;

interface PayeeService {
  getById: (id: string) => Promise<Payee | null>;
  search: (criteria: PayeesSearchCriteria) => Promise<Payee[]>;
  // [key: string]: (...args: any[]) => any;
}

const baseUrl = "http://localhost:8000/payees";

export const service: PayeeService = {
  getById(id) {
    return new Promise((resolve, reject) => {
      fetch(`${baseUrl}/${id}`).then((res: Response) => {
        if (res.ok) {
          resolve(res.json());
        } else if (res.status === 404) {
          resolve(null);
        } else {
          reject("Base Response");
        }
      }, handleError);
    });
  },

  search(criteria = {}) {
    return fetch(baseUrl)
      .then(response => response.json())
      .catch(handleError);
  }
};

function handleError(error: Error): Promise<Error> {
  console.error("Service error: ", error);
  return Promise.reject(new Error("Service error"));
}
