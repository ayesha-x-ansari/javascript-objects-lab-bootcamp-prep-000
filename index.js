var recipes = {}

var obj = { prop: 1 }
key  = 'prop2'
value = 2
function updateObjectWithKeyAndValue(obj, key, value) {
   Object.assign({}, obj, { [key]: value })
   return Object
}
var obj = { prop: 1 }
var key = 'prop2'
var value = 2

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}
