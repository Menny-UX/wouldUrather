import React, {Component} from 'react';
import {Typography, Divider, FormControl, Select,InputLabel, MenuItem} from '@material-ui/core';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { setAuthedUser } from '../actions/users';

class Login extends Component {

    state = {
        selectedUser : ''
    }

    render(){
        const { users, history } = this.props;
        const {from} = this.props.location.state || {from: {pathname: '/'}}
        
        const handleChange = (event) => {
            this.setState({
                selectedUser : event.target.value
            })
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            
            const {dispatch} = this.props;
            const user = this.state.selectedUser;

            dispatch(setAuthedUser(user));
            history.push(from)
        };

        return ( 
            <div className="center-item">
                <div className="login_Wrapper">
                    <Typography variant="h4" color="primary" style={{fontWeight:"bolder"}}  gutterBottom>
                        Welcome to the Would U Rather App!
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        Sign IN
                    </Typography>
                <Divider />
                <FormControl >
                <InputLabel id="demo-simple-select-label">User Name</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="AuthUser"
                    value= {this.state.selectedUser}
                    onChange={handleChange}
                    
                    style={{width:'100%'}}
                    >
                    {
                            Object.keys(users).map((id)=>{
                                return <MenuItem key={id} value={id}> {users[id].name} </MenuItem>
                            })
                    }
                </Select>
                </FormControl>
                <Button variant="contained" color="secondary" onClick={handleSubmit}>
                        Login
                </Button>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
		users
	};
}
 
export default connect(mapStateToProps)(Login);