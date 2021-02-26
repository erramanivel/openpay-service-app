import React from 'react';
import {  Button, Container } from 'react-bootstrap';

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import axios from 'axios';
import history from '../history';

const columnsHeaders = [
    {
        dataField: "id",
        text: "ID",
        sort: true
     },
    { dataField: "name",
     text: "Name",
     sort: true
    },
    { dataField: "email",
     text: "Email",
     sort: true
    },
    { dataField: "creationDate",
     text: "Creation Date",
     sort: true
    },
    { dataField: "actions",
     text: "Actions",
     sort: false
    }];

export default class Customers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
        };
        this.generateTableData = this.generateTableData.bind(this);
    }

    generateTableData() {
        let res = [];
        let tableData;
        if (this.state.customers) {
            tableData = this.state.customers;
        }
        for (var i = 0; i < tableData.length; i++) {
            let identifier = tableData[i].id;
            let customerName = tableData[i].name;
            let customerEmail =tableData[i].email;
            let customerCreationDate =tableData[i].creation_date;
            res.push(
                {
                    id: identifier,
                    name: customerName,
                    email: customerEmail,
                    creationDate: customerCreationDate,
                    actions: <Button variant="btn btn-dark"  size= 'sm'
                    onClick={() => history.push({pathname: `/update-customer`,
                    state:{
                        id: identifier,
                        name: customerName,
                        email: customerEmail,
                        isUpdate: true
                    }})
                }>
                        Update Customer</Button>
                }
            );
        }
        return res;
    }
    componentDidMount() {
        let url = 'http://localhost:8000/api/v1/customers?offset=0&limit=100';
        axios.get(url)
            .then(response => {
                this.setState({
                    customers: response.data
                });
            },
                (error) => {
                    console.error(error);
                    this.setState({
                        customers: []
                    });
                });
    }

    render() {
        const res = this.generateTableData();
        console.log(res.length);
        return (
            <Container>
                <h2>
                    Customers
                </h2>
                <BootstrapTable
                    data = {res}
                    bootstrap4
                    keyField="id"
                    columns={ columnsHeaders }
                    pagination={paginationFactory({sizePerPage: 10})}
                    />
                <form>
                    <Button variant="btn btn-success" onClick={() => history.push('/create-customer')}>Create Customer</Button>
                </form>
            </Container>
        );
    }
    
    
}