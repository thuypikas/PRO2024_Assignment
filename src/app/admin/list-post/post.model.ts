export class Post {
    _id: number;
    content: String;
    author: String;
    key: string;
    comments: listComment[];
    date: Date;
    votes: number;
    attachments: listAttachments[];
}
export class listComment {
    _id: number;
    date: Date;
}
export class listAttachments {
    images: string;
    videos: string;
}
