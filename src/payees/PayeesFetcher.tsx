import React from 'react';
import { Payee } from '../common/common-types';
import { service } from './payees-service-generic';

interface PayeesFetcherState {
  payees: Payee[];
}

interface PayeesFetcherProps {
  children: (payees: Payee[]) => any;
}

export default class PayeesFetcher extends React.Component<
  PayeesFetcherProps,
  PayeesFetcherState
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
    return this.props.children(this.state.payees);
  }
}
