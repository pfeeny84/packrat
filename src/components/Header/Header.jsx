import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon } from 'semantic-ui-react';
import { FaGuitar } from 'react-icons/fa';


export default function PageHeader({user, handleLogout}){
    return (
        <Segment clearing inverted >
            <Header as='h2' floated='right'>
                <Link to="/"><FaGuitar color='red' /></Link>
                <Link style={{color: 'red'}} to='' onClick={handleLogout} >Logout</Link>
            </Header>
            <Header  as='h2' floated='left'>
                <Link style={{color: 'red'}} to={`/${user.username}`}><Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image>{ user.username.toUpperCase() }</Link>          
            </Header>
            <Header  as='h1' textAlign='center' color='red' dividing>
                <a href='/'><span className='header-text'>PackRat</span></a>
            </Header>
        </Segment>
    )
    
}