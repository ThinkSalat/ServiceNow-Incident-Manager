import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';
import { fileIncidents } from '../actions/incident_actions';

export default class IncidentManager extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getIncidents();
  }

  render() {
    if (!Object.keys(this.props.incidents).length) return null;
    return(
      <div>
        <ReactTable
          data={this.props.incidents.result}
          // data={fileIncidents.result}
          columns={[
            {
              columns: [
                {
                  Header: "Description",
                  accessor: "short_description"
                },
                {
                  Header: "Priority",
                  accessor: "priority"
                },
                {
                  Header: "Opened at",
                  accessor: "opened_at"
                },
                {
                  Header: "Incident Number",
                  accessor: "number"
                },
                {
                  Header: "Category",
                  accessor: "category"
                }
              ]
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
          // data={this.state.data} // should default to []
          // // pages={this.state.pages} // should default to -1 (which means we don't know how many pages we have)
          // loading={this.state.loading}
          // // manual // informs React Table that you'll be handling sorting and pagination server-side
          // onFetchData={(state, instance) => {
          //   // show the loading overlay
          //   this.setState({loading: true});
          //   // fetch your data
          //   axios.get('/api/incidents')
          //     .then((res) => {
          //       // Update react-table
          //       this.setState({
          //         data: res.data.rows,
          //         pages: res.data.pages,
          //         loading: false
          //       });
          //     });
          // }}
          />
          <br />

      </div>
    );
   }
}