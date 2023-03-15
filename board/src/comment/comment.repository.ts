import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentRepository extends Repository<CommentEntity> {
  constructor(private readonly dataSource: DataSource) {
    const baseRepository = dataSource.getRepository(CommentEntity);
    super(
      baseRepository.target,
      baseRepository.manager,
      baseRepository.queryRunner,
    );
  }
}
