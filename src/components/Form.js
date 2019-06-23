import React from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import Item from './Item';


const FormApp = (props) => {
  return (
    <Form onSubmit={props.addTask}>
      <Form.Group>
        <Form.Label className="text-light">Task</Form.Label>
        <Form.Control
         onChange={props.input}
        type="text" 
        placeholder="Type your task here ..." 
        value={props.value} 
        className= {props.error ? "is-invalid" : "from-control"}/>
       <div className="invalid-feedback bg-dark p-2">Task Required</div>
      </Form.Group>
      <Button type="submit" variant="success" block>Add Task</Button>
    </Form>
  );
}

export default FormApp;