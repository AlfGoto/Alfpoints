'use client'

import { Marker, Popup } from 'react-leaflet'
import * as icon from './icons'
import { createClient } from "../utils/supabase/client"
import { useEffect, useState } from 'react'
const supabase = createClient()


export default function POI(props: propsInterface) {
    // const [data, setData] = useState<dataInterface>({ seen: false, lastseen: false })
    const poi: poiInterface = props.data

    useEffect(() => { dbInit() })
    async function dbInit() {
        const PoiPassed: string | null = localStorage.getItem('PoiPassed')
        if (!PoiPassed) return
        const PoiPassedArr = JSON.parse(PoiPassed)
        if (PoiPassedArr.includes(poi.osm_id)) return
        localStorage.setItem('PoiPassed', JSON.stringify([...PoiPassedArr, poi.osm_id]))

        const { data: Poi, error } = await supabase.from('Poi').select("*").eq('id', poi.osm_id)
        if (error || !Poi) return
        if (Poi.length === 0) {
            await supabase
                .from('Poi')
                .insert([{ id: poi.osm_id },])
                .select()
        }
    }

    let icone = icon.housing
    if (poi.class === "shop") icone = icon.supermarket
    if (poi.type === "restaurant") icone = icon.resto
    if (poi.type === "cafe") icone = icon.coffee
    if (poi.type === 'sports_centre') icone = icon.haltere
    if (poi.type === 'school') icone = icon.school
    if (poi.type === 'college') icone = icon.school
    if (poi.type === 'bank') icone = icon.bank
    if (poi.type === 'fast_food') icone = icon.fastfood
    if (poi.type === 'post_box') icone = icon.post
    if (poi.type === 'post_office') icone = icon.post
    if (poi.type === 'parking') icone = icon.parking
    if (poi.type === 'traffic_park') icone = icon.parking
    if (poi.type === 'bicycle_parking') icone = icon.parking
    if (poi.type === 'place_of_worship') icone = icon.church

    return (<Marker position={[Number(poi.lat), Number(poi.lon)]} icon={icone} autoPan={false}>
        <Popup autoPan={false}>
            <p>{poi.name}</p>
            <p>Type: {poi.type}</p>
            <p>Class: {poi.class}</p>
        </Popup>
    </Marker>)
}

interface dataInterface {
    seen: boolean,
    lastseen: boolean
}
interface propsInterface {
    data: poiInterface,
    user_id: string
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