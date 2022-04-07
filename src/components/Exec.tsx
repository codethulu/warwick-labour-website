


import React from 'react'
import './Exec.css'
import ExecList from '../data/ExecList';
import ExecCard from './ExecCard';

import {

    Element,

} from "react-scroll";

class Exec extends React.Component {


    render() {
        return (

            <>
                <Element name="exec" className="element"></Element>
                <div className='container'>
                    <h1>MEET THE EXEC!</h1>
                    <p>Warwick Labour is run by its executive committee, elected at the Annual General Meeting at the end of term 2 or beginning of term 3. Feel free to message any of our friendly exec if you have any questions about the soc! If you would like to get more involved with the society and you think you would like to join the exec team, please contact our Secretary for any questions about any of the roles! The current exec as elected in March 2022 is as follows:</p>

                    <section className="main">

                        <ul className="ch-grid">
                            {ExecList.map((e) => {
                                return (
                                    <ExecCard position={e.position} name={e.name} pronouns={e.pronouns} description={e.description} />
                                );
                            })}
                        </ul>

                    </section>
                </div>
            </>


        );
    }
}
export default Exec;