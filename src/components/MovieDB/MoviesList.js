import React, {Component} from 'react';
import MovieItem from './MovieItem';


export default class MoviesList extends Component {
  render() {
    const { moviesList } = this.props;
    let notFoundMessage;
    if (!moviesList) {
      notFoundMessage = <p>Ничего не найдено!</p>;
    }
    return (
      <section className="movies">
        {
          moviesList.map((item) =>  <div key={item.id}><MovieItem icon={item.backdrop_path} title={item.title} id={item.id}/></div>)
        }
        {notFoundMessage}
      </section>
    )
  }
}
