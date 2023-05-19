export function toQSString(params: any): string {
  const filteredParams: any = Object.fromEntries(
    Object.entries(params).filter(([_, value]) => value !== undefined)
  );

  return new URLSearchParams(filteredParams).toString();
}

type ObjectKeyValue = {
  [key: string]: any;
};

export function getAllObjectValue(o: ObjectKeyValue, name?: string) {
  const keys = Object.keys(o);
  return keys
    .filter((key) => (name ? !!o[key][name] : !!o[key]))
    .map((key) => (name ? o[key][name] : o[key]));
}
