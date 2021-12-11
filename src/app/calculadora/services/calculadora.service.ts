/**
 * Serviço responsável por executar as operações da calculadora.
 * 
 * @author Juliano Sarnes Longo <longo.juliano@gmail.com>
 * @since 1.0.0
 */

import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {
  
  /* Define as constantes utilizadas para identificar as 
      operações de matemáticas. */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método calcular: tem como objetivo executar as operações matemáticas:
   * SOMA, SUBTRACAO, DIVISAO e MULTIPLICACAO.
   * 
   * @param num1 number
   * @param num2 number 
   * @param operacao string Operacao que será executada
   * @return number Resultado da operação.
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number; // armazena o resultado da operacao.

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }

}
