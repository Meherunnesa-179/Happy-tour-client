import React, { useEffect, useState } from 'react';

const useContent = () => {
    const [places , setPlaces] = useState([]);
    useEffect( () =>{
        fetch("https://desolate-dusk-69405.herokuapp.com/places")
        .then((res) => res.json())
        .then((data) => {
          setPlaces(data);
        // console.log(data);
        });
    } , [])
    return{places , setPlaces}
};

export default useContent;