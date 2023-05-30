let person={
    name:"Faith",
    age:20,
    height:"5ft4Inch",
    friend:{
        name:"Glenah",
        age:22,
    }
}
let student=new Object();
student.name="Melvin" //adding a property
console.log(person.age) //log a value if you want to get a property
console.log(person["name"]);
console.log(person.friend.name);
console.log(person["friend"]["age"])
console.log({student});

person.age=27;
person.school="AkiraChix";
console.log({person});

let person2=Object.assign(person); //cloning an object
console.log({person2});
let keys=Object.keys(person);
console.log({keys});

