export function updateObjectSubproperty(state: { [key: string]: any }, property: string, subproperty: string, value: any): any {
  return {
    ...state,
    [property]: { ...state[property], [subproperty]: value }
  }
}