import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import CircularProgress from '@material-ui/core/CircularProgress';
import Login from './Login';
import Home from './Home';

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

    return (<Fragment>  
      { !authUser? <Login/> : <Home/>} 
        </Fragment>
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
