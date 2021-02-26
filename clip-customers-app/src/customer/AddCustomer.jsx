import React from 'react';
import { Container } from 'react-bootstrap';
import CustomerForm from '../components/CustomerForm';
export default class AddCustomers extends React.Component {

    render() {
        return (
            <Container>
                <h2>
                    Create Customer
                </h2>
                <CustomerForm />
            </Container>
        );
    }
}
