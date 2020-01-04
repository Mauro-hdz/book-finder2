import React from 'react';



const BookCard = (props) => {
    return (
        <div>
            <div className="card mb-3 card-width">
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={props.thumbnail} className="card-img" alt="book thumbnail" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <h5>{props.subtitle}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text"><small className="text-muted">{props.author}</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BookCard;