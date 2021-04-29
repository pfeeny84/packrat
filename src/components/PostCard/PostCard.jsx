import React, { useEffect } from 'react';
import { Card, Icon, Image, Feed, CardDescription } from 'semantic-ui-react';
import { Link } from 'react-router-dom';





function PostCard({post,isProfile, addLike, removeLike, user, setPosts, posts, deletePost }) { 

  // as the logged in the user when I add a like I want the heart to turn red
  // find out if the logged in user has liked the card

  const likedIndexNumber = post.likes.findIndex(like => like.username === user.username);
  // if one of the likes in post.likes is has the same username as are logged in user
  // it will return the index of that particular object in the post.likes array
  // if not it will return -1
  
  const clickHandler = likedIndexNumber > - 1 ? () => removeLike(post.likes[likedIndexNumber]._id) : () => addLike(post._id);
  const likeColor = likedIndexNumber > -1 ? 'red' : 'grey';
  // as the logged in the user when I click on the heart and it is red I want 
  // to remove the like and turn heart grey

  return (
   
    <Card key={post._id} >
     {isProfile ? ''
        :  
          <Card.Content textAlign='left'>
              <Link style={{color: 'red'}} to={`/${post.user.username}`}><Image
                  floated='left'
                  size='huge'
                  avatar
                  src={post.user.photoUrl ? post.user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
              /></Link>
              <Card.Header  floated="right">{post.user.username.toUpperCase()}</Card.Header>
          </Card.Content>
      
      }
      <Image src={`${post.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        Item: {post.item}<br/>
        Brand: {post.brand}<br/>
        Model: {post.model}<br/>
        Year: {post.year}<br/>
      </Card.Content>
      <Card.Content>
      <CardDescription>
        {post.description}
      </CardDescription>
      </Card.Content>
      
      <Card.Content extra textAlign={'right'}>
        <Icon name={'heart'} size='large' onClick={clickHandler} color={likeColor} />
        {post.likes.length} Likes
          
      </Card.Content>
      { post.user === user._id ?
      <Card.Content extra textAlign={'center'} style={{backgroundColor: "black"}}>
        <Icon name={'trash'} size='large' color={"red"} onClick={() => deletePost(post._id)}/>
      </Card.Content>
       : ''
      }
    </Card>
   
  );
}

export default PostCard;