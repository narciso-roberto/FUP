#include <stdio.h>

int main() {

  int forca, T,P;
  char tipo;

  scanf("%c %d", &tipo, &forca);

  if(tipo == 'b'){
    T = 20;
  }else if(tipo == 'c'){
    T = 18;
  }

  P = ((forca * T) - 80) / 10;

  if(P > 210){
    printf("Muito forte, bola fora");
  }else if(P >= 180){
    printf("Satisfeito");
  }else if(P >= 150){
    printf("Perfeito");
  }else if(P < 150){
    printf("Fraco, nem passou");
  }

  return 0;
}