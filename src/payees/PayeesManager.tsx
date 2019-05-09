import React from 'react';
import { Payee } from '../common/common-types';
import { service } from './payees-service-generic';
import PayeesGrid from './PayeesGrid';

interface PayeesManagerState {
  payees: Payee[];
}

export default class PayeesManager extends React.Component<
  {},
  PayeesManagerState
> {
  state = { payees: [] };
  service = service;

  componentDidMount() {
    this.service.search().then(payees => {
      if (payees) {
        this.setState({ payees });
      }
    });
  }

  render() {
    let comp = <p>Waiting....</p>;
    if (this.state.payees.length > 0) {
      comp = <PayeesGrid payees={this.state.payees} />;
    }

    return comp;
  }
}
