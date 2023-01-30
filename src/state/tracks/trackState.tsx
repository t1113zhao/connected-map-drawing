import { StationPair } from "../stations/stationState"
import { LatLngPair, StationConnectorStateObject } from "../modelstate"
import { LatLng } from "leaflet"

export interface Track extends StationConnectorStateObject {
    uid: string;
    arrayNum: number;
    stationPair: StationPair;
    nodes: LatLng[]
}

export type AddTrackPayload = {
    stationPair: StationPair;
    stationNodes: LatLngPair
}

export type RemoveTrackPayload = {
    uid: string
}

export type ReplaceTrackRouteNodes = {
    uid: string;
    newNodes: LatLng[]
}

export type ClearTrackRouteNodes = {
    uid: string
}