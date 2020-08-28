import React from 'react';
import {Avatar, Button, Typography, Divider} from '@material-ui/core';
import {Link} from 'react-router-dom';

const QuestionBrief = ({question, auther}) => {
  
    return ( 
        <div className="question_brief">
            <Typography variant="subtitle1" className="question_author">
                    {`${auther.name} asks:`}
            </Typography>
            <div className="question_description">
                <div className="auther_avatar">
                    <Avatar  alt={auther.name} src={auther.avatarURL}/>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="question_snap_view">
                    <Typography variant="subtitle2" color="primary">WOULD YOU RATHER ?</Typography>
                    <div className="ellipsis">
                        {question.optionOne.text}
                    </div>
                    <Link to={`/questions/${question.id}`}>
                        <Button  size="small" variant="contained" color="primary" >
                            View Poll 
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default QuestionBrief;