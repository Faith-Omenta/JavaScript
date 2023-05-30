let people=[
    {name:"Faith",age:21,height:"5ft"},
    {name:"Glenah",age:31,height:"7ft"},
    {name:"Philis",age:32,height:"6ft"}
];

let ages=people.map(items=>items.age);
console.log({ages});

let weights=people.map(item=>{
    return{
        ...item,
        weight:50,
    }
})
console.log({weights});

let changeWeight =weights.map(item=>{
    if(item.name ==="Faith"){
        item.weight=60;
    }
    return item
});
console.log({changeWeight})