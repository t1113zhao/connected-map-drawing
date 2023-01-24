import {LatLng} from 'leaflet'

export type Station = {
    uid: string;
    number: string;
    name: string;
    description: string;
    latLng : LatLng
}

export type StationPair = [string, string]

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