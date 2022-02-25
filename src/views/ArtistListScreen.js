import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import Message from "../components/Message";
// import Loader from "../components/Loader";
import {
  listArtists,
  deleteArtist,
  createArtist,
} from "../actions/artistActions";
import { ARTIST_CREATE_RESET } from "../constants/artistConstants";
import { Link } from "react-router-dom";

const ArtistListScreen = ({ history, match }) => {
  const [artistName, setArtistName] = useState("");
  const dispatch = useDispatch();

  const artistList = useSelector((state) => state.artistList);
  const { loading, error, artists, page, pages } = artistList;

  const artistDelete = useSelector((state) => state.artistDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = artistDelete;

  const artistCreate = useSelector((state) => state.artistCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    artist: createdArtist,
  } = artistCreate;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: ARTIST_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/artists/${createdArtist.name}/edit`);
    } else {
      dispatch(listArtists());
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdArtist,
  ]);

  const deleteHandler = (name) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteArtist(name));
    }
  };

  const createArtistHandler = () => {
    dispatch(createArtist(artistName));
  };

  return (
    <div className="container bg-black">
      <Row className="text-end mt-10">
        <Col>
          <span className="text-white px-3">Create New Artist</span>
          <input
            placeholder="Insert Artist Name"
            onChange={(e) => setArtistName(e.target.value)}
          />
          <Button className="my-3 mx-5" onClick={createArtistHandler}>
            <i className="fas fa-plus text-white"></i>
          </Button>
        </Col>
      </Row>
      <Table
        striped
        // bordered
        hover
        responsive
        style={{ position: "relative", zIndex: "400", marginTop: "50px" }}
      >
        <thead style={{ position: "relative", zIndex: "400" }}>
          <tr>
            <th>NAME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {!!artists &&
            artists.map((artist) => (
              <tr key={artist._id}>
                <td>{artist.name}</td>
                <td>
                  <Link to={`/admin/artists/${artist.name}/edit`}>
                    <button variant="light" className="btn-sm">
                      <i className="fas fa-edit" />
                    </button>
                  </Link>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(artist._id)}
                  >
                    <i className="fas fa-trash" />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ArtistListScreen;
