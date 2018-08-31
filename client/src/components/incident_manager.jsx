import React from 'react';
import ReactTable from "react-table";
import ReactModal from 'react-modal';
import Link from 'react-router-dom';
import "react-table/react-table.css";

import Incident from './incident';

export default class IncidentManager extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(number) {
    this.setState({ showModal: true, number });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  openModal(state, rowInfo, column, instance) {
      // if (column.Header === "Incident Number") {
        return {
        onClick: (e, handleOriginal) => {
          let row = caches.incidents.filter( incident => {
            return incident.number === rowInfo.original.number;
          })[0];
          this.handleOpenModal(row.number);
          // this.props.history.push(`incidents/${row.number}`);
        },
        style: {
          cursor: 'pointer'
        } 
      };
    // } else {
    //   return {};
    // }
  }
  render() {
    return(
      <div>
        <ReactModal isOpen={this.state.showModal} appElement={document.getElementById('root')}>
          <Incident handleCloseModal={this.handleCloseModal.bind(this)} number={this.state.number}/>
        </ReactModal>
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
          getTrProps={this.openModal.bind(this)}
          filterable
          />
          <br />

      </div>
    );
   }
}