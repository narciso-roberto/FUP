#include <stdio.h>

int main() {

  int n,x,y,s,ay,ax;
  char c;

  scanf("%d %d %d %c %d",&n,&x,&y,&c,&s);

  ay = y;
  ax = x;


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
      x = ax - s%n;
      if(x < 0){
        x = x + n;
      }
    }
    if(y > n-1){
      y = y%n;
    }
    if(y < 0){
      y = ay - s%n;
      if(y < 0){
        y = y + n;
      }
    }

  printf("%d %d",x,y);

  return 0;
}