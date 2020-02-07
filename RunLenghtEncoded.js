/*
Example = [3,4,5,8]
Output = [4,4,4,8,8,8,8,8]
Pair => [3,4] , [5,8]
3:Frequency
4:Value
*/
num = [2,4,5,1,3,8]
output = []
frequency = 0
val = 0
counter = 1
for(i=0;i<num.length;i++){
  if(counter % 2 == 0){
    val = num[i]
     for(j=0;j<frequency;j++){
       output.push(val)
     }
    counter = counter + 1
  }
  else{
    frequency = num[i]
    counter = counter + 1
  }
  
}
console.log(output)
