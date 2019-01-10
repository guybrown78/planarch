import React, { Component } from "react";
import ProjectCategoryCard from "./ProjectCategoryCard";

class ProjectCategoryItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      cards: this.props.cards
    };
  }

  componentWillMount() {
    this.setState({
      category: this.props.category,
      cards: this.props.cards
    });
  }

  render() {
    return (
      <div className="card-items" id="js-pc-card-items">
        {
          Object
          .keys(this.state.cards)
          .map(key => <ProjectCategoryCard key={key} index={key} details={this.state.cards[key]} category={this.state.category}/>)
        }
      </div>
    );
  }
}

export default ProjectCategoryItems;