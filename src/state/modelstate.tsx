import {LatLng} from 'leaflet'
import {StationPair} from '../state/stations/stationState'
import {StateIdType} from './uids'

export type LatLngPair = [LatLng, LatLng]

export type SwitchAgencyForLinePayload = {
    lineId: string,
    newAgencyId: string
}

export type SwitchLineForServicePayload = {
    serviceId: string,
    newLineId: string
}

