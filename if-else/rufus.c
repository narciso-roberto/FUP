#include <stdio.h>

int main() {

  int n1,n2,n3;

  scanf("%d %d %d",&n1,&n2,&n3);

  if(n1 < n2 && n2 < n3){
    printf("P M G");
  }else if(n3 < n1 && n1 < n2){
    printf("M G P");
  }else if(n3 < n2 && n2 < n1){
    printf("G M P");
  }else if(n1 < n3 && n3 < n2){
    printf("P G M");
  }else if(n2 < n3 && n3 < n1){
    printf("G P M");
  }else{
    printf("M P G");
  }



  return 0;
}