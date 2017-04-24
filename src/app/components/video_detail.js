import React, {Component} from 'react';

let title,description,videoId,url;

export default class VideoDetail extends Component{

  render(){

    if(!this.props.video){
      return this.renderLoading();
    }

    this.initContent();

    return(
      <div className='video-detail col-md-8'>
        <div className='embed-responsive embed-responsive-16by9'>
          <iframe className='embed-responsive-iem' src={url}> </iframe>
        </div>
        <div className='details'>
          <div> <h4>{title}</h4></div>
          <div>{description}</div>
        </div>
      </div>
    )
  }

  renderLoading(){
    return(
      <div>
        Loading....
      </div>
    )
  }

  initContent(){
    title=this.props.video.snippet.title;
    description=this.props.video.snippet.description;
    videoId=this.props.video.id.videoId;
    url=`https://www.youtube.com/embed/${videoId}`;
  }
}
