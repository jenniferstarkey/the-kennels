import React, {useContext, useEffect} from "react"
import { LocationCard } from "./Location"
import { LocationContext } from "./LocationProvider"
import "./Location.css"



export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="locations">
            {
            locations.map(location => {
                return <LocationCard key={location.id} name={location.name} address={location.address}/>
            })
        }
        </div>
    )
}