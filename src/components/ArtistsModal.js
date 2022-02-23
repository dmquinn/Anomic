import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listArtists } from "../actions/artistActions";

const ArtistsModal = ({ modal, setModal }) => {
  const dispatch = useDispatch();
  const artistList = useSelector((state) => state.artistList);
  const { artists } = artistList;

  useEffect(() => {
    dispatch(listArtists());
  }, [dispatch]);
  const handleClose = () => setModal(false);
  return (
    <>
      {" "}
      <Modal show={modal} onHide={handleClose}>
        <button
          className="w-5 h-4 mt--2 ml--2 text-white bg-transparent close border text-center"
          onClick={() => setModal(false)}
        >
          <h1> x</h1>
        </button>

        <div className="row">
          {artists.map((artist) => {
            return (
              <div
                className="col-sm-6 col-md-6 col-lg-3 p-0 h-20"
                style={{ overflow: "hidden" }}
              >
                {" "}
                <Link
                  to={`/artists/${artist.name}`}
                  onClick={() => setModal(false)}
                >
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="fill thumb"
                  />
                  <h6 className="z-40 mt--2 title px-2 text-white text-20">
                    {artist.name}
                  </h6>{" "}
                </Link>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};

export default ArtistsModal;
