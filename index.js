// Add your functions and code here
var kittens = ["Milo","Otis","Garfield"]

function destructivelyAppendKitten(name) {
  var temp = [name]
  kittens = kittens.concat(temp)
  return kittens
}
function destructivelyPrependKitten(name) {
  var temp = [name]
  kittens = temp.concat(kittens)
  return kittens
}
function destructivelyRemoveLastKitten() {
  kittens = kittens.slice(0,kittens.length-1)
  return kittens
}
function appendKitten(name) {
  return kittens.push(name)
}