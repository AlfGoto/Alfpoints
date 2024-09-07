'use client'

import { Marker, Popup } from 'react-leaflet'
import * as icon from './icons'


export default function POI(props: propsInterface) {
    const poi: poiInterface = props.data

    let icone = icon.housing

    if (poi.class === "shop") icone = icon.supermarket
    if (poi.type === "restaurant") icone = icon.resto
    if (poi.type === "cafe") icone = icon.coffee
    if (poi.type === 'sports_centre') icone = icon.haltere
    if (poi.type === 'school') icone = icon.school
    if (poi.type === 'bank') icone = icon.bank
    if (poi.type === 'fast_food') icone = icon.fastfood
    if (poi.type === 'post_box') icone = icon.post
    if (poi.type === 'post_office') icone = icon.post

    return (<Marker position={[Number(poi.lat), Number(poi.lon)]} icon={icone} autoPan={false}>
        <Popup autoPan={false}>
            <p>{poi.name}</p>
            <p>Type: {poi.type}</p>
            <p>Class: {poi.class}</p>
        </Popup>
    </Marker>)
}

interface propsInterface {
    data: poiInterface
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