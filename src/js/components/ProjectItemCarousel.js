import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class ProjectItemCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      details: this.props.details
    };
  }

  
  render() {
    const { images, id } = this.state.details;
    let imgsHTML = "";
    for (let i = 0; i < images.length; i++) {
      imgsHTML += <div><img src="./project-imgs/${this.state.category}/${id}/${encodeURI(images[i])}" /></div>
    }
    console.log(imgsHTML)
    return (
      <Carousel>
          <div>
              <img src="img/bg_1.JPG" />
          </div>
          <div>
              <img src="img/bg_2.JPG" />
          </div>
          <div>
              <img src="img/bg_3.JPG" />
          </div>
      </Carousel>
    );
  }
}

export default ProjectItemCarousel;
