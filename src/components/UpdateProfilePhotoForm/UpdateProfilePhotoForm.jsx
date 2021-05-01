import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react'



export default function UpdateProfilePhotoForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    photo: ''
  })
console.log(props)
  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log('is handlesUbmit being called?')
    // creating FormData for Put request
    const formData = new FormData()
    formData.append('photo', selectedFile)
    // submit function
    props.handleUpdateProfilePhoto(formData);
  }
  return (
    <Grid textAlign='left' verticalAlign='middle'>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 275 }}>
        <Segment clearing style={{backgroundColor: "black"}}>
            <Form  autoComplete="off" onSubmit={handleSubmit}>
              <Form.Input
                  type='file'
                  name='photo'
                  placeholder='Upload Photo'
                  onChange={handleFileInput}
              /> 
              <Button
                color="red"
                inverted
                type="submit"
                className="btn"
                >
                Update Profile Photo
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid.Row>
    </Grid>
  ); 
}