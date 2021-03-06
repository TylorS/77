/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array.
 */
export interface LastIndexOfArity2 {
  <A>(a: A, list: Array<A>): number | void
  <A>(a: A, list: ArrayLike<A>): number | void
  <A>(a: A, list: ReadonlyArray<A>): number | void

  <A>(a: A): LastIndexOfArity1<A>
}

export interface LastIndexOfArity1<A> {
  (list: Array<A>): number | void
  (list: ArrayLike<A>): number | void
  (list: ReadonlyArray<A>): number | void
}
