import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Display } from '../../components/Display';
import { CalcButton } from '../../components/buttons/CalcButton';
import { useCalculator } from '../../hooks/useCalculator';
import { colors } from '../../constants/colors';

export const CalculatorScreen: React.FC = () => {
  const { state, actions } = useCalculator();

  return (
    <SafeAreaView style={styles.root}>
      <Display value={state.currentValue} previous={state.previousValue} operator={state.operator} error={state.error} />
      <View style={styles.pad}>
        <View style={styles.row}>
          <CalcButton label="C" type="action" onPress={actions.clearAll} />
          <CalcButton label="±" type="action" onPress={actions.toggleSign} />
          <CalcButton label="%" type="action" onPress={actions.percent} />
          <CalcButton label="÷" type="operator" active={state.operator === '÷'} onPress={() => actions.setOperator('÷')} />
        </View>
        <View style={styles.row}>
          <CalcButton label="7" onPress={() => actions.inputDigit('7')} />
          <CalcButton label="8" onPress={() => actions.inputDigit('8')} />
          <CalcButton label="9" onPress={() => actions.inputDigit('9')} />
          <CalcButton label="×" type="operator" active={state.operator === '×'} onPress={() => actions.setOperator('×')} />
        </View>
        <View style={styles.row}>
          <CalcButton label="4" onPress={() => actions.inputDigit('4')} />
          <CalcButton label="5" onPress={() => actions.inputDigit('5')} />
          <CalcButton label="6" onPress={() => actions.inputDigit('6')} />
          <CalcButton label="-" type="operator" active={state.operator === '-'} onPress={() => actions.setOperator('-')} />
        </View>
        <View style={styles.row}>
          <CalcButton label="1" onPress={() => actions.inputDigit('1')} />
          <CalcButton label="2" onPress={() => actions.inputDigit('2')} />
          <CalcButton label="3" onPress={() => actions.inputDigit('3')} />
          <CalcButton label="+" type="operator" active={state.operator === '+'} onPress={() => actions.setOperator('+')} />
        </View>
        <View style={styles.row}>
          <CalcButton label="0" flex={2} onPress={() => actions.inputDigit('0')} />
          <CalcButton label="," onPress={actions.inputDot} />
          <CalcButton label="=" type="operator" onPress={actions.equals} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.background },
  pad: { flex: 1, paddingHorizontal: 4, paddingBottom: 12, justifyContent: 'flex-end' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 4 }
});
