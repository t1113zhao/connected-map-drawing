import { AddStateObjectPayload, StateObject } from "./modelstate"
import { StationPair } from "./stations/stationState"

export enum StateIdType {
    AGENCY = "AGENCY",
    LINE = "LINE",
    SERVICE = "SERVICE",
    TRANSFER = "TRANSFER",
    TRACK = "TRACK",
    STATION = "STATION",
    BLOCK = "BLOCK",
    EDGE = "EDGE",
    TRACK_SEGMENT = "SEGMENT",
}

export type UidObject = {
    type: StateIdType
    primaryId: string
    parentId: string | null
}

export type ServiceRouteObjectIdType = StateIdType.BLOCK | StateIdType.EDGE

export type StationConnectorStateObjectIdType =
    | StateIdType.TRACK
    | StateIdType.TRANSFER

export type NonStationConnectorStateObjectIdType = Exclude<
    StateIdType,
    ServiceRouteObjectIdType | StationConnectorStateObjectIdType
>

export const UID_SPLITTER = "-"

export function getUidObjectFromUidString(uid: string): UidObject | null {
    const array = uid.split(UID_SPLITTER)

    if (array[0] in StateIdType) {
        return {
            type: array[0] as StateIdType,
            primaryId: array[1],
            parentId: array.length > 2 ? array[2] : null,
        }
    }
    return null
}

export function getUidStringFromUidObject(uidObject: UidObject): string {
    if (uidObject.parentId != null) {
        return (
            uidObject.type +
            UID_SPLITTER +
            uidObject.primaryId +
            UID_SPLITTER +
            uidObject.parentId
        )
    }
    return uidObject.type + UID_SPLITTER + uidObject.primaryId
}

export function uidGeneratorForNonStationConnectorStateObject(
    type: NonStationConnectorStateObjectIdType,
    arrayNum: number
): string {
    return type + UID_SPLITTER + arrayNum
}

export function uidGeneratorForStationConnectorStateObject(
    type: StationConnectorStateObjectIdType,
    arrayNum: number,
    stationPair: StationPair
) {
    return (
        type +
        UID_SPLITTER +
        arrayNum +
        UID_SPLITTER +
        stationPair[0].arrayNum +
        UID_SPLITTER +
        stationPair[1].arrayNum
    )
}

export function nextNumberForArray(array: Array<StateObject>): number {
    return lastNumberOfArray(array) + 1
}

export function lastNumberOfArray(array: Array<StateObject>): number {
    const maxID = array.reduce(
        (maxID, element) => Math.max(element.arrayNum, maxID),
        -1
    )
    return maxID
}
