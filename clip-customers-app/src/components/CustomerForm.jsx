import React from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

export default class CustomerForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            email: this.props.email,
            customerId: this.props.customerId,
            isUpdate: this.props.isUpdate | false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
      handleSubmit(event) {
        const data = {
            'name': this.state.name,
            'email': this.state.email
        };
        if(this.props.isUpdate){
            let url = `http://localhost:8000/api/v1/customers/${this.props.customerId}`;
            console.log(url);
            axios.put(url, data)
            .then(response => {
                console.log(response);
                alert('Customer updated succesfully');
            },
            (error) => {
                    console.error(error);
                    alert('There was an error creating the user');
                });
        }else{
            let url = 'http://localhost:8000/api/v1/customers';
            axios.post(url, data)
            .then(response => {
                console.log(response);
                alert('Customer created succesfully');
            },
            (error) => {
                    console.error(error);
                    alert('There was an error creating the user');
                });
        }
        event.preventDefault();
      }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="example@email.com"
                        value={this.state.email}
                        onChange={e => this.setState({email: e.target.value})}
                        required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter your name"
                        value={this.state.name}
                        onChange={e => this.setState({name: e.target.value})}
                        required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }

}