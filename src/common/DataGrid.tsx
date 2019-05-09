import React from 'react';
import { Payee } from './common-types';

interface Column {
  field: string;
  label: string;
}

interface DataGridProps<T> {
  data: T[];
  columns: Column[];
}

export default class DataGrid<T> extends React.Component<DataGridProps<T>> {
  constructor(props: DataGridProps<T>) {
    super(props);
  }

  render() {
    const fields = this.props.columns.map(column => column.field);

    return (
      <table className="table table-striped table-hover">
        <tbody />
      </table>
    );
  }
}

/* interface PayeesGridProps {
  data: Payee[];
}

export class PayeesGrid extends React.Component<PayeesGridProps> {}
 */
