import { useState } from 'react';
import { fetchCard, type ScryfallCard } from './services/api';

function App() {
    const [cardName, setCardName] = useState<string>('');
    const [cardData, setCardData] = useState<ScryfallCard | null>(null);

    const handleSearch = async () => {
        const result = await fetchCard(cardName);
        setCardData(result);
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>MTG Card Search</h1>

            <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="Enter card name"
            />
            <button onClick={handleSearch}>Search</button>

            {cardData && (
                <div style={{ marginTop: '1rem' }}>
                    <h2>{cardData.name}</h2>
                    {cardData.image_uris && (
                        <img src={cardData.image_uris.normal} alt={cardData.name} />
                    )}
                </div>
            )}
        </div>
    );
}

export default App;