/**
 * Implementacao das funcionalidades do component Calculadora.
 * 
 * @author Juliano Sarnes Longo.
 * @since 1.0.0
 */

import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private operacao: string;
  private resultado: number;

  //a injecao de dependencia é feita na construtor
  constructor(private calculadoraService: CalculadoraService) { }

  //assim que estas classe é instanciada, tudo que está no método 'ngOnInit' é imediatamente executado.
  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicia todos os atributos da classe com um valor default.
   */
  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;
  }

  /**
   * Adiciona o numero selecionado para o cálculo que será feito posteriormente.
   * 
   * @param numero 
   */
  adicionarNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  /**
   * Retorna o numero concatenado. Trata o separador decimal .
   * 
   * @param numeroAtual 
   * @param numeroConcat 
   * @returns 
   */
  concatenarNumero(numeroAtual: string, numeroConcat: string): string {

    //caso tenha somente 0 ou null reinicia o numeroAtual.
    if (numeroAtual === '0' || numeroAtual === '') {
      numeroAtual = '';
    }

    // caso o primeiro digito seja '.' concatena 0 ao ponto.
    if ((numeroAtual === '.') && (numeroAtual.length === 0)) {
      return '0.';
    }

    // caso digita '.' e o ponto já exista apenas retorna, o indexOf procura o indice de    
    // um '.' se o indexOf retornar um numero igual ou maior que 0 significa que o '.' já existe.  
    if (numeroAtual === '.' && numeroAtual.indexOf('.') > -1) {
      return numeroAtual;
    }

    return numeroAtual + numeroConcat;
  }

  /**
   * Caso já exista uma operacao selecionada, executa a operacao anterior 
   * e define a nova operacao.
   * 
   * @param operacao
   */
   definirOperacao(operacao: string): void {
    // apenas define a operação caso não exista uma
  	if (this.operacao === null) {
      this.operacao = operacao;
      return;
  	}

    /* caso operação definida e número 2 selecionado,
       efetua o cálculo da operação */
  	if (this.numero2 !== null) {
  		this.resultado = this.calculadoraService.calcular(
  			parseFloat(this.numero1), 
  			parseFloat(this.numero2), 
  			this.operacao);
  		this.operacao = operacao;
  		this.numero1 = this.resultado.toString();
  		this.numero2 = null;
  		this.resultado = null;
  	}
  }

  /**
   * Efetua o calculo de uma operacao.
   * @return void
   */
  calcular(): void {

    if (this.numero2 === null) {
  		return;
  	}

    //só entra no comando abaixo se o this.numero2 for diferente de null.
    this.resultado = this.calculadoraService.calcular(
  		parseFloat(this.numero1), 
  		parseFloat(this.numero2), 
  		this.operacao);
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   * 
   * @returns string
   */
  get display(): string {

    //caso tenha o resultado exibe o resultado.
    if (this.resultado !== null) {
      return this.resultado.toString();
    }

    //caso tenha o numero2 significa que esta sendo digitado o 
    // valor do segundo numero para realizar a operacao.
    if (this.numero2 !== null) {
      return this.numero2;
    }

    //senao retorna o numero1 que está sendo digitado.
    return this.numero1;
  }

}
