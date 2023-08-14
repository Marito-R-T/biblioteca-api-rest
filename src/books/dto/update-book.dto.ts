import { User } from "src/users/user.entity"

export class UpdateBookDto {
  title?: string
  description?: string
  authorName?: string
  publicationDate?: string
  reservedByUser?: User
}