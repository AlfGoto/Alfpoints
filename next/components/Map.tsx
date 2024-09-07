import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as icon from './icons'
import 'leaflet/dist/leaflet.css';

export default function Map() {



    return (<MapContainer center={[51.505, -0.09]} zoom={23} scrollWheelZoom={false} dragging={false} doubleClickZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url=" https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
        <Marker position={[51.505, -0.09]} icon={icon.housingIcon}>
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