import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { getMovieDetail } from '../../actions/index';
import {connect} from "react-redux";

class MovieDetail extends Component {
  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/' + this.props.match.params.id + '?api_key=5874acfd11651a28c55771624f7021f4&language=ru-ru',{
      method: "GET",
    })
      .then(response => {
        response.json()
          .then(response => {
            const { getMovieDetail } = this.props;
            getMovieDetail(response);
          })
      })
  }
  render() {
    const { movieDetail } = this.props;
    return (
      <main className='page-main'>
        <section className="movies">
          <div className='poster-wrap fl'>
            <img src={'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path}  alt=""/>
          </div>
          <div className='info-wrap fl'>
            <p>
              <span>Название: </span>{movieDetail.title}
            </p>
            <p>
              <span>Обзор: </span>{movieDetail.overview}
            </p>
            <p>
              <span>Оценка: </span>{movieDetail.vote_average}
            </p>
            <div>
              <a href={movieDetail.homepage}>Домашняя страница фильма</a>
            </div>
            <Link to='/'>На главную</Link>
          </div>
        </section>
      </main>
    )
  }
}
export default connect(
  state =>({
    movieDetail: state.movieDetail
  }),
  { getMovieDetail }
)(MovieDetail);