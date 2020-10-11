import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import CircularProgress from '@material-ui/core/CircularProgress';
import Login from './Login';
import { Route, Switch , BrowserRouter as Router} from 'react-router-dom';
import PrivateRoute  from './privateRoute';
import Home from './Home';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import PageNotFound from './NotFound';
import Navbar from "./NavBar";

class App extends Component {
  
  componentDidMount() {
		this.props.dispatch(handleInitialData());
  }

  render() {
    const { authUser, loadingBar } = this.props;

    if(loadingBar.default === 1){

      return  <div className="center-item">
        <CircularProgress/>
      </div>
    }

    return (
      <Router>
           <Navbar/>
            <Switch>
                <Route path="/login" exact component={Login} />
                <PrivateRoute path="/" exact component={Home} auth={authUser} />
                <PrivateRoute path="/questions/:id" component={QuestionPage} auth={authUser}/>
                <PrivateRoute path="/add" component={NewQuestion} auth={authUser} />
                <PrivateRoute path="/leaderboard" component={LeaderBoard} auth={authUser}/>
                <Route path="/" component={PageNotFound} />
			</Switch>
        </Router>
    );

  }
}

function mapStateToProps({ authUser, loadingBar }) {
	return {
		authUser,
		loadingBar
	};
}
export default connect(mapStateToProps)(App);
