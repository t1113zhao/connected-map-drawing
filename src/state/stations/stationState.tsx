import {LatLng} from 'leaflet'
import { StateObject } from '../modelstate';

export interface Station extends StateObject {
    uid: string;
    arrayNum: number;
    name: string;
    description: string;
    latLng : LatLng
}

export type StationPair = [Station, Station]

export type AddStationPayload = {
    name: string;
    description: string;
    latLng : LatLng
}

export type RemoveStationPayload = {
    uid: string;
    deletedAt: string
}

export type EditStationPayload = {
    uid: string;
    name: string;
    description: string;
    latLng : LatLng
}