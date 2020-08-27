import React from 'react';
import { Route, Switch , BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import QuestionPage from './QuestionPage';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import PageNotFound from './NotFound';
import Navbar from "./NavBar";

const MainBody = () => {
    return ( 
        <Router>
           <Navbar/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/questions/:id" component={QuestionPage} />
                <Route path="/add" component={NewQuestion} />
                <Route path="/leaderboard" component={LeaderBoard} />
                <Route component={PageNotFound} />
			</Switch>
        </Router>
     );
}
 
export default MainBody;