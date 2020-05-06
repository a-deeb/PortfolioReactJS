import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Hero from '../components/Hero';
import Content from '../components/Content';


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



render() {
const { status } = this.state;
return(
<div>     
<Hero title={this.props.title} />
<Content>
<form onSubmit={this.submitForm}
action="https://formspree.io/mbjzjwdp"
method="POST" >
<Form.Group>
<Form.Label htmlFor="full-name">Full Name</Form.Label>
<Form.Control  type="name" name="text" />
</Form.Group>
<Form.Group>
    <Form.Label htmlFor="email">Email</Form.Label>
    <Form.Control  type="email" name="email" />
</Form.Group>
<Form.Group>
    <Form.Label htmlFor="message">Message</Form.Label>
    <Form.Control  type="message" name="textarea"  />
</Form.Group>
<Button className="d-inline-block" variant="primary" type="submit">
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