import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Produto } from './produto/entities/produto.entity';

@Module({
  imports: [

    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '.753159Tata.',
    database: 'db_farmacia',
    entities: [Categoria, Produto],
    synchronize: true,
}),
CategoriaModule,
ProdutoModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
