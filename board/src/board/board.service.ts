import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {
  constructor(
    private boardRepository: BoardRepository,
    private dataSource: DataSource,
  ) {}
}
