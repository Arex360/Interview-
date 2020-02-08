ans = 0
r = 'CMXCIX'
for(i=0;i<r.length;i++){
      if(r[i] == 'I'){
          ans = ans + 1
      }
      else if(r[i] == 'V'){
          ans = ans + 5
          if(r[i-1] == 'I')
              ans = ans - 2
      }
      else if(r[i] == 'X'){
          ans = ans + 10
          if(r[i-1] == 'I'){
              ans = ans - 2
          }
      }
      else if(r[i] == 'L'){
          ans = ans + 50
          if(r[i-1] == 'X'){
              ans = ans - 20
          }
      }
      else if(r[i] == 'C'){
          ans = ans + 100
          if(r[i-1] == 'X'){
              ans = ans - 20
          }
      }
      else if(r[i] == 'D'){
          ans = ans + 500
          if(r[i-1] == 'X'){
              ans = ans - 200
          }
      }
      else if(r[i] == 'M'){
          ans = ans + 1000
          if(r[i-1] == 'C'){
              ans = ans - 200
          }
      }
}
console.log(ans)
