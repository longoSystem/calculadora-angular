/**
 * O objetivo deste código 'calculadora.service.ts' é aplicar teste unitário com o Jasmine,
 * e assim poder garantir que as regras de negócio implementadas são funcinando corretamente.
 * 
 * @author Juliano Sarnes Longo <longo.juliano@gmail.com>
 * @since 1.0.0
 */

import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  /*
    Importante sempre verificar se o provider está configurado, nesse caso:
    TestBed.configureTestingModule({
      providers: [CalculadoraService] // linha adicionada manualmente.
    });
  */
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * No primeiro parametro da funcao: it você deve informar sempre o que o teste faz:
   * portanto a primeira palavra a ser escrita pode ser: DEVE ou DEVERIA, indicando 
   * o que o teste deve fazer.
   * 
   * o 'inject' é um recurso do angular que fornece uma instancia do servico 
   * CalculadoraService.  
   * 
   */
  it('DEVE garantir que: 4 + 1 = 5', 
    // na linha abaixo o inject cria uma instancia do CalculadoraService e atribui essa instancia na variavel service
    inject([CalculadoraService], (service: CalculadoraService) => {
      //abaixo: cria-se a variavel local soma e atribui o resultado do servico de SOMA fornecido pela CalculadoraService.
      let soma = service.calcular(4, 1, CalculadoraService.SOMA); 
      expect(soma).toEqual(5);
    })
  );

  it('DEVE garantir que: 3 - 2 = 1', 
    // na linha abaixo o inject cria uma instancia do CalculadoraService e atribui essa instancia na variavel service
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtracao = service.calcular(3, 2, CalculadoraService.SUBTRACAO);
      expect(subtracao).toEqual(1);
    } )
  );

  it('DEVE garantir que: 1 / 4 = 0.25', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let divisao = service.calcular(1, 4, CalculadoraService.DIVISAO);
      expect(divisao).toEqual(0.25);
    })
  );

  it('DEVE garantir que: 3 * 3 = 9', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicacao = service.calcular(3, 3, CalculadoraService.MULTIPLICACAO);
      expect(multiplicacao).toEqual(9);
    })
  );

  it('DEVE retornar 0 para operacoes inválidas', 
    inject([CalculadoraService], (service: CalculadoraService) => {
      let resultado = service.calcular(1, 2, '%');
      expect(resultado).toEqual(0);
    })
  );

});
