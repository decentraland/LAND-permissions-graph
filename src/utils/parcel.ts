import { BigInt, Address } from '@graphprotocol/graph-ts'
import { LANDRegistry } from '../types/LANDRegistry/LANDRegistry'
import { getLandAddress } from '../utils/addresses'

export function decodeTokenId(assetId: BigInt): BigInt[] {
  let address = Address.fromString(getLandAddress())

  let registry = LANDRegistry.bind(address)
  let coordinate = registry.decodeTokenId(assetId)

  return [coordinate.value0, coordinate.value1]
}
