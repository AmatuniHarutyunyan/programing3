var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
res.redirect('index.html');
});

server.listen(3000);
function matrixGenerator(matrixSize,grass,grassEater,predator,man,chicken,lava) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
        matrix[i].push(0)
        
        }
    }


    for (let i = 0; i < grass; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1
        
    }

    for (let i = 0; i < grassEater; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2
        
    }
    


    for (let i = 0; i < predator; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3

        
    }
    for (let i = 0; i < man; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4
    }
    for (let i = 0; i < chicken; i++) {
        
              
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)
    

        matrix[y][x] = 5
       }
       for (let i = 0; i < lava; i++) {
        
        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 6
       }
    return matrix
}
matrix = matrixGenerator(30,40,15,5,10,0,25)
 grassArr = []
 grassEaterArr = []
 predatorArr = [] 
 manArr = []
 chickenArr = []
 lavaArr = []
 function createObject(){

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
       
           if(matrix[y][x] == 1){
                var gr = new Grass(x,y)
                grassArr.push(gr)
           }else  if(matrix[y][x] == 2){
            var grEat = new GrassEater(x,y)
            grassEaterArr.push(grEat)
           }else if(matrix[y][x] == 3){
            var pred = new Predator(x,y)
                predatorArr.push(pred)
            }else if(matrix[y][x] == 4){
                var mn = new Man(x,y)
                manArr.push(mn)
            }else if(matrix[y][x] == 5){
                var chick = new Chicken(x,y)
                chickenArr.push(chick)
            }else if(matrix[y][x] == 6){
                var lav = new Lava (x,y)
                lavaArr.push(lav)
            }
           }
        }

 }
 const Grass = require("./grass")
 const GrassEater = require("./grassEater")
 const Lava = require("./lava")
 const Man = require("./man")
 const Predator = require("./predator")
 const Chicken = require("./chicken")
 createObject()
 function mull(){
   

      for(let i in  grassArr){
            grassArr[i].mul()
      }

      for(let i in  grassEaterArr){
        grassEaterArr[i].eat()
     }
     for(let i in predatorArr){
         predatorArr[i].eat()
     }
     for(let i in manArr){
         manArr[i].eat()
    }
    for(let i in lavaArr){
        lavaArr[i].eat()
    }
    for(let i in chickenArr){
        chickenArr[i].mul()
    }
 }
 setInterval(mull,1000)