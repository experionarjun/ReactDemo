import React, {Component} from 'react';
import '../styles/main.css'

export default class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state = {
      term : ""
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return(
      <div>
        <input placeholder='Search.....' onChange={this.onInputChange} className='searchInput' />
      </div>
    )
  }


   onInputChange(e){
    let temp = e.target.value;
    console.log(temp)
    this.setState({ term: temp});
  }

}
