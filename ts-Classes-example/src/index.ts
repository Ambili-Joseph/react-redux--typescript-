class Rebot{

  _color:string;

  private static availableColor =['yellow','green'];
  static isColorAvailable(color:string){
    return Rebot.availableColor.includes(color);

  }
   
  constructor(protected _name:string){
    
  }
  askName(){
    console.log(`my name is ${this.name}`);
  }
  move (distance:number){
    console.log(`${this.name} moved ${distance} meters`)
    this.name
  }
  set color(color:string){
    if(!Rebot.isColorAvailable(color)){
     
      throw new Error(`color ${color} is not available`);
    }
    this._color =color;

  }


  set name(value:string){
   this._name = 'PREFIX' +value;

  }
  get name(){
    return this._name+ 'SUFFIX';
  }
  
}


class FlyingRobot extends Rebot {

  private readonly jetpackSize:number;

  constructor(name:string,jetpackSize:number){
    super(name);
    this.jetpackSize=jetpackSize;
    this.jetpackSize
    this.name
  }
  move(distance:number){
    console.log(`${this.name} is flying `)
    super.move(distance);

  }

}
const robot =new Rebot('Ambili');
robot.askName();

 const flyingRobot = new FlyingRobot('ambili',5);
 flyingRobot.move(20);
 console.log(`flying  robot's jetpack Size is`,flyingRobot.name)
 flyingRobot.name ='joseph'
 console.log(`My name is ${flyingRobot.name}`);
 //Rebot.availableColor