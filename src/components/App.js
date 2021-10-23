import React from "react";
import {data} from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites} from "../actions";

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(() => {   //3
      console.log('updated');
      this.forceUpdate();
    })
    // make api call
    // dispatch action
    store.dispatch(addMovies(data));  //2
    console.log('STATE', this.props.store.getState());
  }

  isMovieFavourite = (movie) => {
    const {favourites} = this.props.store.getState();
    const index = favourites.indexOf(movie);
    if(index !== -1){
      // movie found
      return true;
    }
    return false;
  }
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val))
  }
  render() {  //1    //4
    const {list, favourites, showFavourites}= this.props.store.getState(); //{list:[], favorites: []}
    const displayMovies = showFavourites ? favourites : list;
  return (
    <div className="App">
      <Navbar />
      <div className = "main">
          <div className="tabs">
          <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
      </div>
      <div className="list">
          {displayMovies.map((movie, index) => (
            <MovieCard 
              movie={movie} 
              key={`movies-${index}`} 
              dispatch={this.props.store.dispatch}
              isFavourite={this.isMovieFavourite(movie)}
            />
          ))}
      </div>
      {displayMovies.length === 0 ? <div className = "no-movies">No Movies to display!</div> : null}
    </div>
    </div>
  );
  };
  
}
export default App;