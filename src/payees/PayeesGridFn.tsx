import React, { useState, useEffect } from 'react';
import { Payee } from '../common/common-types';
import * as lodash from 'lodash';

type SortDirection = 'asc' | 'desc';

interface PayeesGridProps {
  payees: Payee[];
}

interface PayeesGridState {
  sortField: string;
  sortDirection: SortDirection;
}

const PayeesGrid = ({ payees }: PayeesGridProps) => {
  const [sortConfig, setSortConfig] = useState<PayeesGridState>({
    sortField: '',
    sortDirection: 'asc',
  });

  const handleHeaderClick = (sortField: string) => {
    console.log(`You want to sort on the ${sortField} field.`);
    let sortDirection: SortDirection = 'asc';
    if (
      sortField === sortConfig.sortField &&
      sortConfig.sortDirection === 'asc'
    ) {
      sortDirection = 'desc';
    }

    setSortConfig({ sortField, sortDirection });
  };

  const sortedPayees = lodash.orderBy(
    payees,
    sortConfig.sortField,
    sortConfig.sortDirection,
  );

  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr className="clickable">
          <th onClick={() => handleHeaderClick('payeeName')}>Payee Name</th>
          <th onClick={() => handleHeaderClick('address.city')}>City</th>
          <th onClick={() => handleHeaderClick('address.state')}>State</th>
        </tr>
      </thead>
      <tbody>
        {sortedPayees.map(payee => (
          <tr key={payee.id}>
            <td>{payee.payeeName}</td>
            <td>{payee.address.city}</td>
            <td>{payee.address.state}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PayeesGrid;
