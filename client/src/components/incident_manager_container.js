import { connect } from 'react-redux';

import IncidentManager from './incident_manager';
import { getIncidents } from '../actions/incident_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    incidents: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getIncidents: () => dispatch(getIncidents())
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(IncidentManager);