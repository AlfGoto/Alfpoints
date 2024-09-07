'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as icon from './icons'
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

export default function Map() {
    const [loc, setLoc] = useState<locInterface>()

    navigator.geolocation.getCurrentPosition(function (position) { setLoc({ lat: position.coords.latitude, lon: position.coords.longitude }) });

    if (!loc) return <p>Loading...</p>
    return (<MapContainer center={[loc.lat, loc.lon]} zoom={23} scrollWheelZoom={false} dragging={false} doubleClickZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url=" https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
        <Marker position={[loc.lat, loc.lon]} icon={icon.housingIcon}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    </MapContainer>)
}

// Couleurs soft
// URL : https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png
// Description : Carte légère et colorée, idéale pour la visualisation de données.

// Blanche
// URL : https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png
// Description : Style minimaliste avec des couleurs claires.

// Noir
// URL : https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png
// Description : Carte en mode sombre, idéale pour des interfaces de nuit.

interface locInterface {
    lon: number,
    lat: number
}