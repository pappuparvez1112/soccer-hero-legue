

import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
// import { useHistory } from 'react-router';

import {
    
    
    
    Link
  } from "react-router-dom";




const Team = (props) => {
    const {strTeamLogo,strSport,strTeam,idTeam}=props.tm;
   
    // const teamStyle={
    //     border:"1px solid red"

    
        
    
        
    // }
    // const history=useHistory();
    // const showTeam=id=>{
    //     const url=`team/${idTeam}`;
    //     history.push(url);
    // }
    
    return (
        // <div style={teamStyle} >
            
        //     <img style={{width:"300px"}} src={strTeamLogo} alt=""/>
            

        //     <h1>{strAlternate}</h1>
        //     <h1>{strSport}</h1>
        //     <button>Explore</button>
            
        // </div>
        <Col md={4} className="p-3">
            <Card className="p-5">
                <Card.Img variant="top" src={strTeamLogo} />
                <Card.Body className="text-center">
                    <Card.Title className="font-weight-bold">{strTeam}</Card.Title>
                    <Card.Text>
                        <span>Sports Type:</span>
                        <span className="text-success ml-2">{strSport}</span>
                    </Card.Text>
                    <Button as={Link} to={`team/${idTeam}`}> Explore</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Team;