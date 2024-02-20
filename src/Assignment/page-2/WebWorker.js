onmessage=function name(e) {
    let element = 0
    for (let i = 0; i < 1000000000; i++) {
        element += i;
    }
    postMessage(element)
}