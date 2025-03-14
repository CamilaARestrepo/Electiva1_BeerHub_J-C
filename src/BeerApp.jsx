import { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import "./index.css";

const CITYES =["san_diego", "new_york", "chicago"];
export const BeerApp= ()=>{
    const [city,setCity]= useState("san_diego");
    const url = `https://api.openbrewerydb.org/v1/breweries?by_city=${city}&per_page=3`;

    const {
        data,
        isLoading,
        hasError
    }=useFetch(url);

    const selectChange=(event)=>{
        setCity(event.target.value);
    };
    
    return(
        <div>
            <h1>BEER FOR CITY</h1>
        </div>
    )

}