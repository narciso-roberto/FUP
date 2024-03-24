#include <stdio.h>

int main() {

  int n,d,a,R;

  scanf("%d %d %d",&n,&d,&a);

  if(d>=a){
    R = d-a;
  }else{
    R = (1+n-a) + d-1;
  }

  printf("%d", R);



  

  return 0;
}