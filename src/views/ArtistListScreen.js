import React, { useEffect } from "react";
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

const ArtistListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

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
      history.push(`/admin/artists/${createdArtist._id}/edit`);
    } else {
      dispatch(listArtists("", pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
    successDelete,
    successCreate,
    createdArtist,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteArtist(id));
    }
  };

  const createArtistHandler = () => {
    dispatch(createArtist());
  };

  return (
    <>
      <Row className="align-items-center">
        <Col className="text-right">
          <Button className="my-3" onClick={createArtistHandler}>
            <i className="fas fa-plus"></i> Create Artist
          </Button>
        </Col>
      </Row>
      <>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {!!artists &&
              artists.map((artist) => (
                <tr key={artist._id}>
                  <td>{artist._id}</td>
                  <td>{artist.name}</td>
                  <td>
                    <LinkContainer to={`/admin/artist/${artist._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(artist._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
      </>
      )
    </>
  );
};

export default ArtistListScreen;
