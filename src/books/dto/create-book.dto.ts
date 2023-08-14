import { User } from "src/users/user.entity"

export class CreateBookDto {
  title: string
  description: string
  authorName: string
  publicationDate?: string
  reservedByUser?: User
}