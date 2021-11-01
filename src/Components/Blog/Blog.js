import React from 'react';
import { Container } from 'react-bootstrap';
import blog from '../../Assets/blog1.jpg'

const Blog = () => {
    return (
        <div style={{"backgroundColor": 'skyblue'}}>
            <Container>
                <div>
                    <h1>Latests Post</h1>
                    <img src={blog} alt="" />
                </div>
                <div>
                    <h2>Hot Air Balloon: Floating Over the Pink City, Jaipur</h2>
                    <p className="p-5 ">
                    Somewhat incorrectly known as the Pink City, Jaipur is one of those places which offer a unique experience for all kinds of travellers.  Founded way back in 1727, the city, over the last few decades, has become a major tourist destination hosting visitors from all the different corners of the world. Although a major chunk of travellers visit the city to explore the centuries-old monuments and the state-of-the-art museums, there is a plethora of other experiences that one might indulge in. The state capital of Rajasthan is known as much as for its glorious architecture and historic structures as it is for its decades-old handloom markets and richly diverse food. Apart from its historic relevance, the city has also gained immense popularity as a global
                    </p>
                    <button>Read More ..</button>
                </div>
                <div>
                    <h2>Best Himalayan Treks in October</h2>
                    <p className="p-5 text-primary">
                    Soothing and lush greenery of the mountains paired with the fragrance of damp earth marks as an end of the Monsoon and a beginning of the Autumn. Thanks to the showers of the last season. October turns out as a perfect month to surrender yourself in the landscapes of the Himalayas. Witness autumn’s spectacular colors by zipping through the verdant deciduous forests, water bodies, and lush green mountains complimenting the blue skies. There cannot be a better time for trekking the Himalayas than in the month of October. The beautiful shades of sky at dusk and dawn will be an icing on the cake of your trip. Exciting Treks in October – Click Here to Explore! To escape the monotony of everyday life, October hosts certain remarkable treks that
                    </p>
                    <button className="p-1">Read More ..</button>
                </div>
            </Container>
        </div>
    );
};

export default Blog;