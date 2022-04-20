/**
 * Performs a pipe operation of a vector of functions
 *
 * @param {...Array<any>} fns
 * @returns
 */
export function pipe(...fns: Array<any>) {
  return (x: any) => fns.reduce((v, f) => f(v), x);
}
