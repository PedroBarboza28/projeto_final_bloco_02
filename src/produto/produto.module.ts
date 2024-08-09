import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from '../categoria/categoria.module';
import { Produto } from './entities/produto.entity';
import { ProdutoController } from './controllers/produto.controller';
import { CategoriaService } from '../categoria/services/categoria.service';
import { ProdutoService } from './services/produto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
  controllers: [ProdutoController],
  providers: [ProdutoService, CategoriaService],
  exports: [TypeOrmModule],
})
export class ProdutoModule {}