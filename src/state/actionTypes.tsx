export enum ActionTypes {
    //Agency Management Action Types
    ADD_AGENCY = 'ADD_AGENCY',
    EDIT_AGENCY = 'EDIT_AGENCY',
    REMOVE_AGENCY = 'REMOVE_AGENCY',
    
    //Line Management Action Types
    ADD_LINE = 'ADD_LINE',
    EDIT_LINE = 'EDIT_LINE',
    REMOVE_LINE = 'REMOVE_LINE',

    //Service Management Action Types
    ADD_SERVICE = 'ADD_SERVICE',
    EDIT_SERVICE = 'EDIT_SERVICE',
    REMOVE_SERVICE = 'REMOVE_SERVICE',

    //ServiceRoute Action Types
    APPEND_SR_BLOCK = 'APPEND_SR_BLOCK',
    REMOVE_SR_BLOCK = 'ADD_LAST_SR_BLOCK',
    ADD_SERVICE_ROUTE_BLOCKS = 'ADD_SERVICE_ROUTE_BLOCKS',
    CLEAR_SERVICE_ROUTE_BLOCKS = 'CLEAR_SERVICE_ROUTE_BLOCKS',

    // Editing Stops
    REMOVE_STOP = 'REMOVE_STOP',
    RESTORE_STOP = 'RESTORE_STOP',

    //Changing a Track Block
    REPLACE_SR_BLOCK = 'REPLACE_SR_BLOCK',
    SWITCH_ONEWAY_DIRECTION = 'SWITCH_ONEWAY_DIRECTION',
    ONEWAY_TO_TWOWAY = 'ONEWAY_TO_TWOWAY',
    TWOWAY_TO_ONEWAY = 'TWOWAY_TO_ONEWAY',
    REMOVE_SERVICE_ALONG_TRACK = 'REMOVE_SERVICE_ALONG_TRACK',

    //Station Actions
    ADD_STATION = 'ADD_STATION',
    EDIT_STATION = 'EDIT_STATION',
    REMOVE_STATION = 'REMOVE_STATION',

    //Transfer Action Types
    ADD_TRANSFER = 'ADD_TRANSFER',
    EDIT_TRANSFER = 'EDIT_TRANSFER',
    REMOVE_TRANSFER = 'REMOVE_TRANSFER',

    // Track Action Types
    ADD_TRACK = 'ADD_TRACK',
    REMOVE_TRACK = 'REMOVE_TRACK',

    //TrackRoute Action Types
    ADD_NEW_TRACKROUTE_NODES = 'ADD_NEW_TRACKROUTE_NODES',
    EDIT_TRACKROUTE_NODES = 'EDIT_TRACKROUTE_NODES',
    CLEAR_TRACKROUTE_NODES = 'CLEAR_TRACKROUTE_NODES',

    //UNDO REDO
    GLOBAL_UNDO = 'GLOBAL_UNDO',
    GLOBAL_REDO = 'GLOBAL_REDO',
    EMPTY = 'EMPTY'
}

export enum EnhanceType {
    UNDO = 'UNDO',
    REDO = 'REDO',
    UNENHANCED = 'UNENHANCED'
}

export type BasicAction<T> = {
    type: ActionTypes,
    payload: T
}

export type EnhancedAction<T,S> = {
    type: ActionTypes,
    payload: T,
    enhanceType: EnhanceType,
    invertedAction: BasicAction<S>
}