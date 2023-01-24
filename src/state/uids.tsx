
export enum StateIdType {
    AGENCY = "AGENCY",
    LINE = "LINE",
    SERVICE = "SERVICE",
    TRANSFER = "TRANSFER",
    TRACK = "TRACK",
    STATION = "STATION",
    BLOCK = "BLOCK",
    EDGE = "EDGE",
    TRACK_SEGMENT = "SEGMENT"
}

type UidObject = {
    type: StateIdType;
    primaryId: string;
    parentId: string | null
}

export const UID_SPLITTER = "-"

export function getUidObjectFromUidString(uid: string): UidObject | null {
    const array = uid.split(UID_SPLITTER)

    if (array[0] in StateIdType) {
        return {
            type: array[0] as StateIdType,
            primaryId: array[1],
            parentId: array.length > 2 ? array[2] : null
        }
    }
    return null
}

export function getUidStringFromUidObject(uidObject: UidObject): string {
    if (uidObject.parentId != null) {
        return uidObject.type + UID_SPLITTER + uidObject.primaryId + UID_SPLITTER + uidObject.parentId
    }
    return uidObject.type + UID_SPLITTER + uidObject.primaryId
}