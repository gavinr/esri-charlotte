import React from 'react';

interface HasId {
  id: number;
}

type Id = 1 | 2 | 3 | 4;

interface GreeterAttrs {
  companyName: string;
}

type GreeterProps = GreeterAttrs & HasId;

const Greeter = (props: GreeterAttrs) => {
  return <h1>Hello from your friends at {props.companyName}</h1>;
};

export { Greeter };
