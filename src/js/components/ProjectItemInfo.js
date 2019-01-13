import React, { Component } from 'react';


class ProjectItemInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details
    };
  }

  render() {
    
    return (
      <div>
        <div className="info--item">
          <span className="info--item_title">Project: </span>
        {this.state.details.project}
        </div>
        <div className="info--item">
          <span className="info--item_title">Site: </span>
        {this.state.details.site}
        </div>
        <div className="info--item">
          <span className="info--item_title">Local Authority: </span>
        {this.state.details.la}
        </div>
        <div className="info--item">
          <div className="info--item_desc" dangerouslySetInnerHTML={{__html: this.state.details.text}} />
        </div>
      </div>
    );
  }
}

export default ProjectItemInfo;
