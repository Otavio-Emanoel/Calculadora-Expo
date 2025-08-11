import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/colors';

interface Props {
  label: string;
  type?: 'number' | 'operator' | 'action';
  flex?: number;
  active?: boolean; // para operador selecionado
  onPress: () => void;
}

export const CalcButton: React.FC<Props> = ({ label, type = 'number', onPress, flex = 1, active }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        styles[type],
        { flex },
        active && type === 'operator' && styles.operatorActive,
        pressed && styles.pressed
      ]}
    >
      <Text style={[
        styles.text,
        type === 'operator' && styles.textOperator,
        active && type === 'operator' && styles.textOperatorActive
      ]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    height: 74,
    margin: 6,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonDark,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  number: {
    backgroundColor: colors.buttonDark,
  },
  operator: {
    backgroundColor: colors.primary,
  },
  operatorActive: {
    backgroundColor: colors.operatorActive,
    shadowColor: colors.primary,
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 8,
    borderColor: colors.primaryAlt,
  },
  action: {
    backgroundColor: colors.buttonLight,
  },
  text: {
    fontSize: 28,
    color: colors.textPrimary,
    fontWeight: '500'
  },
  textOperator: {
    color: '#fff',
  },
  textOperatorActive: {
    fontWeight: '700',
    letterSpacing: 1,
  },
  pressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.85,
  }
});
