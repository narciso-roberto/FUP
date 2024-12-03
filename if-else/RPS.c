#include <stdio.h>

int main() {

  char j1,j2;


  scanf("%c %c", &j1, &j2);

  if(j1==j2){
    printf("empate");
  }else if(j1 == 'R' && j2 == 'S' || j1=='S' && j2=='P' || j1=='P' && j2=='R'){
    printf("jog1");
  }else{
    printf("jog2");
  }
  

    return 0;
}

