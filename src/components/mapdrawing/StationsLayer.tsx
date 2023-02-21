import React from 'react';
import {Icon, LatLng, Layer} from 'leaflet';
import * as L from 'leaflet'
import stationIcon from '../../res/station.png'
import { Station } from '../../state/stations/stationState';
import { Circle, LayerGroup} from 'react-leaflet'
import { HighlightLevel } from './HighlightLevel';

type StationProps = {
    stations: Station[];
    visibilityList?: Map<string, HighlightLevel>;
}

export const StationLayer: React.FC<StationProps> = props => {

    const {stations} = props;

    return (
        <LayerGroup>
            {
                stations.map((feature, index) => {
                    return(
                        <Circle 
                            key = {feature.uid}
                            center = {[feature.latLng.lat, feature.latLng.lng]}
                            fillColor = "#D61B1B"
                            radius={100}
                            color = "#000"
                            weight={1}
                            opacity={1}
                            fillOpacity={1}
                        />
                    )

                })
            }
        </LayerGroup>
    )
}