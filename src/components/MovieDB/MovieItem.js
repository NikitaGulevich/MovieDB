import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class MovieItem extends Component {
  render() {
    return (
      <Link to={'/' + this.props.id}>
        <div className="movie-item fl">
          <div className="icon-wrap">
            <div className="icon-hover"></div>
            <img src={'https://image.tmdb.org/t/p/w500'+this.props.icon} />
          </div>
          <span className="movie-title">{this.props.title}</span>
        </div>

      </Link>
    )
  }
}
export default MovieItem;