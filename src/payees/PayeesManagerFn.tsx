import React, { useEffect, useState } from 'react';
import { Payee } from '../common/common-types';
import { service } from './payees-service-generic';
import PayeesGrid from './PayeesGrid';

const PayeesManager = () => {
  const [payees, setPayees] = useState<Payee[]>([]);

  useEffect(() => {
    // if (payees.length === 0) {
    service.search().then(fetchedPayees => {
      if (fetchedPayees) {
        setPayees(fetchedPayees);
      }
    });
    // }

    return () => {
      console.log('The equivalent of componentWillUnmount()');
    };
  }, [payees.length]);

  let comp = <p>Waiting....</p>;
  if (payees.length > 0) {
    comp = <PayeesGrid payees={payees} />;
  }

  return comp;
};

export default PayeesManager;
