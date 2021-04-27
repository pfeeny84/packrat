import React, { useState, useEffect } from 'react';
import {  Grid } from 'semantic-ui-react'
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import ProfilePostDisplay from '../../components/ProfilePostDisplay/ProfilePostDisplay';
import PageHeader from '../../components/Header/Header';



export default function ProfilePage({ user, handleLogout }){
    

    return (
        <>
        <Grid>
        <Grid.Row>
            <Grid.Column>
                <PageHeader user={user} handleLogout={handleLogout}/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <ProfileBio />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
            <Grid.Column style={{ maxWidth: 750 }}>
                <ProfilePostDisplay />
            </Grid.Column>
            </Grid.Row>
        </Grid>
          
             <h1>This is the Profile Page</h1>
    
      </>
      );
}