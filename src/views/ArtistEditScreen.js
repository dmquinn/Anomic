import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
import { listArtistDetails, updateArtist } from "../actions/artistActions";
import { ARTIST_UPDATE_RESET } from "../constants/artistConstants";
import ReleaseFields from "../components/forms/AddRelease";

const ArtistEditScreen = ({ match, history }) => {
  const artistName = match.params.name;
  const [name, setName] = useState(artistName);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [release, setRelease] = useState({
    description: "",
    artist: artistName,
    image: "",
    name: "",
  });

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
      if (!artist.name || artist.name !== artistName) {
        dispatch(listArtistDetails(artistName));
      } else {
        setName(artist.name);
        setImage(artist.image);
        setDescription(artist.description);
      }
    }
  }, [dispatch, history, artistName, successUpdate, artistDetails]);

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
  const uploadReleaseFileHandler = async (e) => {
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
        name: artistName,
        image,
        description,
        release,
      })
    );
  };

  return (
    <div
      className="container bg-light"
      style={{ position: "relative", zIndex: "400" }}
    >
      <Link to="/admin/artistList" className="btn btn-light my-3">
        Go Back
      </Link>
      <h1>Edit Artist - {artistName}</h1>
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
            disabled
            type="name"
            placeholder={artistName || "Enter name"}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder={artist.image || "Enter image url"}
            value={artist.image}
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

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            placeholder={artist.description || "Enter new description"}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <ReleaseFields
          release={release}
          setRelease={setRelease}
          uploadReleaseFileHandler={uploadReleaseFileHandler}
        />

        <Button type="submit" variant="primary" className="mb-5">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default ArtistEditScreen;
