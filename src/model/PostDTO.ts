export interface PostInputDTO{
    photo:string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}