import React from "react";
import {data} from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions";

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
  render() {  //1    //4
    const {list}= this.props.store.getState(); //{list:[], favorites: []}
  return (
    <div className="App">
      <Navbar />
      <div className = "main">
          <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
      </div>
      <div className="list">
          {list.map((movie, index) => (
            <MovieCard movie={movie} key={`movies-${index}`} />
          ))}
      </div>
    </div>
    </div>
  );
  };
  
}
export default App;