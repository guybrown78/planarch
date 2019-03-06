import React from "react";

class Button extends React.Component {
  render() {
    return (
      <button className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </button>
    )
  }
}

class InfoButton extends React.Component {
  render() {
    return (
			<button 
				className="button button-secondary"
				onMouseOver={this.props.mouseOverHandler}
				onMouseOut={this.props.mouseOutHandler}
			>
        <i className="fas fa-info-circle"></i>
      </button>
    )
  }
}



class CardInfo extends React.Component {
	constructor(props) {
    super(props);
		this.mouseOverHandler = this.mouseOverHandler.bind(this);
		this.mouseOutHandler = this.mouseOutHandler.bind(this);
		this.state = {
			isOpen:false
		}
	}
	mouseOverHandler(e){
		e.preventDefault();
		this.setState({
      isOpen: true,
		});
	}
	mouseOutHandler(e){
		e.preventDefault();
		this.setState({
			isOpen: false,
		});
	}
  render() {
		const { title, project, site } = this.props;
    return (
			<div 
				className={'card-info ' + (this.state.isOpen ? 'open' : 'closed')}
			>
        <h2>{title}</h2>
        <p className="info-content">
          {project}
        </p>
        <p className="project-site">
          <i className="fas fa-map-marker-alt"></i> {site}
        </p>
        
				<InfoButton 
					mouseOutHandler={this.mouseOutHandler}
					mouseOverHandler={this.mouseOverHandler}
				/>
      </div>
    )
  }
}

class CardHeader extends React.Component {
  render() {
    const { image, category, id, title } = this.props;
    var style = { 
        backgroundImage: `url(./project-imgs/${category}/${id}/${encodeURI(image)})`
    };
    return (
      <div style={style} className="card-header">
        <h4 className="card-header--title">{title}</h4>
				<div className="card-header--middle" />
				<CardInfo 
					project={this.props.project} 
					site={this.props.site}
				/>
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


class ProjectCategoryCard extends React.Component {
  render() {
    const itemURL = `./project-item.html?c=${this.props.category}&id=${this.props.details.id}`;
		return (
			<a 
				href={itemURL}
				className="card" 
			>
       	<CardHeader 
          category={this.props.category} 
					title={this.props.details.title} 
					project={this.props.details.project} 
          site={this.props.details.site}
          image={this.props.details.image} 
          id={this.props.details.id}
        />
				<CardBody /> 
				
      </a>
    )
  }
}

export default ProjectCategoryCard;