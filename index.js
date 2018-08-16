// Add your functions and code here
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {

  var temp = [name]
  kittens = kittens.concat(temp)
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