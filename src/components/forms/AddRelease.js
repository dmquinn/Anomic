import React from "react";
import { Form } from "react-bootstrap";

const ReleaseFields = ({ setRelease, release, uploadReleaseFileHandler }) => {
  return (
    <div>
      <h1 className="pt-5">Add new Release</h1>
      <Form.Group controlId="releaseName">
        <Form.Label>Release Name</Form.Label>
        <Form.Control
          type="releaseName"
          placeholder={"Enter name"}
          onChange={(e) => setRelease({ ...release, name: e.target.value })}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="releaseDescription">
        <Form.Label>Release Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={7}
          placeholder={"Enter description"}
          onChange={(e) =>
            setRelease({ ...release, description: e.target.value })
          }
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="releaseImage">
        <Form.Label>Release Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image url"
          onChange={(e) => setRelease({ ...release, image: e.target.value })}
        ></Form.Control>
        <Form.File
          id="release-image-file"
          label="Choose File"
          custom
          onChange={uploadReleaseFileHandler}
        ></Form.File>
        {/* {uploading && <Loader />} */}
      </Form.Group>
    </div>
  );
};

export default ReleaseFields;
