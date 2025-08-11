export type Operator = '+' | '-' | '×' | '÷' | '%';

export interface CalculatorState {
  currentValue: string; // número sendo digitado
  previousValue: string | null; // valor anterior
  operator: Operator | null; // operador selecionado
  overwrite: boolean; // se o próximo dígito substitui o currentValue
  error?: string | null; // mensagem de erro (ex: divisão por zero)
}
