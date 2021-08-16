import React from 'react';
import { map } from 'ramda';

export default ({movies}) => {

    return(
        <div className="row">
            {movies ?
            map(movie => (

            <div className="col-lg-3 col-md-4 mb-3 card-item" >
                <div className="card-content cursor-pointer p-3">
                    <img className="w-100" src={movie.Poster} alt={movie.Title} />
                </div>
            </div>
            ), movies)
            : null
        }
        </div>
    )
}
  