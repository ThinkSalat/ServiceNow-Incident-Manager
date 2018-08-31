import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class IncidentManager extends React.Component {
  render() {
    return(
      <div>
        <ReactTable
          data={caches.incidents}
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
          filterable
          />
          <br />

      </div>
    );
   }
}