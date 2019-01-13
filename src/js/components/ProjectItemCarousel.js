import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

class ProjectInfo extends Component {
  render(){
    <div>"hello"</div>
  }
}
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
    let imageList = []
    for (let i = 0; i < images.length; i++) {
      imageList.push({path:`./project-imgs/${this.state.category}/${id}/${encodeURI(images[i])}`, i:i, key:`img-${i+1}`});
    }
    return (
      <Carousel>
          { 
            imageList.map( image => {
              return <div key={ image.key }>
                <img src={ image.path }/>
              </div>
            })
          }
      </Carousel>
    );
  }
}

export default ProjectItemCarousel;
