export function formatStampDate(isoDate: string): string {
  return isoDate.slice(0, 10).replaceAll('-', '·')
}
