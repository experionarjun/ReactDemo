import React,{Component} from "react";

let imageUrl,title;

export default class VideoListItem extends Component {
  //without init when the component re-renders the title and image will the same as the last video

  init(){
    imageUrl=this.props.video.snippet.thumbnails.default.url;
    title=this.props.video.snippet.title;
  }

  render(){
    this.init();
    return(
      <li onClick={()=>{this.props.onVideoSelect(this.props.video)}} className='list-group-item'>
        <div className='video-list media'>
          <div className='media-left'>
            <img className='media-object' src={imageUrl} />
          </div>
          <div className='media-body'>
            <div className='media-heading'>
              {title}
            </div>
          </div>
        </div>
      </li>
    )
  }
}
