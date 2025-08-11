import { useCallback, useState } from 'react';
import type { CalculatorState, Operator } from '../types/calculator';

const initialState: CalculatorState = {
  currentValue: '0',
  previousValue: null,
  operator: null,
  overwrite: false,
  error: null,
};

export function useCalculator() {
  const [state, setState] = useState<CalculatorState>(initialState);

  const inputDigit = useCallback((digit: string) => {
    setState(s => {
      if (s.overwrite) {
        return { ...s, currentValue: digit, overwrite: false };
      }
      if (s.currentValue === '0' && digit === '0') return s; 
      if (s.currentValue === '0' && digit !== '0') {
        return { ...s, currentValue: digit };
      }
      if (s.currentValue.length >= 16) return s; 
      return { ...s, currentValue: s.currentValue + digit };
    });
  }, []);

  const inputDot = useCallback(() => {
    setState(s => {
      if (s.overwrite) {
        return { ...s, currentValue: '0.', overwrite: false };
      }
      if (s.currentValue.includes('.')) return s;
      return { ...s, currentValue: s.currentValue + '.' };
    });
  }, []);

  const clearAll = useCallback(() => setState(initialState), []);

  const toggleSign = useCallback(() => {
    setState(s => ({ ...s, currentValue: s.currentValue.startsWith('-') ? s.currentValue.slice(1) : '-' + s.currentValue }));
  }, []);

  const percent = useCallback(() => {
    setState(s => ({ ...s, currentValue: String(Number(s.currentValue) / 100) }));
  }, []);

  const setOperator = useCallback((op: Operator) => {
    setState(s => {
      if (s.operator && !s.overwrite) {
        // encadeia operação
        const result = computeResult(s);
        return { currentValue: result, previousValue: result, operator: op, overwrite: true, error: null };
      }
      return { ...s, operator: op, previousValue: s.currentValue, overwrite: true };
    });
  }, []);

  const computeResult = (s: CalculatorState) => {
    const a = Number(s.previousValue);
    const b = Number(s.currentValue);
    if (!s.operator || s.previousValue == null) return s.currentValue;
    let r: number;
    switch (s.operator) {
      case '+': r = a + b; break;
      case '-': r = a - b; break;
      case '×': r = a * b; break;
      case '÷':
        if (b === 0) return 'Erro';
        r = a / b; break;
      case '%': r = a % b; break;
      default: return s.currentValue;
    }
    return String(r);
  };

  const equals = useCallback(() => {
    setState(s => {
      if (!s.operator || s.previousValue == null) return s;
      const result = computeResult(s);
      return { currentValue: result, previousValue: null, operator: null, overwrite: true, error: result === 'Erro' ? 'Divisão por zero' : null };
    });
  }, []);

  return {
    state,
    actions: { inputDigit, inputDot, clearAll, toggleSign, percent, setOperator, equals }
  };
}
