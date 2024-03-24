#include <stdio.h>

int main() {

  int n,x,y,s;
  char c;

  //  scanf("%d %d %d %c %d",&n,&x,&y,&c,&s);
  n = 14;
  x = 0;
  y = 10;
  c = 'U';
  s = 19;


  if(c == 'R'){
    x = x+s;
  }else if(c == 'L'){
    x = x-s;
  }else if(c == 'U'){
    y = y-s;
  }else if(c == 'D'){
    y = y+s;
  }

   if(x > n-1){
      x = x%n;
    }
    if(x < 0){
      x = (x*-1) % n ;
    }
    if(y > n-1){
      y = y%n;
    }
    if(y < 0){
      y = (y*-1) % n ;
    }

  printf("%d %d",x,y);

  return 0;
}