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
            <section class="players_section">
                <h3 className="player_title">Our customized players</h3>
                <hr/>
               
                <div className="carouselcards">
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
            <section className="customcard"> 
                <div className="description">
                    <h3 className='titlecustom'>Customized weapons only for you</h3>
                    <p>lorem ipsum</p>
                </div>
                <div className="cards">
                {/* {customized.map(item => <div className="card" key={item.id}> <i class={item.icon}/>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p></div>)} */}
                    <div className="card">
                        <i id="icons"><GiAncientSword/></i>
                        <h3 className="weapon">Sword</h3>
                        <p>lorem</p>
                    </div>
                    <div className="card">
                    <i id="icons"><GiArcher/></i>
                        <h3 className="weapon">Arch</h3>
                        <p>lorem</p>
                    </div>
                    <div className="card">
                    <i id="icons"><GiSharpAxe/></i>
                        <h3 className="weapon">Axe</h3>
                        <p>lorem</p>
                    </div>
                    <div className="card">
                    <i id="icons"><GiFlail/></i>
                        <h3 className="weapon">Flail</h3>
                        <p>lorem</p>
                    </div>

                                
                </div>
                </section>
            <section className="newsletter">
                <div className="info">
                    <h2 className="join">Join us and receive more tips</h2>
                    <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum</p>

                </div>
                <div className="email">
                    <input type='text' placeholder="Enter Email Address" className="emailinput"/>
                    <button className="send">Send</button>
                </div>

            </section>
            
        </article>
    );
}

export default Home;