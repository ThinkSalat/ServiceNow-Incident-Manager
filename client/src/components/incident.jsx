import React from 'react';
import { Link } from 'react-router-dom';

export default class Incident extends React.Component {
  constructor(props) {
    super(props);
  }

  incidentDetails(incident) {
    return Object.keys(incident).map (key => {
      if (typeof incident[key] !== 'object'){
        return <li>{key}: {incident[key]}</li>;
      } else {
        return <ul>
          {this.incidentDetails(incident[key])}
        </ul>;
      }
    });
  }

  render() {
    let {number} = this.props.match.params;
    let incident = caches.incidents.filter( inc => inc.number == number)[0];
    return(
      <div>
        <header>
          <Link to="/">Back to incidents</Link>
          <div>Incident {this.props.match.params.number}</div>
        </header>
        <div>
          Details:
          <ul>
            {/* <li>Description: {incident.description}</li> */}
            {this.incidentDetails(incident)}
          </ul>
        </div>
      </div>
    );
   }
}