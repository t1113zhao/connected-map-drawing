import {LatLng} from 'leaflet'
import {StationPair} from '../state/stations/stationState'
import {StateIdType} from './uids'

export type LatLngPair = [LatLng, LatLng]

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
