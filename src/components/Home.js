import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { connect } from 'react-redux';
import QuestionBrief from './QuestionBrief';
import {AppBar, Typography, Tabs, Tab,Box} from '@material-ui/core';
// import TypographyNew from './typography';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography component={'div'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  

class Home extends Component {
    state = {
        value : 1
    }
    render(){
        const {questions, authUser, users} = this.props;
        let answeredQues = [];
        let notAnsweredQues = [];
        
        Object.keys(questions).forEach((id)=>{
            const ques = questions[id];
            if( 
                (ques.optionOne && ques.optionOne.votes.includes(authUser))  ||
                (ques.optionTwo && ques.optionTwo.votes.includes(authUser))
            ){
                answeredQues.push(ques);
            }
            else{
                notAnsweredQues.push(ques);
            }

        })

        notAnsweredQues.sort((a,b) => (b.timestamp - a.timestamp))
        answeredQues.sort((a,b) => (b.timestamp - a.timestamp))
        
        const handleChange = (event, newValue) => {
            this.setState({value: newValue});
        };

        const handleChangeIndex = (index) => {
            this.setState({value: index});
        };

        return (  <div className="home-root">
        <div className="home-container">
            <AppBar position="static" color="default">
                <Tabs
                value={this.state.value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="fullWidth"
                aria-label="full width tabs example"
                >
                <Tab label="Answered" {...a11yProps(0)} />
                <Tab label="Not Answered" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
                <SwipeableViews
                    axis='x'
                    index={this.state.value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={this.state.value} index={0} >
                        <div className="List_container">
                        {
                            answeredQues.map((q,indx)=> <QuestionBrief key={`${q.auther}-${indx}`} question={q} auther={users[q.author]}/>)
                        }   
                        </div>
                    </TabPanel>
                    <TabPanel value={this.state.value} index={1} >
                        <div className="List_container">
                        {
                            notAnsweredQues.map((q,indx)=> <QuestionBrief key={`${q.auther}-${indx}`} question={q} auther={users[q.author]}/>)
                        }
                        </div>
                    </TabPanel>
                </SwipeableViews>
            </div>
            </div>
        );
    }
}
function mapStateToProps({ authUser, questions ,users}) {
	return {
		authUser,
        questions,
        users
	};
}
export default connect(mapStateToProps)(Home);