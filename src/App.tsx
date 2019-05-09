import React from 'react';
import { Greeter } from './Greeter';
import PayeesGrid from './payees/PayeesGridFn';
import { Payee } from './common/common-types';
import PayeesManager from './payees/PayeesManager';

const App: React.FC = () => {
  return (
    <main className="container">
      <header>
        <Greeter companyName={'Weyland-Yutani Corporation'} />
        <hr />
      </header>
      {/* <PayeesGrid payees={getPayees()} /> */}
      <PayeesManager />
    </main>
  );
};

export default App;

function getPayees(): Payee[] {
  return [
    {
      id: '1',
      version: 1,
      payeeName: 'DCH Mortgages',
      address: {
        street: '1285 Rezlog Plaza',
        city: 'Powhatan',
        state: 'RI',
        zip: '02212',
      },
      categoryId: '102',
      image: null,
      motto: null,
      active: true,
    },
    {
      id: '2',
      version: 1,
      payeeName: 'Ill Communication Telephones',
      address: {
        street: '1597 Figole Grove',
        city: 'Akron',
        state: 'OH',
        zip: '66345',
      },
      categoryId: '106',
      image: null,
      motto: null,
      active: true,
    },
    {
      id: '3',
      version: 1,
      payeeName: "Erol's Internet",
      address: {
        street: '453 Loma Linda Junction',
        city: 'Kansas City',
        state: 'KS',
        zip: '60019',
      },
      categoryId: '106',
      image: null,
      motto: null,
      active: true,
    },
    {
      id: '4',
      version: 1,
      payeeName: 'Acme Products, Inc',
      address: {
        street: '1669 Divided Court',
        city: 'Cheyenne',
        state: 'WY',
        zip: '48324',
      },
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
    },
    {
      id: '5',
      version: 1,
      payeeName: 'Shop-Rite Grocery Store',
      address: {
        street: '311 St. Paul Ave.',
        city: 'Baltimore',
        state: 'MD',
        zip: '08697',
      },
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
    },
    {
      id: '6',
      version: 1,
      payeeName: 'Sushi Land',
      address: {
        street: '808 Calvert St.',
        city: 'Baltimore',
        state: 'MD',
        zip: '01848',
      },
      categoryId: '103',
      image: null,
      motto: null,
      active: true,
    },
  ];
}
