import axios from "axios";
import {
  ARTIST_LIST_REQUEST,
  ARTIST_LIST_SUCCESS,
  ARTIST_LIST_FAIL,
  ARTIST_DETAILS_REQUEST,
  ARTIST_DETAILS_SUCCESS,
  ARTIST_DETAILS_FAIL,
  ARTIST_DELETE_REQUEST,
  ARTIST_DELETE_SUCCESS,
  ARTIST_DELETE_FAIL,
  ARTIST_CREATE_REQUEST,
  ARTIST_CREATE_SUCCESS,
  ARTIST_CREATE_FAIL,
  ARTIST_UPDATE_REQUEST,
  ARTIST_UPDATE_SUCCESS,
  ARTIST_UPDATE_FAIL,
} from "../constants/artistConstants";
import { logout } from "./userActions";

export const listArtists = () => async (dispatch) => {
  try {
    dispatch({ type: ARTIST_LIST_REQUEST });
    const response = await fetch(`/api/artists`);
    const data = await response.json();
    dispatch({
      type: ARTIST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTIST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listArtistDetails = (name) => async (dispatch) => {
  try {
    dispatch({ type: ARTIST_DETAILS_REQUEST });
    const res = await fetch(`/api/artists/${name}`);
    const data = await res.json();
    dispatch({
      type: ARTIST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTIST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteArtist = (name) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ARTIST_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/artists/${name}`, config);

    dispatch({
      type: ARTIST_DELETE_SUCCESS,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: ARTIST_DELETE_FAIL,
      payload: message,
    });
  }
};
export const createArtist = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ARTIST_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/artists/`, {}, config);

    dispatch({
      type: ARTIST_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ARTIST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateArtist = (artist) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ARTIST_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/artists/${artist.name}`,
      artist,
      config
    );

    dispatch({
      type: ARTIST_UPDATE_SUCCESS,
      payload: data,
    });
    dispatch({ type: ARTIST_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: ARTIST_UPDATE_FAIL,
      payload: message,
    });
  }
};
