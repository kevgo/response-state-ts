export {} // needed to enforce package isolation

type ReadFileSuccess = {
  state: "success"
  content: string
}
type UserError = {
  state: "error"
  message: string
}
type ReadFileResult = ReadFileSuccess | UserError

function readFile(name: string): ReadFileResult {
  return {
    state: "success",
    content: "the content",
  }
}

// run an operation that returns a response state
const result = readFile("foo.txt")

// evaluate the result
if (result.state === "success") {
  // here result has type ReadFileSuccess
  console.log("success reading", result.content)
} else {
  // here result has type UserError
  console.log("failed:", result.message)
}

// the same thing but using a switch statement
switch (result.state) {
  case "success":
    // here result has type ReadFileSuccess
    console.log("success reading", result.content)
    break
  case "error":
    // here result has type UserError
    console.log("failed:", result.message)
    break
}
