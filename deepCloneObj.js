let student = { name: "Alice", hobbies: ["reading", "traveling"] }

let studentCopy= student.hobbies.push("codeing")
studentCopy = JSON.parse(JSON.stringify(student))

console.log(studentCopy)

