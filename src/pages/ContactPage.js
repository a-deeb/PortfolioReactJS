import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';

class ContactPage extends React.Component {
   constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      name: '',
      email: '',
      message: '',
      disabled: false,
      emailSent: null
    };
}


handleChange = (event) => {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  this.setState({
      [name]: value
  })
}
handleSubmit = (event) => {
  event.preventDefault();

  console.log(event.target);

  this.setState({
      disabled: true
  });
Axios.post('http://localhost:3030/api/email', this.state)
.then(res => {
    if(res.data.success) {
        this.setState({
            disabled: false,
            emailSent: true
        });
    } else {
        this.setState({
            disabled: false,
            emailSent: false
        });
    }
})
.catch(err => {
    console.log(err);

    this.setState({
        disabled: false,
        emailSent: false
    });
})

}

render() {
const { status } = this.state;
return(
<div>     
<Hero title={this.props.title} />
<Content>
<form onSubmit={this.submitForm} action="https://formspree.io/mbjzjwdp" method="POST" >
<Form.Group>
<Form.Label htmlFor="name">Full Name</Form.Label>
<Form.Control  type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
</Form.Group>
<Form.Group>
    <Form.Label htmlFor="email">Email</Form.Label>
    <Form.Control  type="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
</Form.Group>
      <Form.Group>
    <Form.Label htmlFor="message">Message</Form.Label>
    <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} required/>
</Form.Group>

<Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
    Send
</Button>
    {status === "SUCCESS" && true  &&  <p className="d-inline success-msg">Email Sent</p> }
    {status === "ERROR" && <p className="d-inline err-msg">Email Not Sent</p>}
</form>
</Content>
</div>
);
}


submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }





}

export default ContactPage;