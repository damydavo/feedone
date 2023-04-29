import FeedbackItem from './feedbackItem';
// import { motion, AnimatePresence } from "framer-motion"


const FeedbackList = ({ feedBacks, handleDelete }) => {
    return (

        feedBacks.map(feedBack => {
            return (
                <FeedbackItem key={feedBack.id} feedBack={feedBack} handleDelete={handleDelete} />
            )
        })
    );
}

export default FeedbackList;