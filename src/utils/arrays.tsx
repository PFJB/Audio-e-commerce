export function isEmpty(array: []) { return array.length === 0 }
export function deepCopyArray(array: []) { return JSON.parse(JSON.stringify(array)) }
