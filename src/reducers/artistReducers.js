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
  ARTIST_CREATE_RESET,
  ARTIST_UPDATE_REQUEST,
  ARTIST_UPDATE_SUCCESS,
  ARTIST_UPDATE_FAIL,
  ARTIST_UPDATE_RESET,
} from "../constants/artistConstants";

export const artistListReducer = (state = { artists: [] }, action) => {
  switch (action.type) {
    case ARTIST_LIST_REQUEST:
      return { loading: true, artists: [] };
    case ARTIST_LIST_SUCCESS:
      return {
        loading: false,
        artists: action.payload.artists,
      };
    case ARTIST_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const artistDetailsReducer = (state = { artist: {} }, action) => {
  switch (action.type) {
    case ARTIST_DETAILS_REQUEST:
      return { loading: true, ...state };
    case ARTIST_DETAILS_SUCCESS:
      return { loading: false, artist: action.payload };
    case ARTIST_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const artistDeleteReducer = (
  state = { artist: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ARTIST_DELETE_REQUEST:
      return { loading: true };
    case ARTIST_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ARTIST_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const artistCreateReducer = (
  state = { artist: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ARTIST_CREATE_REQUEST:
      return { loading: true };
    case ARTIST_CREATE_SUCCESS:
      return { loading: false, success: true, artist: action.payload };
    case ARTIST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ARTIST_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
export const artistUpdateReducer = (state = { artist: {} }, action) => {
  switch (action.type) {
    case ARTIST_UPDATE_REQUEST:
      return { loading: true };
    case ARTIST_UPDATE_SUCCESS:
      return { loading: false, success: true, artist: action.payload };
    case ARTIST_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ARTIST_UPDATE_RESET:
      return { artist: {} };
    default:
      return state;
  }
};
