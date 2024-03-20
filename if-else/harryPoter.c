#include <stdio.h>

int main() {

  char q1,q2,q3,q4;
  int cont = 0;
  scanf("%c %c %c %c", &q1, &q2, &q3, &q4);

  if(q1=='d'){
    cont = cont + 1;
  }
  if(q2=='a'){
    cont= cont + 1;
  }
  if(q3=='c'){
    cont= cont + 1;
  }
  if(q4=='d'){
    cont= cont + 1;
  }

  if(cont == 4){
    printf("Super fa");
  }else if(cont == 3){
    printf("Fa");
  }else if(cont == 2){
    printf("Interessado no assunto");
  }else if(cont == 1){
    printf("Ja ouviu falar");
  }else{
    printf("Nunca assistiu");

  }
  

    return 0;
}

