var recipes = {}

var obj = { prop: 1 }
prop_2  = 'prop2'
value_2 = 2
function updateObjectWithKeyAndValue(obj, prop_2, value_2) {
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
