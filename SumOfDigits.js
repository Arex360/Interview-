num = 44
x = 0
y = 0
str = num.toString()
for(i=0;i<str.length;i++){
  x = parseInt(str[i])
  y = y + x
}
console.log(y)
