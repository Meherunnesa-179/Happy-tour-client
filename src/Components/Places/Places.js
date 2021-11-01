import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Place from '../Place/Place';

const Places = () => {
    const {places} = useAuth();
    console.log(places);
    return (
        <div>
             <h2 className="text-center  mb-2">Where Do You Want To Go?</h2>
            <p className="text-muted text-center">
              Find Your Place
            </p>
        <div className="row row-cols-1 row-cols-md-3 g-4  m-4">
        {
          places?.map(place => <Place
            key = {place._id}
            place = {place}>
            </Place>
          )};
        </div>
        </div>
    );
};

export default Places;