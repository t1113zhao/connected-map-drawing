import { StateIdType, UID_SPLITTER} from "../uids"

export type Service = {
    uid: string,
    number: string,
    lineId: string,
    name: string,
    description: string,
    color: string,
    stopsById: string[],
    serviceRouteBlocks: ServiceRouteBlock[]
}

export type ServiceRouteBlock = {
    uid: string,
    edges: ServiceRouteEdge[]
} 

export function getServiceRouteBlockId(serviceId: string, block: ServiceRouteBlock): string {

    let output = StateIdType.BLOCK + UID_SPLITTER + serviceId + UID_SPLITTER
    let trackSet = new Set<string>()

    for(let i = 0; i < block.edges.length; i++) {
        let trackId = block.edges[i].trackId
        if(!trackSet.has(trackId)){
            trackSet.add(trackId)
            output = output + UID_SPLITTER + trackId 
        }
    }

    return output
}

export function getServiceIdFromServiceRouteBlockId (uid: string): string | null {
    const array = uid.split(UID_SPLITTER)

    if (array[0] in StateIdType && array.length > 2) {
        return array[1]
    }

    return null
}

// TODO, get serviceBlockID and serviceRouteEdge from id

export type ServiceRouteEdge = {
    uid: string,
    trackId: string,
    fromStationId: string,
    toStationId: string
}

export function getServiceRouteEdgeId(serviceId: string, edge: ServiceRouteEdge): string {
    return StateIdType.EDGE + UID_SPLITTER + serviceId + UID_SPLITTER + edge.trackId + UID_SPLITTER + edge.fromStationId + UID_SPLITTER + edge.toStationId 
}

export type AddServicePayload = {
    lineId: string,
    name: string,
    description: string,
    color: string
}

export type EditServicePayload = {
    uid: string,
    name: string,
    description: string,
    color: string
}

export type RemoveServicePayload = {
    uid: string,
    deletedAt: string
}

export type AppendServiceRouteBlockPayload = {
    serviceId: string,
    block: ServiceRouteEdge[],
    appendToBack: boolean // if false append to front
}

export type RemoveServiceRouteBlockPayload = {
    serviceId: string,
    removeFromBack: boolean // if false remove from front
}

export type AddServiceRouteBlocksPayload = {
    serviceId: string,
    blocks: ServiceRouteEdge[][],
}

export type ClearServiceRouteBlocksPayload = {
    serviceId: string
}

export type ReplaceServiceRouteBlockPayload = {
    replaceUid: string,
    replacementBlock: ServiceRouteEdge[]
}

// SWITCH_ONEWAY_DIRECTION
// ONEWAY_TO_TWOWAY
// TWOWAY_TO_ONEWAY
// REMOVE_SERVICE_ALONG_TRACK
export type ServiceRouteEdgePayload = {
    edgeId: string
}

// REMOVE_STOP and RESTORE_STOP
export type ToggleStopPayload = {
    stationId: string
}