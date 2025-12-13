import {BaseContent, ContentType, HasId} from "./models";

export abstract class DetailedContent implements BaseContent {
    private readonly _id!: number;
    private readonly _title!: string;
    private readonly _releaseDate!: Date;
    #type!: ContentType

    constructor(id: number, title: string, releaseDate: Date, type: ContentType) {
        this._id = id;
        this._title = title;
        this._releaseDate = releaseDate;
        this.#type = type;
    }

    public abstract getDetails(): string;

    get id(): number {
        return this._id;
    }

    get releaseDate(): Date {
        return this._releaseDate;
    }

    get title(): string {
        return this._title;
    }

    get type(): ContentType {
        return this.#type;
    }

    private set type(type: string) {
        throw new Error('Content type is immutable')
    }

    protected getReleaseDateInWantedFormat(): string {
        return `${this.formatDate(this._releaseDate.getDate())}/${this.formatDate(this._releaseDate.getMonth() + 1)}/${this._releaseDate.getFullYear()}`
    }

    private formatDate(dateNumber: number): string {
        if (dateNumber < 10) {
            return '0' + dateNumber;
        } else {
            return '' + dateNumber;
        }
    }
}

export class Movie extends DetailedContent {
    constructor(id: number, title: string, releaseDate: Date, private readonly director: string) {
        super(id, title, releaseDate, ContentType.Movie);
        this.director = director;
    }

    public getDetails(): string {
        return `[${this.type}] "${this.title}" directed by ${this.director} (Released: ${super.getReleaseDateInWantedFormat()})`;
    }
}

export class Series extends DetailedContent {
    constructor(id: number, title: string, releaseDate: Date, private readonly platformUrl: string) {
        super(id, title, releaseDate, ContentType.Series);
        this.platformUrl = platformUrl;
    }

    public getDetails(): string {
        return `[${this.type}] "${this.title}" (Released: ${super.getReleaseDateInWantedFormat()}), available at: ${this.platformUrl}`;
    }
}

export function findItemById<T extends HasId>(items: T[], id: number): T | undefined {
    return items.find((item) => item.id === id);
}
