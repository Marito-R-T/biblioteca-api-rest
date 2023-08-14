import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BooksService } from './books.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Book } from './book.entity';
import { UpdateBookDto } from './dto/update-book.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getBooks(): Promise<Book[]> {
    return this.bookService.getBooks();
  }

  @Get(':id')
  getBook(@Param('id', ParseIntPipe) id: number): Promise<Book> {
    return this.bookService.getBook(id);
  }
  
  @Post()
  createBook(@Body() newBook: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(newBook);
  }

  @Delete(':id')
  deleteBook(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
    return this.bookService.deleteBook(id);
  }

  @Patch(':id')
  updateBook(@Param('id', ParseIntPipe) id: number, @Body() book: UpdateBookDto): Promise<UpdateResult> {
    return this.bookService.updateBook(id, book);
  }
}
