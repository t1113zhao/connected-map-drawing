export enum MapView {
    STATION_TRANSFER_ALL,
    STATION_TRANSFER_SELECTED,
    STATION_TRANSFER_ADD,
    TRACK_ALL,
    TRACK_SELECTED,
    TRACK_ADD,
    AGENCY_ALL,
    AGENCY_LINE,
    AGENCY_SERVICE,
    AGENCY_SELECTED,
    LINE_ALL,
    LINE_SERVICE,
    LINE_SELECTED,
    SERVICE_SELECTED,
    SERVICE_ADD,
}

export function isSelectedMapView(mapView: MapView): boolean {
    return (
        mapView === MapView.AGENCY_SELECTED ||
        mapView === MapView.LINE_SELECTED ||
        mapView === MapView.SERVICE_SELECTED ||
        mapView === MapView.STATION_TRANSFER_SELECTED ||
        mapView === MapView.TRACK_SELECTED
    )
}

export function isAddMapView(mapView: MapView): boolean {
    return (
        mapView === MapView.STATION_TRANSFER_ADD ||
        mapView === MapView.TRACK_ADD ||
        mapView === MapView.SERVICE_ADD
    )
}
