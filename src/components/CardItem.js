import React from 'react';
import { map } from 'ramda';

export default ({movies}) => {
    return(
        <div className="row">
            {movies ?
                map(movie => (

                <div className="col-lg-3 col-md-4 mb-3 card-item" >
                    <div className="card-content cursor-pointer p-3 shadow-sm">
                        <span className="type-badge">{movie.Type}</span>
                        <img className="w-100" src={movie.Poster} alt={movie.Title} />
                        <div className="mt-2">
                            <h6 className="mb-1">{movie.Title.length > 30 ? movie.Title.substring(0,30)+'...' : movie.Title}</h6>
                            <small className="text-muted">{movie.Year}</small>
                        </div>
                    </div>
                </div>
                ), movies)
            : null
        }
        </div>
    )
}
  