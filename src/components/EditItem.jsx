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
    id: ""});
    const params = useParams()
      
    useEffect(()=>{
      const ListingId = params.id
      const selectedItem = listings.find(item=>item.id===ListingId)
      setselectedListing(selectedItem)
    },[params.id,listings])
  
    function handleChange(e) {
      switch (e.target.name) {
          case 'price':
              setselectedListing((prev)=>({...prev,price:e.target.value}));
              break;
          case 'model':
              setselectedListing((prev)=>({...prev,model:e.target.value}));
              break;
          case 'series':
              setselectedListing((prev)=>({...prev,series:e.target.value}));
              break;
          case 'image':
              setselectedListing((prev)=>({...prev,image:e.target.value}));
              break;
          case 'size':
              setselectedListing((prev)=>({...prev,size:e.target.value}));
              break;
          case 'isAvaliable':
              setselectedListing((prev)=>({...prev,isAvaliable:e.target.value}));
              break;
          case 'color':
              setselectedListing((prev)=>({...prev,color:e.target.value}));
              break;
          case 'des':
              setselectedListing((prev)=>({...prev,des:e.target.value}));
              break;
          default:
              return selectedListing
      }
    }

  function handleSubmit(e) {
    editListing(selectedListing)
    navigate("/products");
  }

  return (
    <div>
<Form onSubmit={(e)=>handleSubmit(e)}>
        <FormGroup>
          <Label>Price</Label>
          <Input
          name="price"
            onChange={(e) => handleChange(e)}
            type="text"
            value={selectedListing.price}
            placeholder="Edit Listing price"
          ></Input>
          <Label>Model</Label>
          <Input
          name="model"
            onChange={(e) => handleChange(e)}
            type="text"
            value={selectedListing.model}
            placeholder="Edit Listing Model"
          ></Input>
          <Label>Series</Label>
          <Input
          name="series"
            onChange={(e) => handleChange(e)}
            type="text"
            value={selectedListing.series}
            placeholder="Edit Listing Series"
          ></Input>
          <Label>Size</Label>
          <Input
          name="size"
            onChange={(e) => handleChange(e)}
            type="text"
            value={selectedListing.size}
            placeholder="Edit Listing Size"
          ></Input>
          <Label>Color</Label>
          <Input
          name="color"
            onChange={(e) => handleChange(e)}
            type="text"
            value={selectedListing.color}
            placeholder="Edit Listing Color"
          ></Input>
          <Label>Image</Label>
          <Input
          name="image"
            onChange={(e) => handleChange(e)}
            type="text"
            value={selectedListing.image}
            placeholder="Edit Image"
          ></Input>
          <Label>Stock</Label>
          <Input
          name="isAvaliable"
            onChange={(e) => handleChange(e)}
            type="number"
            value={selectedListing.isAvaliable}
            placeholder="Edit Stock Condition"
          ></Input>
          <Label>Description</Label>
          <Input
          name="des"
            onChange={(e) => handleChange(e)}
            type="text"
            value={selectedListing.des}
            placeholder="Edit Product Description"
          ></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/products" className="btn btn-danger">
          Cancel
        </Link>
      </Form>


    </div>
  )
}

export default EditItem