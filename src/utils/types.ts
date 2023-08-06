export interface Game {
    title: string;
    image: string;
    link?: string;    
}

export interface GameSection {
    id: number;
    title: string;
    description: string;
    games: Game[];
}