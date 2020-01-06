import React from 'react';

const SavedBookCard = props => {
    return (
        <div className="mt-5 mb-3 card mx-auto dark-shadow card-width">
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
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                            <a 
                            className="btn btn-outline-dark rounded-pill mt-3"
                            rel="noopener noreferrer" 
                            href={props.purchaseLink} 
                            target='_blank'>Puchase On Amazon</a>
                            </div>
                            <div className="col-sm">
                            <button 
                            onClick={() => props.onClick(props.id)} 
                            className="btn btn-outline-danger rounded-pill mt-3 save-btn"
                            id={props.id} >Delete Book</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default SavedBookCard;