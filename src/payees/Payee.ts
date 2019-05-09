import { Address } from '../common/Address';

export interface Payee {
  id: string;
  version: number;
  payeeName: string;
  address: Address;
  categoryId: string;
  image?: string | null;
  motto?: string | null;
  active: boolean;
}
