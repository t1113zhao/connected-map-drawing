import { LatLng } from "leaflet";
import { Station, StationPair } from "../../state/stations/stationState";
import { Track } from "../../state/tracks/trackState";
import { Transfer, TransferType } from "../../state/transfers/transferState";
import { StateIdType, uidGeneratorForNonStationConnectorStateObject, uidGeneratorForStationConnectorStateObject } from "../../state/uids";

export function generateStations(coordinates: number[][]): Station[]{
   let outputArray: Station[] = [];
    for(let i = 0; i < coordinates.length; i++) {
        let uid = uidGeneratorForNonStationConnectorStateObject(StateIdType.STATION, i)
    outputArray.push(
        {
            uid,
            arrayNum: i,
            name: coordinates[i][0] + "," + coordinates[i][1],
            description:"",
            latLng: new LatLng(coordinates[i][0], coordinates[i][1])
        }
    )
   }
   return outputArray 
}

export function generateTransfers(stations: Station[], connections: number[][]): Transfer[] {
    let outputArray: Transfer[] = [];
    for(let i = 0; i < connections.length; i++) {
        let station1 = stations[connections[i][0]]
        let station2 = stations[connections[i][1]]
        let stationPair: StationPair = [station1, station2]
        let uid = uidGeneratorForStationConnectorStateObject (StateIdType.TRANSFER, i, stationPair)
        outputArray.push(
            {
                uid,
                arrayNum: i,
                stationPair,
                type: TransferType.IN_STATION
            }
        )
    }
    return outputArray
}

export type trackStateGeneratorInfo = {
    stationIds: number[],
    nodeNumbers: number[][]
}

export function generateTracks(stations: Station[], trackStateGeneratorInfo: trackStateGeneratorInfo[]): Track[] {
    let outputArray: Track[] = [];
    for(let i =0; i< trackStateGeneratorInfo.length; i++) {
        let {stationIds, nodeNumbers} = trackStateGeneratorInfo[i]
        console.log(nodeNumbers)
        const nodes = nodeNumbers.map (cur => {
            console.log(cur)
            return new LatLng(cur[0],cur[1])
        })
        console.log(JSON.stringify(nodes))
        console.log(nodes.length)
        let station1 = stations[stationIds[0]]
        let station2 = stations[stationIds[1]]
        let stationPair: StationPair = [station1, station2]
        let uid = uidGeneratorForStationConnectorStateObject (StateIdType.TRACK, i, stationPair)

        outputArray.push(
            {
                uid,
                arrayNum: i,
                nodes: nodes,
                stationPair: stationPair
            }
        )

    }
    console.log(outputArray)
    return outputArray
}