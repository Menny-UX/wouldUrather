import React from 'react';
import { Avatar, 
        Typography, 
        Divider, 
        Radio, 
        RadioGroup, 
        FormControlLabel, 
        FormControl,
        Button
} from '@material-ui/core';

const QuestionPoll = ({question, auther, user, answerPoll }) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return ( 
        <div className="center-item">
              <div className="question_details">
                <Typography variant="subtitle1" className="question_author">
                        {`${auther && auther.name} asks:`}
                </Typography>
                <div className="question_description">
                    <div className="auther_avatar">
                        <Avatar  alt={auther && auther.name} src={auther && auther.avatarURL}/>
                    </div>
                    <Divider orientation="vertical" flexItem />
                    <div className="question_snap_view">
                        <Typography variant="subtitle2" color="primary">WOULD YOU RATHER ?</Typography>
                        <FormControl component="fieldset">
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel value="optionOne" control={<Radio />} label={`${question && question.optionOne.text}`} />
                                <FormControlLabel value="optionTwo" control={<Radio />} label={`${question && question.optionTwo.text}`}/>
                            </RadioGroup>
                        </FormControl>
                        <Button variant="contained" 
                        size="small" 
                        color="primary" 
                        onClick={(qid, answer )=>{ answerPoll(`${question.id}` ,value) }}>Vote</Button>
                    </div>
                </div>
            </div>
        </div>
   );
}
 
export default QuestionPoll;