import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/Global";
import { useContext, useState } from "react";

function AddItem() {
  const { addListing } = useContext(GlobalContext);
  const history = useNavigate();
  const [newListing, setnewListing] = useState({
    price:'',
    isAvaliable:'',
    model:'',
    series:'',
    image:'',
    size:'',
    color:'',
    des:'',
  });

  // model,id,price,des,size,isAvaliable,color,series,image
  
  function handleChange(e) {
    switch (e.target.name) {
        case 'price':
            setnewListing((prev)=>({...prev,price:e.target.value}));
            break;
        case 'model':
            setnewListing((prev)=>({...prev,model:e.target.value}));
            break;
        case 'series':
            setnewListing((prev)=>({...prev,series:e.target.value}));
            break;
        case 'image':
            setnewListing((prev)=>({...prev,image:e.target.value}));
            break;
        case 'size':
            setnewListing((prev)=>({...prev,size:e.target.value}));
            break;
        case 'isAvaliable':
            setnewListing((prev)=>({...prev,isAvaliable:e.target.value}));
            break;
        case 'color':
            setnewListing((prev)=>({...prev,color:e.target.value}));
            break;
        case 'des':
            setnewListing((prev)=>({...prev,des:e.target.value}));
            break;
        default:
            return newListing
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(newListing);
    // const listingObj = {
    //   date: "2023-01-22T09:27:39.360Z",
    //   rating: 12,
    //   title: newListing,
    //   id: uuidv4(),
    // };
    addListing(newListing);
    history("/products");
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
            value={newListing.price}
            placeholder="Add Listing price"
          ></Input>
          <Label>Model</Label>
          <Input
          name="model"
            onChange={(e) => handleChange(e)}
            type="text"
            value={newListing.model}
            placeholder="Add Listing Model"
          ></Input>
          <Label>Series</Label>
          <Input
          name="series"
            onChange={(e) => handleChange(e)}
            type="text"
            value={newListing.series}
            placeholder="Add Listing Series"
          ></Input>
          <Label>Size</Label>
          <Input
          name="size"
            onChange={(e) => handleChange(e)}
            type="text"
            value={newListing.size}
            placeholder="Add Listing Size"
          ></Input>
          <Label>Color</Label>
          <Input
          name="color"
            onChange={(e) => handleChange(e)}
            type="text"
            value={newListing.color}
            placeholder="Add Listing Color"
          ></Input>
          <Label>Image</Label>
          <Input
          name="image"
            onChange={(e) => handleChange(e)}
            type="text"
            value={newListing.image}
            placeholder="Add Image"
          ></Input>
          <Label>Stock</Label>
          <Input
          name="isAvaliable"
            onChange={(e) => handleChange(e)}
            type="number"
            value={newListing.isAvaliable}
            placeholder="Add Stock Condition"
          ></Input>
          <Label>Description</Label>
          <Input
          name="des"
            onChange={(e) => handleChange(e)}
            type="text"
            value={newListing.des}
            placeholder="Add Product Description"
          ></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/products" className="btn btn-danger">
          Cancel
        </Link>
      </Form>
    </div>
  );
}

export default AddItem;
