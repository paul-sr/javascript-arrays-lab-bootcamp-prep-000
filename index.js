// Add your functions and code here
kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  kittens = kittens.push(name)
  return kittens
}
function destructivelyPrependKitten(name) {
  kittens = kittens.unshift(name)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens = kittens.pop()
  return kittens
}
function appendKitten(name) {
  return kittens.push(name)
}