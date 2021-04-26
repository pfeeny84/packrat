import React, { useState } from 'react';
import './AddPostForm.css'

import { Button, Form, Grid, Header, Image, Divider,  Segment } from 'semantic-ui-react'

export default function AddPostForm(props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    description: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log('is handlesUbmit being called?')

    // Why do we need to create FormData
    // what type of request are we making?
    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('description', state.description)
    formData.append('brand', state.brand)
    formData.append('model', state.model)
    formData.append('year', state.year)
    
    // Have to submit the form now! We need a function!
    props.handleAddPost(formData)
  }


  return (
    
    <Grid textAlign='center'  verticalAlign='middle' >
      <Grid.Column style={{ maxWidth: 450 }} >
        <Segment className='addForm' clearing inverted >
        
            <Form  autoComplete="off" onSubmit={handleSubmit} >
            
              <Form.Input
                  className="form-control"
                  name="brand"
                  value={state.brand}
                  placeholder="Brand"
                  onChange={handleChange}
                  required
              />  
              <Form.Input
                  className="form-control"
                  name="model"
                  value={state.model}
                  placeholder="Model"
                  onChange={handleChange}
                  required
              />  
              <Form.Input
                  className="form-control"
                  name="year"
                  value={state.year}
                  placeholder="Year"
                  onChange={handleChange}
                  required
              />        
              <Form.Input
                  className="form-control"
                  name="description"
                  value={state.description}
                  placeholder="Description"
                  onChange={handleChange}
                  required
              />
              <label>Item Image</label>
              <Form.Input
                
                className="form-control"
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />   
              <Button
                inverted
                color='red'
                type="submit"
                className="btn"
              >
                Add to My Collection
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
   
  ); 
}