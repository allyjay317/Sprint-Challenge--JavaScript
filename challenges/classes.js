// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {

    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return (this.length * this.width + this.length * this.height + this.width * this.height) * 2;
    }
}
cuboid = new Cuboid(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends Cuboid{
    constructor(side_length){
        super(side_length, side_length, side_length);
    }
    //no need to rewrite volume/surface area as the formula for cuboid still applys to cube, but for showing that I can do it
    volume(){
        return Math.pow(this.length, 3);
    }
    surfaceArea(){
        return 6* Math.pow(this.length, 2);
    }
}
cube = new CubeMaker(10);
console.log(cube.volume());
console.log(cube.surfaceArea());
