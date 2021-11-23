import React from 'react';
// import Carousel from 'react-elastic-carousel';
// import {players} from '../components/dataCarousel';
import Carouselcard from './Carouselcard';

function Home() {
    return (
        <article className="home">
            <section>
                <h3>Our custom players</h3>
               
                <div className="cards">
                    <Carouselcard/>
                    {/* {players.map((item, index)=>{
                        return(
                            <Carousel>
                            <div key={index.id}>
                                <img src={item.img}/>
                                <h3>{item.title}</h3>
                                <p>{item.subTitle}</p>
                            </div>
                            </Carousel>
                        )
                    })} */}
                
                </div>
            </section>
            <section> 
                <div>
                    <h3>Custom art only for you</h3>
                    <p>lorem ipsum</p>
                </div>
                
                </section>
            <section></section>
            
        </article>
    );
}

export default Home;