const arr = [1,"2",3, 4, 5]
console.log(arr)


const mapp = arr.map(x => x+2)
console.log(mapp)


const filterr = arr.filter(x => x >= 3)
console.log(filterr)


const reducee = arr.reduce((x1, x2) => x1 * x2)
console.log(reducee)