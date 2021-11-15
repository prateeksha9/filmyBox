import React from "react";
import {connect} from "react-redux"
import {  StoreContext } from "..";
import {addMovieToList, handleMovieSearch} from '../actions'
// import {connect} from 'react-redux';   connects to redux store 
// import {connect} from '..'

class Navbar extends React.Component{

    constructor (props){
        super(props);
        this.State = {
            searchText : ''
        }
    }

    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults : false
        });
    }

    handleSearch = () => {
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText))
    };
    handleChange = (e) => {
        this.setState({
          searchText: e.target.value,
        });
      };

    render (){
        // const { showSearchResults} = this.props;
        const {result: movie, showSearchResults } = this.props.search
        // console.log('kuch bhi', this.props)
        return (
            <div className = "nav">
                <div className ="search-container">
                    <input onChange={(e) => this.handleChange(e)} />
                    <button id = "search-btn" onClick= {this.handleSearch}>Search</button>
                     {showSearchResults &&
                        <div className = "search-results">
                            <div className = "search-result">
                                <img src={movie.Poster} alt="search-pic" />
                                <div className="movie-info">
                                    <span>{movie.Title}</span>
                                    <button onClick={() => this.handleAddToMovies(movie)}>
                                        Add to Movies
                                    </button>

                                </div>
                            </div>

                        </div>}
                </div>
            </div>
        );
    }
}

// class NavbarWrapper extends React.Component{
//     render(){
//         return(
//             <StoreContext.Consumer>
//                 {(store) => <Navbar dispatch={store.dispatch} search={this.props.search}/>}
//             </StoreContext.Consumer>
//         )
//     }
// }

function mapStateToProps ( {search}){
    return{
        search
    }
}
export default connect(mapStateToProps)(Navbar);
