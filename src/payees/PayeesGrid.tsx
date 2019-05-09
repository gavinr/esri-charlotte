import React, { Component } from 'react';
import { Payee } from '../common/common-types';

interface Column {
  field: string;
  label: string;
}

interface PayeesGridProps {
  payees: Payee[];
}

export default class PayeesGrid extends Component<PayeesGridProps> {
  render() {
    return (
      <table className="table table-striped table-hover">
        <tbody />
      </table>
    );
  }
}
