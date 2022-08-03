let a = 0
while (a <= 10) {
    console.log(a)
    a = a+1
}


for (let b = 0; b <= 10; b++) {
    console.log(b)
}


let arr = [1, 2, 3]
for (let c of arr) {
    console.log(c)
}


let obj = {
    name : "홍길동",
    grade : 6,
    class : 2
}

for (let pro in obj) {
    console.log(pro,obj[pro])
}