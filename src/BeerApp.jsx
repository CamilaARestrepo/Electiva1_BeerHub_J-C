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
    console.log(CITYES)

    return(
        <>
       
        <div className="container">
        
            <h1 className="title">BEER FOR CITY</h1>
            <select className="select" onChange={selectChange} value={city}>
                {
                    CITYES.map((item)=>(
                        <option  key={item} value={item}>
                            {item.replace("_", " ")}
                        </option>
                    ))
                }
            </select>
            {
                isLoading?(
                    <p className="loading">Procesando...</p>
                ): hasError ? (
                    <p className="error">Error: {hasError}</p>
                ): (
                    <ul>
                        {data.map((brewery)=>(
                            <li  key={brewery.id} className="card">
                               <h4>BEER: {brewery.name}</h4>
                               <p> STATE: {brewery.city}-{brewery.state_province}</p>
                               <p> LOCATION: {brewery.address_1}</p>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
        </>
    )

}