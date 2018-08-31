import React from 'react';
import { Link } from 'react-router-dom';

export default class Incident extends React.Component {
  constructor(props) {
    super(props);
  }

  incidentDetails(incident) {
    // let filter = ['sys_updated_by','sys_created_by', 'calendar_stc', 'made_sla', 'watch_list', 'upon_reject', 'sys_updated_on', 'hold_reason', 'caused_by', 'approval_history'];
    // let whiteList = ['parent', 'sys_updated_on', 'number', 'resolved_by', 'link', 'opened_by', 'closed_at', 'impact', 'active', 'priority','opened_at','resolved_at','category', 'subcategory', 'short_description', 'description', 'assignment_group', 'close_notes', 'closed_by', 'incident_state','urgency', 'assigned_to', 'severity','comments','approval','due_date', 'comments_and_work_notes', 'escalation', 'reopen_count','location'];
    let whiteList = ['sys_updated_on', 'number', 'closed_at', 'impact', 'active', 'priority','opened_at','resolved_at','category', 'subcategory', 'description',  'assigned_to'];
    return Object.keys(incident).map (key => {
      if (typeof incident[key] !== 'object'){
        if (!whiteList.includes(key)) {
          return;
        } else if (key !== 'link'){
          return <li>{key}: {incident[key]}</li>;
        } else {
          return <li><Link to={incident[key]}>{key}</Link></li>;
        }
      } else {
        return;
        // return <ul>
        //   <li>{key}</li>
        //   {this.incidentDetails(incident[key])}
        // </ul>;
      }
    });
  }

  render() {
    let {number} = this.props;
    let incident = caches.incidents.filter( inc => inc.number == number)[0];
    return(
      <div>
        <header>
          <button onClick={() => this.props.handleCloseModal()}>Close Modal</button>
          <div>Incident {incident.number}</div>
        </header>
        <div>
          Details:
          <ul>
            <li>Description: {incident.short_description}</li> */}
            {this.incidentDetails(incident)}
          </ul>
        </div>
      </div>
    );
   }
}