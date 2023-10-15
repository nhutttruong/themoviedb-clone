export function toHour(durationMinute: string): string {
  let hours = Math.floor(parseInt(durationMinute) / 60);
  return `${hours}h${parseInt(durationMinute) - hours * 60}m`;
}
