import { dataSource } from '@graphprotocol/graph-ts'

const LandMainnet = '0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d'
const EstateMainnet = '0x959e104e1a4db6317fa58f8295f586e1a978c297'

const LandSepolia = '0x42f4ba48791e2de32f5fbf553441c2672864bb33'
const EstateSepolia = '0x369a7fbe718c870c79f99fb423882e8dd8b20486'

export function getLandAddress(): string {
  let network = dataSource.network()

  if (network == 'sepolia') {
    return LandSepolia
  }

  return LandMainnet
}

export function getEstateAddress(): string {
  let network = dataSource.network()

  if (network == 'sepolia') {
    return EstateSepolia
  }

  return EstateMainnet
}
