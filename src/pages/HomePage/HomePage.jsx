import React, { useState, useEffect } from 'react';
import {  Grid } from 'semantic-ui-react';
import PageHeader from '../../components/Header/Header';




export default function Home({user, handleLogout}){
    

    return (
        <Grid centered >
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout}/>
          </Grid.Column>
        </Grid.Row>
        <h1>Home Page</h1>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 450 }}>
            {/* <AddPostForm handleAddPost={handleAddPost}/> */}
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{maxWidth: 450}}>
            {/* <PostFeed 
              user={user}
              posts={posts}  
              numPhotosCol={1} 
              isProfile={false} 
              addLike={addLike} 
              removeLike={removeLike}
              /> */}
          </Grid.Column>
        </Grid.Row>
    </Grid>
          
             
    
      
      )
}