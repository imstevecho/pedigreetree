import React, { Component } from 'react';
import './index.css';
import FamilyData from './data/pedigreeTreeSuccess.json';
import PersonCard from './components/person_card'
import SvgRelationshipMap from './components/svg_relationship_map'

class PedigreeApp extends Component {

  componentDidMount() {
    console.log(FamilyData)
  }

  renderPersons() {
  	console.log("here....");
  	return FamilyData.data.persons.map( (person) => {
  		return <PersonCard key={person.id} {...person}/>
  	})
  }

  render() {
    return (
      <div className="PedigreeApp">
      	<h1>Pedigree Tree</h1>
      	{this.renderPersons()}
      </div>
    );
  }
}

export default PedigreeApp;
