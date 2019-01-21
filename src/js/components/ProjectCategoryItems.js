import React, { Component } from "react";
import ProjectCategoryCard from "./ProjectCategoryCard";

class ProjectCategoryItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.category,
      categoryDisplayName: this.props.categoryDisplayName,
      cards: this.props.cards,
      //onCardClick: this.props.onCardClicked
    };
  }

  componentWillMount() {
    this.setState({
      category: this.props.category,
      categoryDisplayName: this.props.categoryDisplayName,
      cards: this.props.cards,
      //onCardClick: this.props.onCardClicked
    });
  }

  render() {
    return (
      <div className="card-items" id="js-pc-card-items">
        {
          Object
          .keys(this.state.cards)
          .map(key => <ProjectCategoryCard 
              key={key} 
              index={key} 
              details={this.state.cards[key]} 
              category={this.state.category}
              categoryDisplayName={this.state.categoryDisplayName}
              //onClick={this.state.onCardClick}
            />)
        }
      </div>
    );
  }
}

export default ProjectCategoryItems;