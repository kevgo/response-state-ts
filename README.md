# Response State pattern in TypeScript

This repo demonstrates using
[Discriminating Union Types](https://www.typescriptlang.org/v2/docs/handbook/unions-and-intersections.html#discriminating-unions)
in TypeScript to implement the Response-State pattern with typesystem support in
TypeScript.

To avoid this being too much like checked exceptions, response states should
only be used for valid response types that we want to handle, not every possible
error scenario. It might make sense to distinguish user errors from internal
errors.

Pros:

- typechecking support
- forces checking of options before using results

Cons:

- defining the types for the various responses requires substantial amounts of
  boilerplate
- does not enforce checking all options
- not idiomatic: other code doesn't work this way, have to convert back and
  forth when calling external code
- in 99% of the success cases there is only one useful type of result
- in 95% of the error cases there isn't much we can do except bubble up, print
  an error message, and die
