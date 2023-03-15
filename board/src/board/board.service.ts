import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { BoardRepository } from './board.repository';
import { BoardCreateDto } from './dto/board.create.dto';
import { Board } from './board.entity';

@Injectable()
export class BoardService {
  constructor(
    private boardRepository: BoardRepository,
    private dataSource: DataSource,
  ) {}

  async create(boardCreateDto: BoardCreateDto) {
    const { title, content } = boardCreateDto;
    const board: Board = new Board(title, content);

    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await this.boardRepository.save(board);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }
}
