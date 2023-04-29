const Card = ({ children, reverse }) => {
    return (
        // <div className={`card ${reverse && 'reverse'}`}>{children}</div>

        <div className="card" style={{ background: reverse ? 'rgba(0,0,0,0.4)' : '#fff', color: reverse ? '#fff' : '' }}>{children}</div>
    );
}

Card.defaultProps = {
    reverse: false
}
export default Card;