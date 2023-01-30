import { StationPair } from "../stations/stationState"
import { LatLngPair, StationConnectorStateObject } from "../modelstate"

export enum TransferType {
    IN_STATION = "IN_STATION",
    FREE_OUT_STATION = "FREE_OUT_STATION",
    PAID_OUT_STATION = "PAID_OUT_STATION"
}

export interface Transfer extends StationConnectorStateObject {
    uid: string;
    arrayNum: number;
    stationPair: StationPair;
    type: TransferType
}

export type AddTransferPayload = {
    stationPair: StationPair;
    stationLatLngs: LatLngPair;
    type: TransferType
}

export type EditTransferPayload = {
    uid: string;
    type: TransferType
}

export type RemoveTransferPayload = {
    uid: string
}
