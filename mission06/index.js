var a = 1 //변수의 재선언과 값 재할당이 가능함
let b = 2 // 변수의 재선언 시 오류가 나고 값 재할당이 가능함
const c = 3 // 변수의 재선언과 값 재할당 모두 불가능함

function print1(a){
    return a
}

const print2 = (a) => {
    return a
}

console.log(print1(1))
console.log(print2(2))