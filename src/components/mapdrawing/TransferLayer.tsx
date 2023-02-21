import React from 'react';
import {LatLng, Layer} from 'leaflet';
import * as L from 'leaflet'
import { Transfer } from '../../state/transfers/transferState';
import { Polyline, LayerGroup} from 'react-leaflet'
import { HighlightLevel } from './HighlightLevel';

type TransferProps = {
    transfers: Transfer[];
    visibilityList?: Map<string, HighlightLevel>;
}

export const TransferLayer: React.FC<TransferProps> = props => {
    const {transfers} = props;

    return (
        <LayerGroup>
            {
                transfers.map((feature, index) => {
                    return(
                        <Polyline
                            key = {feature.uid}
                            positions={[feature.stationPair[0].latLng, feature.stationPair[1].latLng]}
                            color = "#222222"
                            fillColor = "#000"
                            weight={2}
                            opacity={1}
                            fillOpacity={1}
                        />
                    )
                })
            }
        </LayerGroup>
    )
}