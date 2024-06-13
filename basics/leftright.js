let a=[10,4,8,3]
let b=[]
b.push(0)
let c=[]
c.push(0)
let sum=0
for(let i=0;i<a.length-1;i++){
  
  sum=a[i]+sum
  b.push(sum)
}
let sum1=0
for(let i=a.length-1;i>0;i--){
  sum1=a[i]+sum1
  c.push(sum1)
}

console.log(b)
c.reverse()
console.log(c)
let e=[]
for(let i=0;i<b.length;i++){
  e.push(Math.abs(b[i]-c[i]))
  
  }
console.log(e)