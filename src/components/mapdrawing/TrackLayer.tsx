import React from 'react';
import {LatLng, Layer} from 'leaflet';
import * as L from 'leaflet'
import { Transfer } from '../../state/transfers/transferState';
import { Polyline, LayerGroup} from 'react-leaflet'
import { Track } from '../../state/tracks/trackState';
import { HighlightLevel } from './HighlightLevel';

type TrackProps = {
    tracks: Track[];
    visibilityList?: Map<string, HighlightLevel>;
}

export const TrackLayer: React.FC<TrackProps> = props => {
    const {tracks} = props;

    return (
        <LayerGroup>
            {
                tracks.map((feature, index) => {
                    let positions = [feature.stationPair[0].latLng, ...feature.nodes, feature.stationPair[1].latLng]

                    return(
                        <Polyline
                            key={feature.uid}
                            positions={positions}
                            color = "#000"
                            fillColor = "#000"
                            weight={4}
                            opacity={1}
                            fillOpacity={1}
                        />
                    )

                })
            }
        </LayerGroup>
    )
}