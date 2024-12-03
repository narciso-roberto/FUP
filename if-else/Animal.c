#include <stdio.h>
#include <locale.h>

int main() {

  int a,b,c;

  scanf("%d %d %d", &a, &b, &c);

  switch (a){
        case 1: //classe
          switch (b){
            case 1: //habitate

              switch (c){
                case 1: //habito
                  printf("Leão");
                  break;

                case 2: //habito
                  printf("Macaco");
                  break;

                case 3: //habito
                  printf("Cavalo");
                  break;
              }
              break;
          

            case 2: //habitate
              switch (c){
                case 1: //habito
                  printf("Foca");
                  break;

                case 3: //habito
                  printf("Peixe-boi");
                  break;

              }
              break;

            case 3: //habitate
              switch (c){
                case 1: //habito
                  printf("Morcego");
                  break;

                case 3: //habito
                  printf("Morcego");
                  break;
              }
              break;
          }
          break;
        case 2: //classe
          switch (b){
            case 1: //habitate

              switch (c){
                case 1: //habito
                  printf("Pinguim");
                  break;

                case 4: //habito
                  printf("Avestruz");
                  break;
              }
              break;

            case 2: //habitate
              switch (c){
                case 1: //habito
                  printf("Pato");
                  break;

                case 4: //habito
                  printf("Pato");
                  break;
              }
              break;

            case 3: //habitate
              switch (c){
                case 1: //habito
                  printf("Águia");
                  break;

                case 4: //habito
                  printf("Águia");
                  break;
              }
              break;
        }
          break;
  }
  

  return 0;
}