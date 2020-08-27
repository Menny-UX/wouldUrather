import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import {AppBar, Tabs, Tab, Typography,Box} from '@material-ui/core';

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
            <Typography>{children}</Typography>
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
        value : 0
    }
    render(){

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
                <Tab label="Not Answered" {...a11yProps(0)} />
                <Tab label="Answered" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
                <SwipeableViews
                    axis='x'
                    index={this.state.value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={this.state.value} index={0} >
                    Item One
                    </TabPanel>
                    <TabPanel value={this.state.value} index={1} >
                    Item Two
                    </TabPanel>
                </SwipeableViews>
            </div>
            </div>
        );
    }
}
 
export default Home;