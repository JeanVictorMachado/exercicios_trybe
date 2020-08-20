const assert = require('assert')

// escreva greet abaixo
const greet = (name, msg = "Hi") => `${msg} ${name}`

assert.equal(greet("John"), "Hi John")
assert.equal(greet("John", "Good morning"), "Good morning John")
assert.equal(greet("Isabela", "Oi"), "Oi Isabela")