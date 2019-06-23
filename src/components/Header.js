import React from 'react';

const header = (props) => {
    return (
        <div className="text-center mt-2 bg-light">
            <h1 className="display-4">
                <i className="fas fa-tasks text-info mr-3"></i>
                {props.title} <span className="text-info">To-DO</span>
            </h1>
        </div>
    );
}

export default header;