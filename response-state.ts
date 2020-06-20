type ReadFileSuccess = {
  state: "success"
  name: string
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
    name,
  }
}

const result = readFile("foo.txt")
if (result.state === "success") {
  console.log("success reading", result.name, result.content)
} else {
  console.log("failed:", result.message)
}
