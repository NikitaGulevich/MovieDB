import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pagination from 'material-ui-pagination';
import { getMoviesList, getTotalPages, changePage } from '../actions';
import  MoviesList from './MovieDB/MoviesList';
import  NameFilter from './Inputs/NameFilter';
import  SearchByYear from './Inputs/YearFilter';

const paginationWrapStyle = {
  margin: '10px 0',
  textAlign: 'center'
};

class IndexPage extends Component {

  handlerPagination = (number) => {
    const { changePage } = this.props;
    changePage(number);
  }

  request = (year, name, page) => {
    let query;
    if (name === '') {
      query = 'https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=ru-RU';
      if (year) {
        query += '&primary_release_year=' + year;
      }
    } else {
      query = 'https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&language=ru-RU' + '&query=' + name;
      if (year) {
        query += '&year=' + year;
      }
    }
    if (page) {
      query += '&page=' + page;
    }
    fetch(query,{
      method: "GET",
    })
      .then(response => {
        response.json()
          .then(response => {
            const { getMoviesList, getTotalPages, totalPages } = this.props;
            getMoviesList(response.results);
            if (totalPages !== response.total_pages) {
              getTotalPages(response.total_pages);
            }
          })
      })
  }

  componentDidMount() {
    const { filterYear, filterName, currentPage } = this.props;
    this.request(filterYear, filterName, currentPage)
  }
  componentWillReceiveProps(nextProps) {
    const { filterYear, filterName, currentPage } = nextProps;
    if (filterYear !== this.props.filterYear
      || filterName !== this.props.filterName
      || currentPage !== this.props.currentPage){
      this.request(filterYear, filterName, currentPage)
    }

  }
  render() {
    const { moviesList, totalPages, currentPage } = this.props;
    let pagination;
    if (totalPages > 1) {
      pagination = (
        <Pagination
          total = { totalPages }
          current = {currentPage}
          display = {10}
          styleRoot = { paginationWrapStyle }
          onChange = { this.handlerPagination }
        />
      )
    }
    return (
      <div>
        <header className='page-header'>
          <NameFilter />
          <SearchByYear />
        </header>
        <main className='page-main'>
          <MoviesList  { ...{ moviesList } }/>
          {pagination}
        </main>
      </div>
    )
  }
}
export default connect(
  state =>({
    filterYear: state.filterYear,
    filterName: state.filterName,
    moviesList: state.moviesList,
    totalPages: state.totalPages,
    currentPage: state.currentPage
  }),
  { getMoviesList, getTotalPages, changePage }
)(IndexPage);