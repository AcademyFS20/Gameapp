import React from 'react';
// import Carousel from 'react-elastic-carousel';
// import {players} from '../components/dataCarousel';
import Carouselcard from './Carouselcard';
import {customized} from '../utils/custom';
import { icons } from 'react-icons/lib';
import {GiAncientSword} from 'react-icons/gi';
import {GiArcher} from 'react-icons/gi';
import {GiSharpAxe} from 'react-icons/gi';
import {GiFlail} from 'react-icons/gi';

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
                <div>
                {customized.map(item => <div key={item.id}> <i class={item.icon}/>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p></div>)}
                </div>
                </section>
            <section>
                <di>
                    <h2>Join us and receive more tips</h2>
                    <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum</p>

                </di>
                <div>
                    <input type='text' placeholder="Enter Email Address"/>
                    <button>Send</button>
                </div>

            </section>
            
        </article>
    );
}

export default Home;