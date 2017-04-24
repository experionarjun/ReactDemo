import React, {Component} from "react";

//components
import VideoListItem from './video_list_item';

export default class VideoList extends Component {

  render(){

    return(
      <ul className='col-md-4 list-group'>
          {this.listVideos()}
      </ul>
    )
  }

  listVideos(){
    console.log('VideoList props',this.props)
    let videoList = this.props.videos.map((video)=>{
      return (
        <VideoListItem
          onVideoSelect={this.props.onVideoSelect}
          video={video}
          key={video.etag}
        />
      )
    })
    return videoList
  }

}
