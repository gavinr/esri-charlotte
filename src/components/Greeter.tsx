import React from "react";

interface GreeterProps {
  companyName: string;
  logo: string;
}

export default function Greeter({ companyName, logo, ...props }: GreeterProps) {
  return (
    <div>
      Hello, {companyName}! <br />
      <img className="float-right" src={logo} alt="Logo" />
    </div>
  );
}
