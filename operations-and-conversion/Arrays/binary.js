// given an array num of numbers and target,returns the index if the target is
// found in the array else return null

function binary (num, target){
    let left=0;
    let right = num.length -1;
    while(left <= right){
        let middle = Math.floor((left+right)/2);
        if(num[middle]===target){
        return middle;

        }
        else if(num[middle]<target){
            left=middle+1;
        }
        else{
            right=middle -1;
        
        right=middle-1
        }
    }
    return null
}
let num=[3,4,6,10,15,26,47,56];
let target=47;
console.log(binary(num,target))

function binary(num,target){
    let left=0
    let right=num.length -1
    while(left<=right){
    let middle=math.floor((left+right)/2)
    if(num[middle] === target){
        return middle
    }
    else if(num[middle]<target){
        left = middle +1
   }
   else{
    right = middle -1

   }
    }
    return null
}
let num1=[2,3,4,5,6,7]
let target1 = 6
console.log(binary(num,target))


function binary(num,target){
    left=0
    right=num.length -1
    while(left<=right){
      let middle=math.floor((left+right)/2)
      if (num[middle]===target){
        return middle
      }
      else if(num[middle]<target){
       left = middle +1
    }
    else{
        right=middle -1
    }
}
return null
}
let num2=[4,56,7,89,23,43]
let target2=23
console.log(binary(num,target))

function binary(num,target){
    let left=0
    let right=num.length -1
    while(left<=right){
        middle=math.floor((left+right)/2)
        if(num[middle]===target){
            return middle
        }
        else if(num[middle]<left){
            left =middle +1
        }else{
            right = middle -1
        }
      }
      return null
}
let num3=[3,4,5,6,7,8]
let target3=7
console.log(binary(num,target))