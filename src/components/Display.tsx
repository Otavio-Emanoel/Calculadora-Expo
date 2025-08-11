import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import { formatNumber } from '../utils/format';

interface Props {
  value: string;
  error?: string | null;
}

export const Display: React.FC<Props> = ({ value, error }) => {
  return (
    <View style={styles.container}>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Text style={styles.value} numberOfLines={1} adjustsFontSizeToFit>{formatNumber(value)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 120,
    paddingHorizontal: 16,
    paddingVertical: 24,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: colors.displayBackground,
    borderBottomWidth: 1,
    borderBottomColor: '#222'
  },
  value: {
    fontSize: 64,
    color: colors.textPrimary,
    fontWeight: '200'
  },
  error: {
    position: 'absolute',
    top: 8,
    right: 12,
    color: colors.danger,
    fontSize: 14
  }
});
