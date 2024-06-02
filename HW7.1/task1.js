function  handleNum(a, b, c) {
    return a % 2 == 0 ? handleEven() : handleOdd()
}

function handleEven() {
    //let b = a % 2 == 0 
    console.log('number is even')
}

function handleOdd() {
   // let c = a % 2 !== 0
    console.log('number is odd')
}

handleNum(4,handleEven,handleOdd)