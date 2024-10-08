import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
  import { ProdutoService } from '../services/produto.service';
  import { Produto } from '../entities/produto.entity';
  
  @Controller('/produtos')
  export class ProdutoController {

    constructor(private readonly produtoService: ProdutoService) { }
  
    @Get()
    @HttpCode(HttpStatus.OK) // Http Status 200
    findAll(): Promise<Produto[]> {
      return this.produtoService.findAll();
    }
  
    @Get('/:id')
    @HttpCode(HttpStatus.OK) // Http Status 200
    findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
      return this.produtoService.findById(id);
    }
  
    @Get('/nome/:nome')
    @HttpCode(HttpStatus.OK) // Http Status 200
    findByTipo(@Param('nome') nome: string): Promise<Produto[]> {
      return this.produtoService.findByNome(nome);
    }
  
    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED) // Http Status 201
    create(@Body() produto: Produto): Promise<Produto> {
      return this.produtoService.create(produto);
    }
  
    @Put('/atualizar')
    @HttpCode(HttpStatus.OK) // Http Status 200
    update(@Body() produto: Produto): Promise<Produto> {
      return this.produtoService.update(produto);
  
    }
  
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT) // Http Status 204
    delete(@Param('id', ParseIntPipe) id: number) {
      return this.produtoService.delete(id);
    }
  
  }