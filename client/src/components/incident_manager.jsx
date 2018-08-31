import React from 'react';
import ReactTable from "react-table";
import Link from 'react-router-dom';
import "react-table/react-table.css";

export default class IncidentManager extends React.Component {
  openModal(state, rowInfo, column, instance) {
      if (column.Header === "Incident Number") {
        return {
        onClick: (e, handleOriginal) => {
          let row = caches.incidents.filter( incident => {
            return incident.number === e.currentTarget.innerText;
          })[0];
          this.props.history.push(`incidents/${row.number}`);
        },
        style: {
          cursor: 'pointer'
        } 
      };
    } else {
      return {};
    }
  }
  render() {
    return(
      <div>
        <ReactTable
          data={caches.incidents}
          columns={[
            {
              columns: [
                {
                  Header: "Incident Number",
                  accessor: "number"
                },
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
                  Header: "Category",
                  accessor: "category"
                },
                {
                  Header: "Active",
                  accessor: "active"
                },
                {
                  Header: "Description",
                  accessor: "description"
                },
                {
                  Header: "Resolution",
                  accessor: "close_notes"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          // pivotBy={["active", "priority"]}
          noDataText="No data loaded, API may be down"
          getTdProps={this.openModal.bind(this)}
          filterable
          />
          <br />

      </div>
    );
   }
}