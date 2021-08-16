import { Component } from 'react';
import { fetchMovies } from '../../store/actions/omdb'
import { connect } from 'react-redux'

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

        return(
            <div className="home-page">

            </div>
        )
    }

}

const mapStateToProps = state => {
    const { Movies } = state
    return { Movies }
  }
  
export default connect(mapStateToProps)(Home)