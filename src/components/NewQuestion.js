import React, { Component } from 'react';
import { TextField,Typography, Button } from '@material-ui/core';
import { handleAddQuestion } from '../actions/questions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class NewQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: ''
    }
    render(){
        const {history} = this.props;

        const handleSubmit = ()=>{
            const {dispatch} = this.props;
            dispatch(handleAddQuestion(
                this.state.optionOneText,
                this.state.optionTwoText,
                this.props.authUser
            ))
            history.push('/')
        }
        const handleChange = (e)=>{
            const name = e.target.name;
            this.setState(
                {
                    ...this.state,
                    [name] : e.target.value
                }
            )
        }
        return (  <div className="center-item">
    <div className="question_details vertical">
      <Typography variant="h4" className="question_author">
              Create a new Question
      </Typography>
      <div className="question_description">
      <Typography variant="h6" color="primary">
              Would you rather ?
      </Typography>
      <TextField id="optionOne" label="Option One"
        value= {this.state.optionOneText}
        name="optionOneText"
        onChange= {(e)=>handleChange(e)}
      />
      <TextField id="optionTwo" label="Option Two" 
          value= {this.state.optionTwoText}
          name="optionTwoText"
          onChange= {(e)=>handleChange(e)}
      />

              <Button variant="contained" 
              size="small" 
              color="primary" 
              onClick={handleSubmit}>Submit</Button>
       
      </div>
  </div>
</div>

     );
    }
    
}

function mapStateToProps({ authUser }) {
    return {
		authUser
	};
}
 
 
export default withRouter(connect(mapStateToProps)(NewQuestion));