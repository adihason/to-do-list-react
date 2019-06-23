import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const item = (props) => {
    return (
        <div>
            <li className="list-group-item lead">
                {props.task}
                <button className="float-right btn btn-sm btn-danger" onClick={props.removeTask}>X</button>
            </li>
        </div>
    );
}

export default item;