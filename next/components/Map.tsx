'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as icon from './icons'
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import Poi from './Poi'

export default function Map() {
    const [loc, setLoc] = useState<locInterface>()
    // const [oldLoc, setOldLoc] = useState<locInterface>()
    const [poi, setPoi] = useState<Array<poiInterface>>([])

    useEffect(() => { getLoc() }, [])
    useEffect(() => { getNearby() }, [loc])

    function getLoc() { navigator.geolocation.getCurrentPosition(function (position) { setLoc({ lat: position.coords.latitude, lon: position.coords.longitude }) }) }
    function getNearby() {
        if (!loc) return
        fetch('https://eu1.locationiq.com/v1/nearby?key=' + process.env.NEXT_PUBLIC_LOCATIONIQ_TOKEN + '&lat=' + loc.lat + '&lon=' + loc.lon + '&radius=300&format=json&limit=50')
            .then(e => e.json())
            .then(e => setPoi(e))
    }
    if (!loc) return <p>Loading...</p>
    return (<MapContainer center={[loc.lat, loc.lon]} zoom={23} scrollWheelZoom={false} dragging={false} doubleClickZoom={false} zoomControl={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url=" https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
        <Marker position={[loc.lat, loc.lon]} icon={icon.here} autoPan={false}>
            <Popup autoPan={false}>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        {poi.map(e=><Poi key={e.osm_id} data={e}/>)}
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
interface poiInterface {
    address: {
        city: string
        country: string
        country_code: string
        county: string
        name: string
        postcode: string
        road: string
        state: string
    }
    boundingbox: {
        0: string
        1: string
        2: string
        3: string
    }
    class: string
    display_name: string
    distance: number
    lat: string
    licence: string
    lon: string
    name: string
    osm_id: string
    osm_type: string
    place_id: string
    tag_type: string
    type: string
}