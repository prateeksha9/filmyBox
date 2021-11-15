import React from "react";
import {connect} from "react-redux";
import {data} from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites} from "../actions";
import { StoreContext } from "..";

class App extends React.Component {
  componentDidMount(){
    // const {store} = this.props;
    // store.subscribe(() => {   //3
    //   console.log('updated');
    //   this.forceUpdate();
    // })
    // make api call
    // dispatch action
    this.props.dispatch(addMovies(data));  //2
    console.log('STATE', this.props);
  }

  isMovieFavourite = (movie) => {
    const {movies} = this.props;
    const index = movies.favourites.indexOf(movie);
    if(index !== -1){
      // movie found
      return true;
    }
    return false;
  }
  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourites(val))
  }
  render() {  //1    //4
    const {movies, search} = this.props;

    const {list, favourites, showFavourites}= movies; //{movies:{}, search: {}}
    const displayMovies = showFavourites ? favourites : list;
    
  return (
    <div className="App">
      <Navbar  search={search}/>
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
              dispatch={this.props.dispatch}
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

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     )
//   }
//  }

function callback(state){
  return{
    movies: state.movies,
    search: state.movies,
  }
}

const connectedAppComponent =  connect(callback)(App);
export default connectedAppComponent;