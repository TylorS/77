export interface TimesArity2 {
  <A>(f: (n: number) => A, amount: number): ReadonlyArray<A>
  <A>(f: (n: number) => A): TimesArity1<A>
}

export interface TimesArity1<A> {
  (amount: number): ReadonlyArray<A>
}
