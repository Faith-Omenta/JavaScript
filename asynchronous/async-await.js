function greet(){
    console.log('Welcome to our site');
};
greet();

let data =[{}];

let creatUser = new Promise((resolve,reject)=>{
    if (data){
        setTimeout(()=>{resolve('User successfuly created')},5000);
        
    }
    else{
        setTimeout(()=>{reject('User already exists');},5000);
    }
});
async function createUserAccount(){
    let response=await creatUser;
    console.log({response});
}
createUserAccount();