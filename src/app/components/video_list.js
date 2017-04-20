import React, {Component} from "react";

//components
import VideoListItem from './video_list_item';

export default class VideoList extends Component {

  constructor(props){
    super(props);
    this.state = {};
    console.log('VideoList props',props)
  }

  render(){

    return(
      <ul className='col-md-4 list-group'>
          {this.listVideos()}
      </ul>
    )
  }

  listVideos(){
    let videoList = this.props.videos.map((video)=>{
      return <VideoListItem video={video} key={video.etag}/>
    })
    return videoList
  }

}
