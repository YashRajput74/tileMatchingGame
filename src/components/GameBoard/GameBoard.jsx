import { useState } from "react";
import Card from "../Card/Card";
import "./GameBoard.css"


const icons = [
    "🍎", "🍌", "🍇", "🍉", "🍓", "🍍", "🥝", "🍑", "🍒",
    "🍋", "🍊", "🍈", "🥥", "🍏", "🥭", "🍐", "🍅", "🌽"
];

function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

const generateCards = () => {
    const paired = icons.flatMap((icon, index) => [
        { id: index * 2, icon, matched: false },
        { id: index * 2 + 1, icon, matched: false }
    ]);
    return shuffle(paired);
};


export default function GameBoard() {
    const [cards, setCards] = useState(generateCards());
    const [flippedCards, setFlippedCards] = useState([]);
    const restartGame = () => {
        setCards(generateCards());
        setFlippedCards([]);
    };

    const handleClick = (card) => {
        if (flippedCards.length === 2 || flippedCards.includes(card.id)) return;

        const newFlipped = [...flippedCards, card.id];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            const [firstId, secondId] = newFlipped;
            const firstCard = cards.find(c => c.id === firstId);
            const secondCard = cards.find(c => c.id === secondId);

            if (firstCard.icon === secondCard.icon) {
                setCards(prev =>
                    prev.map(c =>
                        c.icon === firstCard.icon ? { ...c, matched: true } : c
                    )
                );
            }

            setTimeout(() => {
                setFlippedCards([]);
            }, 1000);
        }
    };

    return (
        <>
            <button className="restart-btn" onClick={restartGame}>Restart</button>
            <div className="game-board">
                {
                    cards.map((card) =>
                        <Card key={card.id} card={card} onClick={handleClick} isFlipped={flippedCards.includes(card.id) || card.matched} />
                )
            }
            </div>
        </>
    )
}