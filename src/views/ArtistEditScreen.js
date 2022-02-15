import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
// import FormContainer from "../components/FormContainer";
import { listArtistDetails, updateArtist } from "../actions/artistActions";
import { ARTIST_UPDATE_RESET } from "../constants/artistConstants";

const ArtistEditScreen = ({ match, history }) => {
  const artistId = match.params.id;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const artistDetails = useSelector((state) => state.artistDetails);
  const { loading, error, artist } = artistDetails;

  const artistUpdate = useSelector((state) => state.artistUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = artistUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: ARTIST_UPDATE_RESET });
      history.push("/");
    } else {
      if (!artist.name || artist._id !== artistId) {
        dispatch(listArtistDetails(artistId));
      } else {
        setName(artist.name);
        setPrice(artist.price);
        setImage(artist.image[0]);
        setCategory(artist.category);
        setCountInStock(artist.countInStock);
        setDescription(artist.description);
      }
    }
  }, [dispatch, history, artistId, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateArtist({
        _id: artistId,
        name,
        price,
        image,
        category,
        description,
        countInStock,
      })
    );
  };

  return (
    <>
      <Link to="/admin/artistlist" className="btn btn-light my-3">
        Go Back
      </Link>
      {/* <FormContainer> */}
      <h1>Edit Product</h1>
      {/* {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>} */}
      {/* {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : ( */}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
          <Form.File
            id="image-file"
            label="Choose File"
            custom
            onChange={uploadFileHandler}
          ></Form.File>
          {/* {uploading && <Loader />} */}
        </Form.Group>

        <Form.Group controlId="countInStock">
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter countInStock"
            value={countInStock}
            onChange={(e) => setCountInStock(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Update
        </Button>
      </Form>
      {/* )} */}
      {/* </FormContainer> */}
    </>
  );
};

export default ArtistEditScreen;
