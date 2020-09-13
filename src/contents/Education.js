import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {

    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>

                <Widecard title="B.Eng Software Engineering (Co-op)" where="Carleton University" from="September 2015" to="December 2020"/>
                <Widecard title="OSSD" where="Ecole Secondaire Jeunes Sans Frontieres" from="2011" to="2015"/>
            </div>
        )
    }
}
export default Education