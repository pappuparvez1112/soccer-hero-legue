import React, { useEffect, useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebook,
    faYoutube,

} from '@fortawesome/free-brands-svg-icons'
import {
    faMapMarkerAlt,
    faFlag,
    faFutbol,
    faMars,
} from '@fortawesome/free-solid-svg-icons'


import {
    
    useParams,
} from "react-router-dom";
import Male from '../Home/images/Photo/male.png'
import feMale from '../Home/images/Photo/female.png'



    const TeamDetails = () => {
        const { idTeam} = useParams();
        const [teamDetails, setTeamDetails] = useState({});
        useEffect(() => {
            fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
                .then(res => res.json())
                .then(data => setTeamDetails(data.teams[0]));
        }, [idTeam]);
        const {
            strTeam,
            strTeamBadge,
            strCountry,
            strGender,
            intFormedYear,
            strSport,
            strDescriptionEN,
            strAlternate,
            strStadiumThumb,
            strYoutube,
            strFacebook,
            strTwitter,
            
            
        } = teamDetails;
    
    
    return (
        // <div>
        //     <h1>this is something</h1>
        // </div>
        <Container>
            <Jumbotron fluid className="jumborton-bg" style={{
                backgroundSize: '100% 300px',
                textAlign: 'center',
                backgroundRepeat: 'no-repeat',
                marginBottom: '0px',
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url(${strStadiumThumb})`
            }}>
                <img className="img-fluid" src={strTeamBadge} alt="" />
            </Jumbotron>
            <div>
                <Row className="bg-dark rounded p-2">
                    <Col md={6} className="align-self-center text-white">
                        <h1 className="font-weight-bold py-3">{strTeam}</h1>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </Col>
                    <Col md={6}>
                        {strGender === "Male"
                            ? <img className="img-fluid p-3" src={Male} alt="" />
                            : <img className="img-fluid p-3" src={feMale} alt="" />}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col md={12}>
                        <p>{strDescriptionEN}</p>
                        <p>{strAlternate}</p>
                    </Col>
                    <Col md={12} className="text-center mb-5">
                        <a href={'https://' + strTwitter} target="blank">
                            <span className="p-2 h1"><FontAwesomeIcon icon={faTwitter} /></span>
                        </a>
                        <a href={'https://' + strFacebook} target="blank">
                            <span className="p-2 h1"><FontAwesomeIcon icon={faFacebook} /></span>
                        </a>
                        <a href={'https://' + strYoutube} target="blank">
                            <span className="p-2 h1 text-danger"><FontAwesomeIcon icon={faYoutube} /></span>
                        </a>
                    </Col>
                </Row>
            </div>
        </Container>

    );
};

export default TeamDetails;