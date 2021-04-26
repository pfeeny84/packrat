import React from 'react';
import { Card , Segment, Divider } from 'semantic-ui-react'
import PostCard from '../PostCard/PostCard';


export default function PostFeed({posts, numPhotosCol, isProfile, addLike, removeLike, user  }){

    return (
        <>
        <Card.Group itemsPerRow={numPhotosCol} stackable clearing >
           
                {posts.map((post) => {
                return ( 
                    
                        <PostCard 
                            user={user}
                            post={post} 
                            key={post._id} 
                            isProfile={isProfile} 
                            addLike={addLike}  
                            removeLike={removeLike}
                            />
                            
                            
                    )
                })}
        </Card.Group>
                <Divider />
        </>
  
    )
}