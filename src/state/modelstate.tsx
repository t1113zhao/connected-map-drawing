import {LatLng} from 'leaflet'
import {StationPair} from '../state/stations/stationState'
import {StateIdType} from './uids'

export enum TransferType {
    IN_STATION = "IN_STATION",
    FREE_OUT_STATION = "FREE_OUT_STATION",
    PAID_OUT_STATION = "PAID_OUT_STATION"
}

export type Transfer = {
    uid: string,
    number: string,
    stationPair: StationPair,
    type: TransferType
}

type LatLngPair = [LatLng, LatLng]

export type Track = {
    uid: string,
    number: string,
    stationPair: StationPair,
    stationNodes: LatLngPair,
    nodes: LatLng[]
}

export type Agency = {
    uid: string,
    number: string,
    name: string,
    description: string,
    color: string,
    lines: string[]
}

export type Line = {
    uid: string,
    number: string,
    agencyId: string,
    name: string,
    description: string,
    color: string
    services: string[]
}
