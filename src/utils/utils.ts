export function toQSString(params: any): string {
  const filteredParams: any = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== undefined)
  );

  return new URLSearchParams(filteredParams).toString();
}
