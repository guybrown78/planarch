import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> View more
      </button>
    )
  }
}

class CardHeader extends React.Component {
	constructor(props) {
		super(props);
		
		const { category, id, images} = this.props;
		const base = `./project-imgs/${category}/${id}`;
		const cachedImages = new Array();
		images.map(function(img){
			// caches images, avoiding white flash between background replacements
			cachedImages.push(new Image().src = `${base}/${encodeURI(img)}`);
		 });
    this.state = {
			intervalTime: Math.floor(Math.random() * 3000) + 4000,
			currentImageIndex: 0,
			currentImage: `url(${cachedImages[0]})`,
			cachedImages: cachedImages,
		};
	}
	
	componentDidMount() {
		// set Interval
    this.interval = setInterval(this.timer, this.state.intervalTime);
	}
	

  componentWillUnmount() {
    clearInterval(this.interval);
  }
	timer = () => {
		if((this.state.cachedImages.length - 1) > this.state.currentImageIndex){
			this.setState({currentImageIndex:this.state.currentImageIndex + 1});
		}else{
			this.setState({currentImageIndex:0});
		}
		this.setState({currentImage: `url(${this.state.cachedImages[this.state.currentImageIndex]})`});
	}
	
  render() {
		const { title } = this.props;
    return (
      <div style={{"backgroundImage":this.state.currentImage}}className="card-header">
        <h4 className="card-header--title">{title}</h4>
      </div>
    )
  }
}

class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <Button />
      </div>
    )
  }
}


class ProjectCategorySpeculativeCard extends React.Component {
	
  render() {
		const itemURL = `./project-item.html?c=${this.props.category}&id=${this.props.details.id}`;
		//console.log(this.props.details)
		return (
			<a 
				href={itemURL}
				className="card" 
			>
       	<CardHeader 
          category={this.props.category} 
					title={this.props.details.title} 
					image={this.props.details.image} 
					images={this.props.details.images} 
          id={this.props.details.id}
        />
				<CardBody /> 
      </a>
    )
  }
}

export default ProjectCategorySpeculativeCard;