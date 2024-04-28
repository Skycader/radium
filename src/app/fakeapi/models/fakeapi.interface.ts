export interface FakeApiStateInterface {
  currentCommentId: number | null
  currentComment: CommentInterface | null
}

export interface CommentInterface {
  name: string
  body: string
}
