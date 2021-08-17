import React from 'react';
import { Component } from 'react';
import { fetchMovies } from '../../store/actions/omdb'
import { connect } from 'react-redux'
import { path } from 'ramda'
import CardItem from '../../components/CardItem';
import Loading from '../../components/Loading';
import Modal from '../../components/Modal';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            movieTitle: 'marvel',
            moviePage: 1,
            moviesData: [],
            isFetching: true,
            isResponse: true,
            isSearch: false,
            modalImg: '',
        }
      }

      isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
      }

      componentDidMount(){
        document.addEventListener('scroll', this.trackScrolling);
        const queryString = require('query-string');
        var parsed = queryString.parse(this.props.location.search);
        if(parsed.search) {
            this.setState({isSearch : true, movieTitle: parsed.search});
        }
        this.setState({isFetching: true});
        setTimeout(() => {
            this.fetchMoviesData();
        }, 500);
      }

      componentWillUnmount() {
        document.removeEventListener('scroll', this.trackScrolling);
      }

      trackScrolling = () => {
        const wrappedElement = document.getElementById('homePage');
        if (this.isBottom(wrappedElement) && this.state.isResponse) {
          this.setState({moviePage: this.state.moviePage+1})
          this.fetchMoviesData();
        }
      };

      fetchMoviesData() {
        this.props.dispatch(fetchMovies(this.state.movieTitle, this.state.moviePage))
        .then(res => {
            if(res.movies) {
                if(res.movies.data.Search && res.movies.data.Search.length > 0) {
                    res.movies.data.Search.forEach(el => {
                        this.state.moviesData.push(el)
                    });
                }
                this.setState({isFetching: false, isResponse : Boolean(res.movies.data.Response)});
            }
        });

      }



    render() {
    const notFoundMessage = () => <div className="alert alert-warning" role="alert">Oops... Movie Not Found!</div>
    const {moviesData, modalImg, movieTitle, isSearch, isFetching} = this.state

    const handleChildClick = (val) => { 
        this.setState({modalImg : val});
      };

        return(
            <div className="home-page mt-5 mb-5 pb-5" id="homePage">
                <div className="container">
                        <div className="row mb-3">
                            <div className='col-12'>
                                <h3 className="title-border">{isSearch ? 'Result found : ' + movieTitle : 'Movie List '}</h3>
                                <p></p>
                            </div>
                        </div>

                        <div className="row">
                        {isFetching &&
                            <div className="col-12">
                                <Loading />
                            </div>
                        }
                            {moviesData.length > 0 && moviesData.map((movies, idx) => (
                                <CardItem key={idx} {...movies} showImg={handleChildClick}  />
                            ))}

                            <div className='col-12'>
                                {path(['Movies','movies','data','Response'],this.props) === "False" 
                                    ? notFoundMessage()
                                    : null }
                            </div>
                        </div>

                        <Modal data={modalImg} />

                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    const { Movies } = state
    return { Movies }
  }
  
export default connect(mapStateToProps)(Home)