import * as types from '../constants';
import { merge } from 'lodash';

const initialState = {
  filterName: '',
  filterYear: '',
  moviesList: [],
  movieDetail: [],
  totalPages: null,
  currentPage: 1
};

export default (state = initialState, action) =>{
  switch (action.type) {

    case types.CHANGE_FILTER_YEAR:
      const slicedFilterYearState = merge({}, state);
      slicedFilterYearState.filterYear = action.payload;
      return slicedFilterYearState;

    case types.CHANGE_FILTER_NAME:
      const slicedFilterNameState = merge({}, state);
      slicedFilterNameState.filterName = action.payload;
      return slicedFilterNameState;

    case types.GET_MOVIES_LIST:
      const slicedMoviesListState = merge({}, state);
      slicedMoviesListState.moviesList = action.payload;
      return slicedMoviesListState;

    case types.GET_MOVIE_DETAIL:
      const slicedMovieDetailState = merge({}, state);
      slicedMovieDetailState.movieDetail = action.payload;
      return slicedMovieDetailState;

    case types.GET_TOTAL_PAGES:
      const slicedTotalPagesState = merge({}, state);
      slicedTotalPagesState.totalPages = action.payload;
      return slicedTotalPagesState;

    case types.CHANGE_CURRENT_PAGE:
      const slicedCurrentPageState = merge({}, state);
      slicedCurrentPageState.currentPage = action.payload;
      return slicedCurrentPageState;

    default:
      return state;
  }
}
