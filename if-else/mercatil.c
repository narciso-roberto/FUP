#include <stdio.h>

int main() {

  int preco,c1,c2,dif1,dif2;


  scanf("%d %d %d", &preco, &c1, &c2);

  dif1 = preco - c1;
  dif2 = preco - c2;

  if(dif1 < 0){
    dif1 = dif1*-1;
  }
  if(dif2<0){
    dif2 = dif2*-1;
  }
  
  if(dif1 < dif2){
    printf("primeiro");
  }else if(dif2 < dif1){
    printf("segundo");
  }else{
    printf("empate");
  }

    return 0;
}

