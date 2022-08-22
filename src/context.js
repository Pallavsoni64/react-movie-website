import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const API_URL ='http://www.omdbapi.com/?apikey=6f9713e0'

const AppProvider = ({children })=>{
    const[isloading, setIsLoading]= useState(true);
    const[movie,setMovie]= useState([]);
    const[Iserror,setIsError]= useState({show:false,
    msg:""})
    const [query, setQuery] = useState('Titanic')
    const getMovies =async(url)=>{
        setIsLoading(true);
try{
const response = await fetch(url);
const data = await response.json();
console.log(data);
if(data.Response === "True"){
    setMovie(data.Search);
    setIsLoading(false);
    setIsError({
        show:false,
        msg:''
    })
}
else{
setIsError({show:true,msg:data.Error})
}
}catch(error){
    console.log(error);
}
    }

    useEffect(()=>{
     let timerOut =  setTimeout (()=>{
            getMovies(`${API_URL}&s=${query}`);
        },500);

      return () =>clearTimeout(timerOut);
    },[query]);

return( <AppContext.Provider value={{movie,isloading,Iserror,query,setQuery}}>{children}</AppContext.Provider>)
};

const  useGlobalContaxt =()=>{
    return useContext(AppContext)
}

export{AppContext,AppProvider,useGlobalContaxt};