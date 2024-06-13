let a = [1,2,3]
let k=2;
let d=[];
for(let i=0;i<a.length;i++){
  for(let j=0;j<k;j++){
    d.push(a[i]+a[j]);
    // a.push(a[j]-1);
  }
}
console.log(d);
console.log(Math.max(...d))

let a = [1,2,3]
let k=2;
let d=[];
for(let i=0;i<a.length;i++){
  let sum=0;
  for(let j=i;j<k;j++){
    sum=sum+a[j]
  }
  d.push(sum);
}
console.log(d);

let a = [1,2,3]
let k=2;
let d=[];
a.sort(function(a,b){
  return b-a
})
let x=0;
let y=0;
console.log(a)
for(let i=0;i<a.length;i++){
x=Math.max(...a)
a.splice(i+1,2,a[i+1]-1,a[i+2]-1)
  console.log(a)
a.shift()
y=Math.max(...a)
d.push(x+y)
}
console.log(d)
console.log(Math.max(...d))
d.push(sum)

d.shift()

console.log(d)

let a = [7,50,3]
let k=3;
let d=[];
let e=[];
a.sort(function(a,b){
  return b-a
})
if(k>1){
  for(let i=0;i<k;i++){
    let b=Math.max(...a)
    // console.log(b)
    a.shift()
    a.forEach((e)=>{
      d.push(e-1)
    })
    console.log(d)
    let c=Math.max(...d)
    e.push(b+c)
}

}
else{
  e.push(Math.max(...a))
}
console.log(Math.max(...e))