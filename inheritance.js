class Parent{
    constructor(){
       this.Group="comarce"
    }
}
class Child extends Parent{
    constructor(id,name,address){
        super();
        this.id=id;
        this.Name=name;
        this.Age=19;
        this.Collage="Nawab faizunessa Collage";
        this.Section="Bussiness";
        this.Year=2022;
        this.Home=address;
    }
}

const Student  = new Child(1,"Rafiqul","Nagalkoat")
const Student1 = new Child(2,"Nahid","Monohargonj")
const Student2 = new Child(3,"Safayet","Nagalkoat")
const Student3 = new Child(4,"Imran","Jalam")
const Student4 = new Child(5,"Israfil","Chadpur")

console.log(Student,Student1,Student2,Student3,Student4);