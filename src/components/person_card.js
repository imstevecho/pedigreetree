import React, { Component } from 'react';
export default class PersonCard extends Component {


  render() {
    return (
      <div className="person_card" >
        <div className="person_photo">
          <div className="svg_silhouette svg_silhouette_F"></div>
        </div>
        <div className="person_details">
          <div className="person_name">{this.props.name} (born Henning)</div>
          <div className="person_years">{this.props.yearsRange}</div>
          <div className="person_relationship">Generation: {this.props.generation}</div>
        </div>
      </div>
    )
  }
}


