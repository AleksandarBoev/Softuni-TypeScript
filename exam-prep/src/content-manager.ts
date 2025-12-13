import {DetailedContent, findItemById} from "./content-types";
import {Viewer} from "./models";
import {NotifyOnSuccess} from "./decorators";

export class ContentManager {
    private contentItems: DetailedContent[];
    private viewers: Map<number, Viewer[]>;

    constructor() {
        this.contentItems = [];
        this.viewers = new Map();
    }

    public addContent(item: DetailedContent): string {
        this.contentItems.push(item);
        this.viewers.set(item.id, []);
        return `Content "${item.title}" (ID: ${item.id}) has been added.`
    }

    @NotifyOnSuccess('Email')
    public markAsWatched(contentId: number, viewer: Viewer) {
        if (!this.viewers.has(contentId)) {
            return `ERROR: Content with ID ${contentId} not found.`
        } else {
            this.viewers.get(contentId)!.push(viewer);
            return `Viewer ${viewer.name} marked content ID ${contentId} as watched.`
        }
    }

    public listAllContent(): string[] {
        return this.contentItems.map(item => item.getDetails());
    }

    public findContent(contentId: number): DetailedContent | undefined {
        return findItemById<DetailedContent>(this.contentItems, contentId);
    }
}