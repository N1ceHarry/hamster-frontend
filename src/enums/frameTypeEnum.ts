export enum projectTypeEnum {
  'Contranct' = '1',
  'FrontEnd' = '2'
}

export enum ContractFrameTypeEnum {
  'EVM' = 1,
  'Aptos' = 2,
  'TON' = 3,
  'Starknet' = 4,
  'Sui' = 5,
  'Chainlink' = 6,
  'IC' = 7,
  'Solana' = 8,
}
export enum FrontEndFrameTypeEnum {

}


export enum ActionButtonEnum {
  'Check' = '1',
  'Build' = '2',
  'Deploy' = '3',
  'Ops' = '4',
}

export enum FrontEndDeployTypeEnum {
  'FrontEnd' = 0,
  'IPFS' = 1,
  'Container' = 2,
  'IC' = 3
}

export enum CanisterStatusEnum {
  'Processing' = 1,
  'Running' = 2,
  'Stopped' = 3
}
