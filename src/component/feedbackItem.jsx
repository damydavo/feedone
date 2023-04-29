import Card from "../shared/card";
import { FaTimes } from "react-icons/fa"

const FeedbackItem = ({ feedBack, handleDelete }) => {
    return (
        <Card>
            <div className="num-display">{feedBack.rating}</div>
            <button onClick={() => handleDelete(feedBack.id)} className="close"><FaTimes color="purple" /></button>
            <div className="text-display">{feedBack.text}</div>
        </Card>
    );
}

export default FeedbackItem;
