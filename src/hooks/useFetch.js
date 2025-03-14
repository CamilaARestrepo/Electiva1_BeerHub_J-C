import { useState } from "react"

export const useFetch=(url="")=>{

    const [state,setState]= useState({
        data:null, //guarda respuesta del api
        isLoading:true, //indica  si esta cargando la peticion
        hasError: null //guarda posibles errores
    });
//hacer peticion a la API
const getFetch = async()=>{
    setState({
        ...state,
    })
}
}