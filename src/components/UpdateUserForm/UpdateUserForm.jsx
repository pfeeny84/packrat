// import React, { useState, useEffect } from 'react';
// import { Grid, Segment, Dimmer, Loader, Button, Transition, Form } from 'semantic-ui-react'
// import userService from '../../utils/userService';




// import * as postApi from '../../utils/post-api';
// import { useLocation } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// export default function UpdateUserForm({ user, handleLogout, update, handleSubmit, isProfile, ErrorMessage, handleChange, handleSignUpOrLogin, handleUpdateProfilePhoto }) {
//     const [visible, setVisible] = useState(false)
//     const [posts, setPosts] = useState([])
//     const [profileUser, setProfileUser] = useState({})
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState('')
    
//     const [state, setState] = useState({
//         username: user.username,
//         bio: user.bio
//         // photoUrl: user.photoUrl
//     });
//     function handleChange(e) {
//         setState({
//             ...state,
//             [e.target.name]: e.target.value
//         })
//     }
//     const history = useHistory()
//     const location = useLocation()
//     // const i
//     console.log(location)
   
//     async function getProfile() {
//         try {
//             const username = location.pathname.substring(1)
//             // location.pathname returns /jimbo so we need to cut off the / using the js method substring
//             // This gets the username from the url! 
//             console.log(username)
//             const data = await userService.getProfile(username);
//             console.log(data)
//             setLoading(() => false)
//             setPosts(() => [...data.posts])
//             setProfileUser(() => data.user)
//         } catch (err) {
//             console.log(err)
//             setError(err)
//         }
//     }
//     function handleEditClick() {
//         setVisible(true)
//     }
//     // function handleFileInput(e) {
//     //     setSelectedFile(e.target.files[0])
//     // }
//     async function deletePost(postID) {
//         try {
//             await postApi.deletePost(postID)
//             const newPosts = posts.filter(post => post._id !== postID)
//             setPosts(newPosts)
//         } catch (err) {
//             console.log(err)
//         }
//     }
//     async function handleSubmit(e) {
//         e.preventDefault();
//         try {
//             await userService.update(state);
//             handleSignUpOrLogin()
//             setVisible(false)
//             // history.push('/')
//         } catch (err) {
//             console.log(err.message)
//             setError(err.message)
//         }
//     }
//     useEffect(() => {
//         getProfile()
//     }, [location.pathname.substring(1), user])

    
//     return(
// <Transition visible={visible} animation='fly up' duration={500}>
//                             <Segment>
//                                 <Form autoComplete="off" onSubmit={handleSubmit}>
//                                     <Segment className="profile-edit" stacked>
//                                         <Form.Input
//                                             name="username"
//                                             placeholder="username"
//                                             value={user.username}
//                                             onChange={handleChange}
//                                             required
//                                         />
                                        
//                                         <Form.TextArea label='bio' placeholder='Tell us about your collection' name="bio" onChange={handleChange} />
                                        
//                                         <Button
//                                             type="submit"
//                                             className="btn"
//                                         >
//                                             Update Profile
//                                 </Button>
//                                     </Segment>
//                                     {error ? <ErrorMessage error={error} /> : null}
//                                 </Form>
//                             </Segment>
//                         </Transition>

// );
// }