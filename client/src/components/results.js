import React from 'react';

function Results(props) {
    return (
        <div className="container pb-5">
            <div className="card shadow-lg mx-auto mt-5 shadow-sm border">
                <div className="card-header font-weight-bolder">{props.header}</div>
                <div className="card-body">{props.children}</div>
            </div>
        </div>
        
    )
}

export default Results;