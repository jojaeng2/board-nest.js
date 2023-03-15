import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CommentRepository } from './comment.repository';

@Injectable()
export class CommentService {
  constructor(
    private commentRepository: CommentRepository,
    private dataSource: DataSource,
  ) {}
}
