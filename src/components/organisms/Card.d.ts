export interface ICard {
    _id: string,
    title: string,
    description: string,
    createdAt: Date,
    src: string,
    alt?: string,
}