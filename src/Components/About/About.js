import React from 'react';
import { Container } from 'react-bootstrap';
import Rotate from 'react-reveal/Rotate';
import img from '../../Assets/about.jfif'

const About = () => {
    return (
        <div>
           <Container>
            <Rotate>
            <div>
               <div className="text-start">
                   <h2>Welcome To Happy Tour Agency</h2>
                   <p>
                   We provide international travel products & services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services. We cater to a wide range of needs including Leisure & Business travel. Having a wide network around the world we provide holiday packages to 100+ destinations. From budget travelers to ultra luxury 7 star tourists we cater to every need. Delivering value for your money is our prime goal. With a team of experienced travel professionals we deliver exactly what we promise. We do what we say & say what we do.
                   </p>
               </div>
               <div>
                   <img src={img} alt="" />
               </div>
               <div className="text-sm-end">
                   <h3>“You haven’t lived if you haven’t travelled”</h3>
                   <p>
                   It is only when you travel 1000s of miles away from your home country & visit a foreign land you realise how beautiful the world is. How different or similar are its people from you & how they are living their lives. Share your stories & be a part of theirs. Widen your horizon, broaden your mind & become a global citizen. I must admit the travel industry in Bangladesh does not have a good customer service reputation. That is why we strive to deliver our best effort for each & every individual who comes to us for any sort of travel services. We not only provide travel services but also promote responsible tourism & practice ethical service standards which is rare in our industry.
                   </p>
               </div>
               </div>
            </Rotate>
           </Container>
        </div>
    );
};

export default About;