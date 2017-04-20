import React,{Component} from "react";

export default class VideoListItem extends Component {

  //{video} breaks off video from props and assigns to video
    constructor({video}){
      // super({video});
      super();
      this.state = {};
      console.log(video);
    }

    render(){
      return(
        <li className='list-group-item'>
          <div className='video-list media'>
            <div className = 'media-left'>
              <img className='media-object' src={this.video.snippet.default.url}/>
            </div>
            <div className='media-body'>
              <div className='media-heading'>

              </div>
            </div>
          </div>
        </li>
      )
    }
}
