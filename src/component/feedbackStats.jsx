const FeedbackStats = ({ feedBack }) => {
    let average = feedBack.reduce((acc, curVal) => {
        return acc + curVal.rating;
    }, 0) / feedBack.length

    average = average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className="feedback-stats">
            <h4>{feedBack.length} Reviews</h4>
            <h4>average rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
}

export default FeedbackStats;