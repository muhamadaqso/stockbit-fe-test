import React from 'react';
import { Component } from 'react';
import { fetchMoviesByID } from '../../store/actions/omdb'
import { connect } from 'react-redux'
import emptyImg from '../../assets/img/empty-img.jpeg';
import Loading from '../../components/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUserCircle } from '@fortawesome/free-solid-svg-icons';

class Detail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            movieID: '',
            moviesData: null,
            isFetching: true,
            modalImg: '',
        }
    }

    componentDidMount(){
        this.setState({isFetching: true, movieID : this.props.match.params.id});
        setTimeout(() => {
            this.fetchMoviesData();
        }, 200);
      }

    fetchMoviesData() {
        this.props.dispatch(fetchMoviesByID(this.state.movieID))
        .then(res => {
            console.log(res)
            if(res.movies) {
                if(res.movies.data) {
                    this.setState({moviesData: res.movies.data});
                }
                this.setState({isFetching: false});
            }
        });

      }

    render() {
        const {moviesData, isFetching} = this.state;
        return(
            <div className="detail-page mt-5 mb-5 pb-5">
                <div className="container">

                {isFetching &&
                    <div className="row">
                        <div className="col-12">
                            <Loading />
                        </div>
                    </div>
                }

                {!isFetching && moviesData &&
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <strong className="type-badge">{moviesData.Type}</strong>
                                <img className="w-100" 
                                src={moviesData.Poster && moviesData.Poster!== 'N/A'?moviesData.Poster:emptyImg} 
                                alt="detail image"  />
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="movie-content-detail ps-3">
                               <h3 className="title-border">{moviesData.Title} ({moviesData.Year})</h3>
                               <h6 className="mt-3">{moviesData.Production?moviesData.Production : '-'}</h6>
                               <div className="d-flex mt-2">
                                    <p className="gray-1 font-weight-semibold">{moviesData.Released?moviesData.Released : '-'}</p>
                                    <p className="ms-2 gray-3">{moviesData.Country?moviesData.Country : '-'}</p>
                                    <p className="ms-2 gray-3">{moviesData.Runtime?moviesData.Runtime : '-'}.</p>
                                    <strong className="ms-2 gray-6">{moviesData.Rated?moviesData.Rated : '-'}</strong>
                               </div>
                               <div className="d-flex mt-2">
                                    <div>
                                        <div className="text-orange d-flex">
                                            <FontAwesomeIcon className="f-16 align-self-center" icon={faStar} />
                                            <h4 className="mb-0 ms-2 align-self-center">{moviesData.imdbRating?moviesData.imdbRating : '-'} IMDB</h4>
                                        </div>
                                        <div className="d-flex mt-2">
                                        <FontAwesomeIcon className="f-16 align-self-center me-2" icon={faUserCircle} />
                                        <small>{moviesData.imdbVotes?moviesData.imdbVotes : '- '} votes</small>
                                        </div>
                                    </div>
                                    <div className="ms-4 pt-1">
                                        Awards : <br/>{moviesData.Awards?moviesData.Awards : '- '}
                                    </div>
                                </div>
                               <div className="d-flex mt-4">
                                   <p className="bg-pink round-2 px-4 py-2 ">{moviesData.Genre?moviesData.Genre : '- '}</p>
                               </div>
                               <div className="mt-2">
                                   <h5>Synopsis :</h5>
                                   <p>{moviesData.Plot?moviesData.Plot : '- '}</p>
                                </div>
                               <div className="mt-2">
                                   <h5>Writer :</h5>
                                   <p>{moviesData.Writer?moviesData.Writer : '- '}</p>
                                </div>
                               <div className="mt-2">
                                   <h5>Director :</h5>
                                   <p>{moviesData.Director?moviesData.Director : '- '}</p>
                                </div>
                               <div className="mt-2">
                                   <h5>Cast :</h5>
                                   <p>{moviesData.Actors?moviesData.Actors : '- '}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    const { Movies } = state
    return { Movies }
  }
  
export default connect(mapStateToProps)(Detail)