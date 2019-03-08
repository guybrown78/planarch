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
  render() {
    const { image, category, id, title } = this.props;
    var style = { 
        backgroundImage: `url(./project-imgs/${category}/${id}/${encodeURI(image)})`
    };
    return (
      <div style={style} className="card-header">
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
		return (
			<a 
				href={itemURL}
				className="card" 
			>
       	<CardHeader 
          category={this.props.category} 
					title={this.props.details.title} 
          image={this.props.details.image} 
          id={this.props.details.id}
        />
				<CardBody /> 
      </a>
    )
  }
}

export default ProjectCategorySpeculativeCard;