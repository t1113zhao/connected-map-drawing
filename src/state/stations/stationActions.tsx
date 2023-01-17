
import {ActionTypes, BasicAction, EnhancedAction} from '../actionTypes'
import * as SS from './stationState'
import {LatLng} from 'leaflet'
import { RootState } from '../../store'

// This needs to be given station state, to get the number and uid
export function addStation(name: string, description: string, latLng: LatLng): BasicAction<SS.AddStationPayload> {
    return {
        type: ActionTypes.ADD_STATION,
        payload: {
            name: name, 
            description: description,
            latLng: latLng
        }
    }
}

export function editStation(uid: string, name: string, description: string, latLng: LatLng): BasicAction<SS.EditStationPayload> {
    return {
        type: ActionTypes.EDIT_STATION,
        payload: {
            uid: uid,
            name: name, 
            description: description,
            latLng: latLng
        }
    }
}

export function removeStation(uid: string, deletedAt: string): BasicAction<SS.RemoveStationPayload> {
    return {
        type: ActionTypes.REMOVE_STATION,
        payload: {
            uid: uid,
            deletedAt: deletedAt
        }
    }
}
