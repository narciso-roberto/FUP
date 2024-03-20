#include <stdio.h>

int main() {

  int n1,n2,n3,menor;

  scanf("%d %d %d", &n1, &n2, &n3);

  if(n1 < n2 && n1 < n3){
    menor = n1;
  }else if(n2 < n1 && n2 < n3 ){
    menor = n2;
  }else{
    menor = n3;
  }

  printf("menor numero: %d",menor);
}