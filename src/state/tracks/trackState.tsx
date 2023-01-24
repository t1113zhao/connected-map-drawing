import { StationPair } from "../stations/stationState"
import { LatLngPair } from "../modelstate"
import { LatLng } from "leaflet"

export type Track = {
    uid: string;
    number: string;
    stationPair: StationPair;
    stationNodes: LatLngPair;
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