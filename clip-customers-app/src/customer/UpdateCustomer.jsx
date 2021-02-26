import React from 'react';
import { Container } from 'react-bootstrap';
import CustomerForm from '../components/CustomerForm';

export default class UpdateCustomer extends React.Component {

    constructor(props){
        super(props)
        this.state={
            name: "",
            email: "",
            id: "",
            isUpdate: false,
        }
    }

    componentDidMount(){
        const prevState =  this.props.location.state;

        if(prevState){
            this.setState({
                name: prevState.name,
                email:this.props.location.state.email,
                id:this.props.location.state.id,
                isUpdate:this.props.location.state.isUpdate,
            });
        }
    }

    render() {
        return (
            <Container>
                <h2>
                    Update Customer
                </h2>
                <CustomerForm 
                email={this.state.email}
                name = {this.state.name}
                customerId ={this.state.id}
                isUpdate = {true} />
            </Container>
        );
    }
}
