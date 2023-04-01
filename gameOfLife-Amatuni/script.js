var socket = io()








// function matrixGenerator(matrixSize,grass,grassEater,predator,man,chicken,lava) {
//     var matrix = []

//     for (let i = 0; i < matrixSize; i++) {
//         matrix.push([])
//         for (let j = 0; j < matrixSize; j++) {
//         matrix[i].push(0)
        
//         }
//     }


//     for (let i = 0; i < grass; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 1
        
//     }

//     for (let i = 0; i < grassEater; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 2
        
//     }
    


//     for (let i = 0; i < predator; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 3

        
//     }
//     for (let i = 0; i < man; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 4
//     }
//     for (let i = 0; i < chicken; i++) {
        
              
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)
    

//         matrix[y][x] = 5
//        }
//        for (let i = 0; i < lava; i++) {
        
//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 6
//        }
//     return matrix
// }

// var matrix = matrixGenerator(30,40,15,5,10,0,25)
var side = 25


// var grassArr = []
// var grassEaterArr = []
// var predatorArr = [] 
// var manArr = []
// var chickenArr = []
// var lavaArr = []

function setup() {
    createCanvas(30 * side ,30 * side)
//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
       
//            if(matrix[y][x] == 1){
//                 var gr = new Grass(x,y)
//                 grassArr.push(gr)
//            }else  if(matrix[y][x] == 2){
//             var grEat = new GrassEater(x,y)
//             grassEaterArr.push(grEat)
//            }else if(matrix[y][x] == 3){
//             var pred = new Predator(x,y)
//                 predatorArr.push(pred)
//             }else if(matrix[y][x] == 4){
//                 var mn = new Man(x,y)
//                 manArr.push(mn)
//             }else if(matrix[y][x] == 5){
//                 var chick = new Chicken(x,y)
//                 chickenArr.push(chick)
//             }else if(matrix[y][x] == 6){
//                 var lav = new Lava (x,y)
//                 lavaArr.push(lav)
//             }
//            }
//         }
        
    }


function colors(matrix) {
      for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
          
                if(matrix[y][x] == 1){
                     fill ("green")
                }else if (matrix[y][x] == 2){
                        fill ("yellow")
                }else if(matrix[y][x] == 3){
                            fill ("red")
                }else if(matrix[y][x] == 4){
                    fill("#f3cf5e")
                }
                else if(matrix[y][x] == 5){
                    fill("white")
                }
                else if(matrix[y][x] == 6){
                    fill("#950f0f")
                }
                else{
                    fill ("gray")
                }
                rect (x * side , y * side ,side,side)
        }
          
      }
    }
socket.on("send matrix",colors)




//       for(let i in  grassArr){
//             grassArr[i].mul()
//       }

//       for(let i in  grassEaterArr){
//         grassEaterArr[i].eat()
//      }
//      for(let i in predatorArr){
//          predatorArr[i].eat()
//      }
//      for(let i in manArr){
//          manArr[i].eat()
//     }
//     for(let i in lavaArr){
//         lavaArr[i].eat()
//     }
//     for(let i in chickenArr){
//         chickenArr[i].mul()
//     }
// }


