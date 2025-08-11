import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import { formatNumber } from '../utils/format';

interface Props {
  value: string;
  previous?: string | null;
  operator?: string | null;
  error?: string | null;
}

export const Display: React.FC<Props> = ({ value, previous, operator, error }) => {
  const expression = previous && operator ? `${previous} ${operator}` : '';
  return (
    <View style={styles.container}>
      {expression ? <Text style={styles.expression} numberOfLines={1}>{expression}</Text> : null}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Text style={styles.value} numberOfLines={1} adjustsFontSizeToFit>{formatNumber(value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 140,
    paddingHorizontal: 20,
    paddingVertical: 28,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: colors.displayBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.buttonOutline,
    shadowColor: '#000',
    shadowOpacity: 0.45,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  expression: {
    alignSelf: 'flex-end',
    fontSize: 18,
    color: colors.textFaded,
    marginBottom: 4,
    fontWeight: '400'
  },
  value: {
    fontSize: 68,
    color: colors.textPrimary,
    fontWeight: '200',
    letterSpacing: 1
  },
  error: {
    position: 'absolute',
    top: 10,
    right: 16,
    color: colors.danger,
    fontSize: 14,
    fontWeight: '600'
  }
});
