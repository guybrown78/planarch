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


class CardHeader extends React.Component {
  render() {
    const { image, category } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-header">
        <h4 className="card-header--title">{category}</h4>
      </header>
    )
  }
}


class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h2>{this.props.title}</h2>
        <p className="body-content">
          {this.props.project}
        </p>
        <p className="project-site">
          <i className="fas fa-map-marker-alt"></i> {this.props.site}
        </p>
        
        <Button />
      </div>
    )
  }
}


class ProjectCategoryCard extends React.Component {
  render() {
    return (
      <article className="card">
        <CardHeader category={this.props.category} image={this.props.details.image}/>
        <CardBody title={this.props.details.title} project={this.props.details.project} site={this.props.details.site}/>
      </article>
    )
  }
}

export default ProjectCategoryCard;