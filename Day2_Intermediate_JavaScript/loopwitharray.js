var arr = [1, 2, 3, 4, 5]

//how to loop an array
arr.forEach(function (val)
{
    console.log(val)
})

//how to loop an array and do something with each element
arr.forEach(function (val)
{
    console.log(val + 1)
})

arr2 = [1, 2, 98, 96, 4, 9]
//find max
var max = null;
arr2.forEach(function(value)
{
    if(max < value) max = value
})

console.log(max)
