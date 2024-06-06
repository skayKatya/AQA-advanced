function divide (numerator, denumerator) {

    if (!(typeof numerator === 'number') || !(typeof denumerator === 'number')) {
        throw new Error('Parameters are not a number')
    } else if (denumerator === 0) {
        throw new Error('Dividing to 0 is forbitten')
    } else {
        console.log(numerator/denumerator)
    }  
    return numerator/denumerator
}


// function divide (numerator, denumerator) {
     
//     try {
//             if (!(typeof numerator === 'number') || !(typeof denumerator === 'number')) {
//                 throw new Error('Parameters are not a number')
//            } else if (denumerator === 0) {
//               throw new Error('Dividing to 0 is forbitten')
//              } 
//         return numerator/denumerator
//       }
    
//      catch (error) {
//          console.log(error)
//       } 
//      finally {
//          console.log('Dividing is finished')
//             }
// } 


//console.log(divide('gh',7))
console.log(divide(6,2))
//console.log(divide(4,'j'))
// console.log(divide(5,0))
       
