let student={
    name:"Darlene",
    age:20,
    introduce:function(){
        console.log("hello");
        console.log(`Hello my my name is ${this.name}`);
    }
}
student.introduce();
student.hobby=function(){
    console.log("I love swimming")
}
console.log({student});
student.hobby();
delete student.age;
console.log({student});
student.introduce();