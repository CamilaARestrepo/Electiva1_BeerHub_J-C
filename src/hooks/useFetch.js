import { useEffect, useState } from "react"

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
        isLoading: true,
        hasError:null
    })

    try {
        const response = await fetch(url);
        const data = await response.json();

        setState({
            ...SVGMetadataElement,
            data,
            isLoading:false,
            hasError:null
        })
    } catch (error) {
        setState({
            ...state,
            data:null,
            isLoading:false,
            hasError:error.message
        });
    }
};

    useEffect(()=>{
        getFetch();
    },[url]);
    
    return{
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}