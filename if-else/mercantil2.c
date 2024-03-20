#include <stdio.h>

int main() {

  float preco,c1;
  char chute;


  scanf("%f %c %f", &c1, &chute, &preco);


  if((chute == 'M' && c1 < preco) || (chute=='m' && c1 > preco)){
    printf("segundo");
  }else{
    printf("primeiro");
  }

  

    return 0;
}

