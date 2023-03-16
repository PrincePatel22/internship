class Info {
    constructor(fName,lName,age) {
        this.fName = fName;
        this.lName = lName; 
    }
    present() {
        return 'my name is ' + this.fName + " " +  this.lName ;
    }
    static hello(){
        return "Static methods are called directly on the class,without creating an instance/object of the class.";
    }
    
}
class age extends Info {
    constructor(fName,lName,age) {
        super(fName,lName);
        this.age = age;
    }
    show(){
        return this.present() + ", My age is " + this.age;
    }
}

myinfo = new age("Parth","Patel","25");
console.log(myinfo.fName, myinfo.lName, myinfo.age);
console.log(this.myinfo.show());
console.log(Info.hello());