export function formatNumber(value: string | number): string {
  if (value === '') return '0';
  const num = typeof value === 'string' ? Number(value) : value;
  if (!Number.isFinite(num)) return 'Erro';
  return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 10 }).format(num);
}
