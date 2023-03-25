let LivingCreater= require("./LivingCreater")


module.exports=class Chicken extends LivingCreater{
    constructor(x, y) {
        super(x,y)
        this.energy = 10
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

    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

        if (newCell && this.energy > 7) {
            let newX = newCell[0];
            let newY = newCell[1];

            let chicken = new Chicken(newX, newY);
            matrix[newY][newX] = 5;
            chickenArr.push(chicken);

            this.energy = 10;
        }
    }
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell)

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
        for (let i = 0; i < chickenArr.length; i++) {
            if (chickenArr[i].x == this.x && chickenArr[i].y == this.y) {
                chickenArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}
