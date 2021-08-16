import React, { useState } from 'react';
import { map } from 'ramda';

const CardItem = ({movies}) => {
    const [img, setImg] = useState('');
    return(
        <div className="row">
            {movies ?
                map(movie => (

                <div key={movie.imdbID} className="col-lg-3 col-md-4 mb-3 card-item" >
                    <div className="card-content cursor-pointer p-3 shadow-sm">
                        <strong className="type-badge">{movie.Type}</strong>
                        <img data-bs-toggle="modal" data-bs-target="#exampleModal" 
                        onClick={()=> setImg(movie.Poster)}
                        className="w-100" src={movie.Poster} alt={movie.Title} />
                        <div className="mt-2">
                            <h6 className="mb-1">{movie.Title.length > 30 ? movie.Title.substring(0,30)+'...' : movie.Title}</h6>
                            <small className="text-muted">{movie.Year}</small>
                        </div>
                    </div>
                </div>
                ), movies)
            : null
        }
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Image Detail</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <img className="w-100" src={img} />
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default CardItem;
  