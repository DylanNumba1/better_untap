import axios from 'axios';

export interface ScryfallCard {
    name: string;
    image_uris?: {
        normal: string;
        [key: string]: string;
    };
    [key: string]: any;
}

export async function fetchCard(cardName: string): Promise<ScryfallCard | null> {
    try {
        const response = await axios.get<ScryfallCard>(
            `http://127.0.0.1:8000/decks/card/${cardName}`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching card:', error);
        return null;
    }
}