import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Form,FormGroup,Label,Input,Button } from 'reactstrap';
import { Link, useNavigate,useParams } from 'react-router-dom';
import { GlobalContext } from "../context/Global";
import { useContext, useState, useEffect, } from "react";


function EditItem() {
  const { listings, editListing } = useContext(GlobalContext);

    let navigate = useNavigate()

    const [selectedListing, setselectedListing] = useState({ 
    title:"",
    id: ""});
    const params = useParams()
      
    useEffect(()=>{
      const ListingId = params.id
      const selectedItem = listings.find(item=>item.id===ListingId)
      setselectedListing(selectedItem)
    },[params.id,listings])
  
  function handleChange(e) {
    setselectedListing({...selectedListing, title:e.target.value })
  }

  function handleSubmit(e) {
    editListing(selectedListing)
    navigate("/");
  }

  return (
    <div>
<Form onSubmit={handleSubmit}>
    <FormGroup>
        <Label>Edit</Label>
        <Input type='text' value={selectedListing.title} onChange={handleChange} placeholder='Edit Listing'></Input>
    </FormGroup>
    <Button type='submit'>Submit Edit</Button>
    <Link to='/' className='btn btn-danger'>Cancel</Link>
</Form>

    </div>
  )
}

export default EditItem