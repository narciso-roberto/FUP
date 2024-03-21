#include <stdio.h>

int main() {

  float n1, n2, n3, tr;

  scanf("%f %f %f %f", &n1,&n2,&n3,&tr);

  if (n1 <= n2 && n1 <= n3){
    n1 = 0;
  }else if (n2 <= n1 && n2 <= n3){
    n2 = 0;
  }else{
    n3 = 0;
  }
  float nota = (n1+n2+n3+tr) / 3;
  printf("%f",nota);
  
  if(nota >= 7){
    printf("Aprovado com %f",nota);
  }else{
    printf("Aprovado com %f",nota);
  }

  return 0;
}