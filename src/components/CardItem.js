import React from 'react';
import PropTypes from 'prop-types';
import emptyImg from '../assets/img/empty-img.jpeg';

const CardItem = ({Title, Poster, Type, Year, imdbID, showImg}) => {

    return(
            <div key={imdbID} className="col-lg-3 col-md-4 mb-3 card-item" >
                <div className="card-content cursor-pointer p-3 shadow-sm">
                    <strong className="type-badge">{Type}</strong>
                    <img onClick={() => {showImg(Poster);}} 
                    data-bs-toggle="modal" data-bs-target="#exampleModal" 
                    className="w-100" src={Poster && Poster !== 'N/A'?Poster:emptyImg} alt={Title} />
                    <div className="mt-2">
                        <h6 className="mb-1">{Title.length > 30 ? Title.substring(0,30)+'...' : Title}</h6>
                        <small className="text-muted">{Year}</small>
                    </div>
                </div>
            </div>
    )
}

CardItem.propTypes = {
    Poster: PropTypes.string,
    Title: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
  };

export default CardItem;
  