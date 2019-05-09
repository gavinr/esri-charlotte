import React, { Component } from 'react';
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

export default class PayeesGrid extends Component<
  PayeesGridProps,
  PayeesGridState
> {
  constructor(props: PayeesGridProps) {
    super(props);

    this.state = {
      sortField: '',
      sortDirection: 'asc',
    };

    this.otherClickHandler = this.otherClickHandler.bind(this);
  }

  otherClickHandler() {
    console.log('A header was clicked upon by you: ', this.state);
  }

  handleHeaderClick = (sortField: string) => {
    console.log(`You want to sort on the ${sortField} field.`);
    let sortDirection: SortDirection = 'asc';
    if (
      sortField === this.state.sortField &&
      this.state.sortDirection === 'asc'
    ) {
      sortDirection = 'desc';
    }

    this.setState({ sortField, sortDirection });
  };

  render() {
    const sortedPayees = lodash.orderBy(
      this.props.payees,
      this.state.sortField,
      this.state.sortDirection,
    );

    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th onClick={() => this.handleHeaderClick('payeeName')}>
              Payee Name
            </th>
            <th onClick={() => this.handleHeaderClick('address.city')}>City</th>
            <th onClick={() => this.handleHeaderClick('address.state')}>
              State
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPayees.map(payee => (
            <tr key={payee.id}>
              <td>{payee.payeeName}</td>
              <td>{payee.address && payee.address.city}</td>
              <td>{payee.address && payee.address.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
