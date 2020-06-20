# Response State pattern in TypeScript

This repo demonstrates using
[Discriminating union types](https://www.typescriptlang.org/v2/docs/handbook/unions-and-intersections.html#discriminating-unions)
in TypeScript to implement the Response-State pattern with typesystem support in
TypeScript.

To avoid this being too much like checked exceptions, response states should
only be used for valid response types that we want to handle, not every possible
error scenario. It might make sense to distinguish user errors from internal
errors.

Pros:

- typechecking support
- forces checking of options before being able to use results

Cons:

- boilerplate to define the types for the various responses
- in 95% of the cases, there isn't much we can do in an error case except bubble
  up, print error message, and die
- does not enforce checking all options
- not idiomatic: other code doesn't work this way, have to convert back and
  forth when calling external code
