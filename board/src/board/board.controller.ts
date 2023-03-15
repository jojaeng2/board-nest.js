import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardCreateDto } from './dto/board.create.dto';

@Controller('board')
export class BoardController {
  constructor(private boardService: BoardService) {}

  @Get()
  getHello(): string {
    return 'Hello boardController!';
  }

  @Post()
  async create(@Body() boardCreateDto: BoardCreateDto) {
    await this.boardService.create(boardCreateDto);
    return;
  }
}
