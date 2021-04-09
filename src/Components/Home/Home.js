import React, { useEffect, useState } from 'react';
import { Container, Jumbotron, Row } from 'react-bootstrap';
import Team from './Team/Team';



const Home = () => {
    const [team,setTeam]=useState([]);
 
 useEffect(()=>{
     const url=`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
     
      fetch(url)
     .then(res=>res.json())
     .then(data=>setTeam(data.teams))
 },[])
 
    return (
        <>
        <Container>
            <Jumbotron fluid className="jumborton-bg" style={{
                backgroundSize: '100% 300px',
                textAlign: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.9) 100%), url("https://www.the-afc.com/img/image/upload/t_l2/joumf8y3pzk2sx4owem2.jpg")`
            }}>
                <h2 className="text-center text-dark font-weight-bold">Soccer Hero League</h2>
            </Jumbotron>
            <Row className="mx-auto">
                {
                    team.map((tm) => <Team key={tm.idTeam}tm={tm} />)
                }
            </Row>
        </Container>
    </>
        

        
            
    );
};

export default Home;