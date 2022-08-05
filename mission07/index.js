const [a, b, c] = ["i", "am", "inevitable"]
const [d, e, f, ...g] = ["and", "i", "am", "iron", "man"]
const [h] = ["snap", "*flash*"] 

console.log(a, b, c)
console.log(d, e, f, g)
console.log(h)



const objs = {
    pro1 : "iron",
    pro2 : "man",
    pro3 : "thanos"
}

const {pro1, pro2, pro3 : obj1} = objs

console.log(pro1, pro2, obj1)