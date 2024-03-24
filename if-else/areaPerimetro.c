#include <stdio.h>

int main() {

  int base,altura;

  scanf("%d", &base);
  scanf("%d", &altura);

  printf("area: %d e perimetro: %d", base*altura, base*2 + altura*2);
  

  return 0;
}