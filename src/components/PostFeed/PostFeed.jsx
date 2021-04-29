import React from 'react';
import { Card , Segment, Divider } from 'semantic-ui-react'
import PostCard from '../PostCard/PostCard';


export default function PostFeed({posts, numPhotosCol, isProfile, addLike, removeLike, user, setPosts  }){

    return (
        <>
        <Card.Group itemsPerRow={numPhotosCol} stackable clearing >
           
                {posts.reverse().map((post) => {
                return ( 
                    
                        <PostCard 
                            user={user}
                            post={post} 
                            posts={posts}
                            key={post._id} 
                            isProfile={isProfile} 
                            addLike={addLike}  
                            removeLike={removeLike}
                            setPosts={setPosts}
                            />
                            
                            
                    )
                })}
        </Card.Group>
                <Divider />
        </>
  
    )
}