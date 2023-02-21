import React, { useRef } from "react"
import logo from "./logo.svg"
import { Icon, LatLng, Layer } from "leaflet"
import * as L from "leaflet"
import stationIcon from "../../res/station.png"
import { Station } from "../../state/stations/stationState"
import { Transfer } from "../../state/transfers/transferState"
import { Track } from "../../state/tracks/trackState"
import { StationLayer } from "./StationsLayer"
import {
    MapContainer,
    TileLayer,
    useMap,
    Popup,
    Marker,
    Circle,
    LayerGroup,
    FeatureGroup,
    Polyline,
} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { TransferLayer } from "./TransferLayer"
import { TrackLayer } from "./TrackLayer"
import { Agency } from "../../state/agencies/agencyState"
import { Line } from "../../state/lines/lineState"
import { isAddMapView, isSelectedMapView, MapView } from "../../state/MapView"
import { HighlightLevel } from "./HighlightLevel"
import { get } from "http"
import {
    getUidObjectFromUidString,
    StateIdType,
    UidObject,
} from "../../state/uids"
import { Service } from "../../state/services/serviceState"
import { StateObject } from "../../state/modelstate"

export type MapProps = {
    agencies: Agency[]
    lines: Line[]
    services: Service[]
    stations: Station[]
    transfers: Transfer[]
    tracks: Track[]

    center: LatLng
    zoom: number
}

export const Map: React.FC<MapProps> = (props) => {
    const { stations, transfers, tracks, center, zoom } = props
    const ref = useRef()

    return (
        <div className="Map">
            <MapContainer
                center={[center.lat, center.lng]}
                zoom={zoom}
                scrollWheelZoom={false}
                style={{ height: "100vh" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <TrackLayer tracks={tracks} />
                <TransferLayer transfers={transfers} />
                <StationLayer stations={stations} />
            </MapContainer>
        </div>
    )
}

