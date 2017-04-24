import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import API_KEY from './app.config.js';

import YTSearch from 'youtube-api-search';
import _ from 'lodash'

//components
import SearchBar  from "./components/search";
import VideoDetail from "./components/video_detail"
import VideoList  from "./components/video_list";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      videos : [],
      selectedVideo:null
    }

    this.videoSearch=this.videoSearch.bind(this);
  }

  videoSearch(term){
    YTSearch({key: API_KEY , term : term},(data) => {
      this.setState({
        videos:data,
        selectedVideo:data[0]
      });
    })
  }

  componentWillMount(){
    this.videoSearch('')
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)},300 )
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar onVideoSearch={videoSearch}/>
        </div>
        <div className='container'>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={(selectedVideo) => {this.setState({selectedVideo})}}
            videos={this.state.videos}
          />
        </div>
      </div>

    );
  }
}

export default App;


//onVideoSelect={selectedVideo => {this.setState({selectedVideo})}}
//same as {this.setState({selectedVideo:selectedVideo})}
