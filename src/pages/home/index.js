import React from 'react';
import { Component } from 'react';
import { fetchMovies } from '../../store/actions/omdb'
import { connect } from 'react-redux'
import { path } from 'ramda'
import CardItem from '../../components/CardItem';
import emptyImg from '../../assets/img/empty-img.jpeg';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            movieTitle: 'marvel',
            moviePage: 1,
            moviesData: [],
            isFetching: true,
            isResponse: true,
            modalImg: ''
        }
      }

      isBottom(el) {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
      }

      componentDidMount(){
        document.addEventListener('scroll', this.trackScrolling);
        this.fetchMoviesData();
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
        this.setState({isFetching: true});
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
    const {moviesData, modalImg} = this.state

    const handleChildClick = (val) => { 
        this.setState({modalImg : val});
      };

        return(
            <div className="home-page mt-5 mb-5 pb-5" id="homePage">
                <div className="container">
                        <div className="row mb-3">
                            <div className='col-12'>
                                <h3 className="title-border">Movie List</h3>
                            </div>
                        </div>

                        <div className="row">
                            {moviesData.length > 0 && moviesData.map((movies, idx) => (
                                <CardItem key={idx} {...movies} showImg={handleChildClick}  />
                            ))}

                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Image Detail</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <img className="w-100" 
                                        src={modalImg && modalImg!== 'N/A'?modalImg:emptyImg} alt="detail image" />
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12'>
                                {path(['Movies','movies','data','Response'],this.props) === "False" 
                                    ? notFoundMessage()
                                    : null }
                            </div>
                        </div>
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