export interface Book {
    id: string,
    volumeInfo: {
        authors: string[],
        categories: string[],
        description: string,
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string
        },
        industryIdentifiers: {
            type: string,
            identifier: string
        }[],
        language: string,
        pageCount: number,
        publishedDate: string,
        publisher: string,
        subtitle: string,
        title: string,
    }
}

export interface BookList {
    items: Book[];
    totalItems: number;
}