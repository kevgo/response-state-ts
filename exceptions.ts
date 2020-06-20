export {} // needed to enforce package isolation

function readFile(name: string): string {
  return "the content"
}

try {
  const result = readFile("foo.txt")
  console.log("success reading", result)
} catch (e) {
  console.log("failed:", e.message)
}
