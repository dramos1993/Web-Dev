function power(x,y){
  temp = 4;

if(y===1)
{
  return x;
}
  y--;
  x = temp*x;
  return power(x,y);
}

num = 4;



fourcubed = power(4,3);

console.log(fourcubed);


function factorial(x)
{
  if(x===1)
  {
    return x;
  }
  x= x*factorial(x-1);
  return x;

}

console.log(factorial(8))

