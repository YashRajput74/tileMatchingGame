import "./Card.css";

export default function Card({ card, onClick, isFlipped }) {
    const cardClasses = `card ${isFlipped ? "flipped" : ""} ${card.matched ? "matched" : ""}`;

    return (
        <div className={cardClasses} onClick={() => !card.matched && onClick(card)}>
            <div className="card-content">
                <div className="card-front">
                    {card.icon}
                </div>
                <div className="card-back"></div>
            </div>
        </div>
    );
}