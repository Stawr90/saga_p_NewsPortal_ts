export enum InputItems {
    USER_NAME = 'username',
    PASSWORD = 'password'
}

export interface IStateNews {
    news: any[];
    newsLoadingStatus: 'idle' | 'loading' | 'succeeded' | 'error';
    newsCard: {img: string; title: string; date: string | number; timer: number; descr: string} | null;
}

export interface IFormData {
    username: string;
    password: string;
}

export interface ICounter {
    found: number | string;
}

export interface INews {
    id: number;
    img: string;
    title: string;
    genre: string;
    date: number | string;
}

export type TNews = {
    news: INews;
}
