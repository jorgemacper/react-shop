import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';


const Map = ({ data }) => {

    console.log('data -> ', data);

    const markerIconConst = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon
    })

    const MapStyles = {
        width: '100%',
        height: '50vh'
    }

    const defaultCenter = {
        lat: data.latitude,
        lng: data.longitude
    }

    return (
        <MapContainer center={defaultCenter} zoom={13} style={MapStyles}>
            <TileLayer 
                attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={markerIconConst} position={defaultCenter}>
                <Popup>
                    This is the place that it was marked.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;