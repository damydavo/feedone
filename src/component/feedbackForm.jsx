import { useState } from "react";
import Card from "../shared/card";
import Button from './../shared/button';
import RatingSelect from './ratingSelect';

const FeedbackForm = ({ handleAdd }) => {
    const [rating, setRating] = useState(10)
    const [text, setText] = useState('')
    const [btnDisabled, setDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        if (text === '') {
            setDisabled(true)
            setMessage('')
        } else if (text !== '' && text.trim().length <= 10) {
            setDisabled(true)
            setMessage('Text must be greater than 10')
        } else {
            setMessage('')
            setDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedBack = {
                text,
                rating
            }

            handleAdd(newFeedBack)
            setText('')

        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us!</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleChange} type="text" name="text" value={text} placeholder="Please enter your message" />
                    <Button isDisabled={btnDisabled} type="submit">Send</Button>
                </div>
                {message && <div className="message">{message}</div>}

            </form>

        </Card>
    );
}

export default FeedbackForm;