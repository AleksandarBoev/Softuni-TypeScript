export enum ContentType {
    Movie = 'Movie',
    Series = 'Series',
    Documentary = 'Documentary'
}

export interface BaseContent extends HasId {
    title: string;
    releaseDate: Date;
    type: ContentType;
}

export interface Viewer {
    name: string;
    email: string;
}

export interface HasId {
    id: number;
}