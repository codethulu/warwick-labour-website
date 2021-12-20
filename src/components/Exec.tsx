


import React from 'react'
import './Exec.css'


import {

    Element,

} from "react-scroll";

class Exec extends React.Component {


    render() {
        return (

            <>
                <Element name="exec" className="element"></Element>
                <div className='about'>
                    <h1 className='scaled-title'>MEET THE EXEC!</h1>
                    <p>Warwick Labour is run by its executive committee, elected at the Annual General Meeting at the end of term 2 or beginning of term 3. Feel free to message any of our friendly exec if you have any questions about the soc! If you would like to get more involved with the society and you think you would like to join the exec team, please contact our Secretary (brendan.bell@warwick.ac.uk) for any questions about any of the roles! The current exec as elected in June 2021 is as follows:</p>

                    <section className="main">

                        <ul className="ch-grid">
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front exec-chair"></div>
                                        <div className="ch-info-back">
                                            <h2>Will</h2>
                                            <h3>Chair | He/Him</h3>
                                            <p>Hi, I’m the Chair of the society and a 4th year Mechanical Engineering Student passionate about campaigning for socialism and liberation. </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front exec-deputy-chair"></div>
                                        <div className="ch-info-back">
                                            <h2>Hannah</h2>
                                            <h3>Deputy Chair | She/Her</h3>
                                            <h3>& Talks and Events</h3>
                                            <p>Hi, I’m a third year biology student and I care a lot about the links between feminism, socialism and the environment.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front exec-secretary"></div>
                                        <div className="ch-info-back">
                                            <h2>Brendan</h2>
                                            <h3>Secretary | He/Him</h3>
                                            <p>Hi, I’m a 2nd year computer science student and Secretary for the society. I also designed and coded this website, so let me know if there are any issues with it!</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front exec-treasurer"></div>
                                        <div className="ch-info-back">
                                            <h2>Callum</h2>
                                            <h3>Treasurer | He/Him</h3>
                                            <p>Hi, I’m Callum, a third year PPL student and the treasurer of the society. My role is to set the society’s budget and provide funds for events, speakers, and the annual Red tie dinner. </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front exec-internal"></div>
                                        <div className="ch-info-back">
                                            <h2>John</h2>
                                            <h3>Internal Campaigns | He/Him</h3>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front exec-external"></div>
                                        <div className="ch-info-back">
                                            <h2>Kieron</h2>
                                            <h3>External Campaigns | He/Him</h3>
                                            <p>Hi I’m Kieron, a Politics and International Studies finalist. I’m responsible for organising the society’s campaigning activities within the local area.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front exec-socsec"></div>
                                        <div className="ch-info-back">
                                            <h2>Sebastian</h2>
                                            <h3>Social Secretary | He/Him</h3>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front exec-welfare"></div>
                                        <div className="ch-info-back">
                                            <h2>Grace</h2>
                                            <h3>Welfare Officer | She/They</h3>
                                            <p>I am currently in my first year studying Politics and International Studies. I am responsible for ensuring the wellbeing of our members.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front exec-lo-w"></div>
                                        <div className="ch-info-back">
                                            <h2>Esme</h2>
                                            <h3>Women's Officer | She/Her</h3>
                                            <p>Hello I’m Esme and I’m a 3rd year Art History student and I’m the Women’s officer! I run a weekly caucus for female and non-binary members of the society.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front exec-lo-t"></div>
                                        <div className="ch-info-back">
                                            <h2>Abi</h2>
                                            <h3>Trans Officer | She/Her</h3>
                                            <p></p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front exec-lo-b"></div>
                                        <div className="ch-info-back">
                                            <h2>Maureen</h2>
                                            <h3>BAME Officer | She/Her</h3>
                                            <p>I’m the BAME Officer as well a first year Politics and Sociology student. My role is to create an inclusive space for black and brown voices so please get in touch with any suggestions/concerns.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </section>
                </div>
            </>


        );
    }
}
export default Exec;