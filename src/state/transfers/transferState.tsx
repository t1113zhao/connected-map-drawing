import { StationPair } from "../stations/stationState"
import { LatLngPair } from "../modelstate"

export enum TransferType {
    IN_STATION = "IN_STATION",
    FREE_OUT_STATION = "FREE_OUT_STATION",
    PAID_OUT_STATION = "PAID_OUT_STATION"
}

export type Transfer = {
    uid: string;
    number: string;
    stationPair: StationPair;
    stationLatLngs: LatLngPair;
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
