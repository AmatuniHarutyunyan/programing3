let LivingCreater = require("./LivingCreater")
module.exports =class Man extends LivingCreater{
    constructor(x, y) {
        super(x,y)
        this.energy = 15
        this.directions = []



    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(char, char1, char2) {
        this.getNewCoordinates();
        let found = [];

        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }
            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char2) {
                    found.push(this.directions[i]);
                }
            }
        }
   

        return found;
    }
    random(ch,ch1,ch2,){
        let found = this.chooseCell(ch,ch1,ch2);
        
        let result = Math.floor(Math.random()*found.length)
        return found[result];
        }
    mul() {
        // let emptyCell = this.chooseCell(0);
        let newCell = this.random(0)
 
        if (newCell && this.energy > 7) {
            let newX = newCell[0];
            let newY = newCell[1];

            let man = new Man(newX, newY);
            matrix[newY][newX] = 4;
            manArr.push(man);

            this.energy = 15;
        }
    }
    eat() {
        // let emptyCell = this.chooseCell(1, 2, 3)
        let newCell = this.random(1,2,3)

        if (newCell) {
            this.energy += 7;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                    break;
                }
            }
            for (let i = 0; i < grassEaterArr.length; i++) {
                if (grassEaterArr[i].x == newX && grassEaterArr[i].y == newY) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
          

            }

            for (let i = 0; i < predatorArr.length; i++) {
                if (predatorArr[i].x == newX && predatorArr[i].y == newY) {
                    predatorArr.splice(i, 1)
                    break;
                }

            }
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energy > 20) {
                this.mul()
            }
        }



        else {
            this.move()
        }
    }
    move() {
        // let emptyCell = this.chooseCell(0);
        let newCell =this.random(0)

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }
    die() {
        for (let i = 0; i < manArr.length; i++) {
            if (manArr[i].x == this.x && manArr[i].y == this.y) {
                manArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}