let a=[];
let b=1;
a.push(0)
a.push(1)
let sum=0;
for(let i = 0; i < 6; i++){
  sum=a[i]+a[i+1];
  a.push(sum);
}
console.log(a)