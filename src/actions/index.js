import * as types from '../constants';

export const changeFilterName = payload => ({
  type: types.CHANGE_FILTER_NAME,
  payload
});

export const changeFilterYear = payload => ({
  type: types.CHANGE_FILTER_YEAR,
  payload
});

export const getTotalPages = payload => ({
  type: types.GET_TOTAL_PAGES,
  payload
});

export const changePage = payload => ({
  type: types.CHANGE_CURRENT_PAGE,
  payload
});

export const getMoviesList = payload => ({
  type: types.GET_MOVIES_LIST,
  payload
});

export const getMovieDetail = payload => ({
  type: types.GET_MOVIE_DETAIL,
  payload
});