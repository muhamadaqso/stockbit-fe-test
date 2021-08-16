import { Component } from 'react';
import { fetchMovies } from '../../store/actions/omdb'
import { connect } from 'react-redux'
import { path } from 'ramda'
import CardItem from '../../components/CardItem';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            movieTitle: 'marvel',
            movies: []
        }
      }

      componentDidMount(){
        this.props.dispatch(fetchMovies(this.state.movieTitle));
      }

    render() {
    const notFoundMessage = () => <div class="alert alert-warning" role="alert">
    Oops... Movie Not Found!
  </div>
    const movies = path(['Movies','movies','data','Search'],this.props)

        return(
            <div className="home-page mt-5">
                <div className="container">
                        <div className="row mb-3">
                            <div className='col-12'>
                                <h3 className="title-border">Movie List</h3>
                            </div>
                        </div>

                        <CardItem movies={movies} />
                        <div className="row">
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