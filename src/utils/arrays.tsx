export function isEmpty(array: []) { return array.length === 0 }
export function deepCopyArray(ll: unknown[]) { return JSON.parse(JSON.stringify(ll)) }
