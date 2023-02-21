import {LatLng} from 'leaflet'
import {AddStationPayload, Station, StationPair} from '../state/stations/stationState'
import { BasicAction } from './actionTypes'
import { AddAgencyPayload, Agency } from './agencies/agencyState'
import { AddLinePayload, Line } from './lines/lineState'
import { AddServicePayload, Service, ServiceRouteBlock, ServiceRouteEdge} from './services/serviceState'
import { AddTrackPayload, Track } from './tracks/trackState'
import { AddTransferPayload, Transfer } from './transfers/transferState'
import { StateIdType as SIT } from './uids'

export type LatLngPair = [LatLng, LatLng]

export type SwitchAgencyForLinePayload = {
    lineId: string;
    newAgencyId: string;
}

export type SwitchLineForServicePayload = {
    serviceId: string;
    newLineId: string;
}

export interface StateObject {
    uid: string;
    arrayNum: number;
}

export interface StationConnectorStateObject extends StateObject {
    uid: string;
    arrayNum: number;
    stationPair: StationPair;
}

export type NonStationConnectorStateObject = Exclude<StateObject, StationConnectorStateObject>

export type AddStateObjectPayload = AddAgencyPayload | AddLinePayload | AddServicePayload | AddStationPayload | AddTrackPayload | AddTransferPayload

export function getStateObjectFromAddStateObjectPayload(payload: AddStateObjectPayload, uid: string, number: number) {
    return {
        uid: uid,
        number: number,
        ...payload
    }
}
