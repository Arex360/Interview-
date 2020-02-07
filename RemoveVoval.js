a = 'owais'
output = ''
voval = 'aeiou'
for(i=0;i<a.length;i++){
  if(!voval.includes(a[i])){
    output = output + a[i]
  }
}
console.log(output)
