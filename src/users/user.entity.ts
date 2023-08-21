import { Book } from '../books/book.entity'
import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm'

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true
  })
  username: string
  
  @Column()
  password: string
  
  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP'
  })
  createdAt: Date
  
  @Column({
    nullable: true
  })
  authStrategy: string

  @OneToMany(() => Book, book => book.reservedByUser)
  booksReserved: Book[]
}