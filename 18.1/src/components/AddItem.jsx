import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/Global";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddItem() {
  const { listings, addListing } = useContext(GlobalContext);
  const history = useNavigate();
  const [newListing, setnewListing] = useState({
    date:'',
    rating:'',
    title:'',
  });
  
  function handleChange(e) {
    switch (e.target.name) {
        case 'title':
            setnewListing((prev)=>({...prev,title:e.target.value}));
            break;
        case 'rating':
            setnewListing((prev)=>({...prev,rating:e.target.value}));
            break;
        case 'date':
            setnewListing((prev)=>({...prev,date:e.target.value}));
            break;
        default:
            return newListing
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
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
          <Label>Name</Label>
          <Input
          name="title"
            onChange={(e) => handleChange(e)}
            type="text"
            value={newListing.title}
            placeholder="Add Listing Name"
          ></Input>
          <Label>Date</Label>
          <Input
          name="date"
            onChange={(e) => handleChange(e)}
            type="text"
            value={newListing.date}
            placeholder="Add date"
          ></Input>
          <Label>Rating</Label>
          <Input
          name="rating"
            onChange={(e) => handleChange(e)}
            type="number"
            value={newListing.rating}
            placeholder="Add Rating"
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
