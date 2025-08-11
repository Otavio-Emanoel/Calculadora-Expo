import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors } from '../../constants/colors';

interface Props {
  label: string;
  type?: 'number' | 'operator' | 'action';
  flex?: number;
  onPress: () => void;
}

export const CalcButton: React.FC<Props> = ({ label, type = 'number', onPress, flex = 1 }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.base, styles[type], { flex }, pressed && styles.pressed]}>
      <Text style={[styles.text, type === 'operator' && styles.textOperator]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    height: 72,
    margin: 6,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonDark,
  },
  number: {
    backgroundColor: colors.buttonDark,
  },
  operator: {
    backgroundColor: colors.primary,
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
  pressed: {
    opacity: 0.65,
  }
});
