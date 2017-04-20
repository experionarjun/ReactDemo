import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import API_KEY from './app.config.js';
import YTSearch from 'youtube-api-search';

//components
import SearchBar  from "./components/search";
import VideoList  from "./components/video_list.js";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos : []
    }
  }

  videoSearch(term){
    YTSearch({key: API_KEY , term : term},(data) => {
      this.setState({videos:data});
      console.log('App.js videoSearch ',this.state.videos);
    })
  }

  componentWillMount(){
    this.videoSearch('something')
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar/>
        </div>
        <div className='container'>
          <VideoList videos={this.state.videos}/>
        </div>
      </div>

    );
  }
}

export default App;
