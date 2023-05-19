export function toQSString(params: any): string {
  return new URLSearchParams(params).toString();
}
