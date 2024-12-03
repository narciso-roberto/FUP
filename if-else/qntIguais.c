#include <stdio.h>

int main() {

  int n1,n2,n3;

  scanf("%d", &n1);
  scanf("%d", &n2);
  scanf("%d", &n3);

  //2 2 1
  //1 2 1
  //2 1 2
  //1 1 2
  if(n1 == n2 && n1==n3){
    //3
    printf("3");

  }else if(n1==n2){
    //2
    printf("2");

  }else if(n1 == n3){
    //2
    printf("2");

  }else if(n2 == n3){
    printf("2");
  }else{
    printf("0");
  }

  

  return 0;
}