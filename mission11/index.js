function sleep(time) {
    return new Promise((resolve) => {setTimeout(() => {resolve()}, time);})
}

async function run() {
    console.log("1")
    await sleep(1000)
    console.log("2")
    await sleep(1000)
    console.log("3")
    await sleep(1000)
    console.log("4")
}

run()