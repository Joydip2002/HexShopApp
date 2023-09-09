let arr = [2,3,4,6,8];

let mulArr = arr.map((curElem, index,arr)=>{
  return curElem*2;
}).filter((curElem)=>{
  return curElem >10;
}).reduce((accumulator,curElem)=>{
     return accumulator += curElem;
})
console.log(mulArr);