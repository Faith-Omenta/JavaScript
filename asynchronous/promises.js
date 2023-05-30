let success =true

let promise=new Promise((resolve,reject)=>{
    if(succeess){
        resolve('I have a job');
    }
    else{
        reject('I do not have a job')
    }
});
console.log({promises});

promise.then(()=>{
    console.log('I will pay all debt');

})
// promise.catch()=>{
    
    console.log('I will apply again after three months');

// }
promise.finally(()=>{


})