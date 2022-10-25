export class SingletonDeployment {
  defaultAddress: string;
  version: string;
  abi: Abi[];
  networkAddresses: Map<string, string>;
  contractName: string;
  released: boolean;
}

export class DeploymentFilter {
  version: string | null;
  released: boolean;
  network: string | null;
}

export class Abi {
  anonymous: boolean;
  inputs: Input[] | null;
  outputs: Output[] | null;
  name: string | null;
  type: string | null;
  payable: boolean;
  constant: boolean;
  stateMutability: string | null;
}

export class Input {
  indexed: boolean;
  internalType: string;
  name: string;
  type: string;
}

export class Output {
  internalType: string;
  name: string;
  type: string;
}
