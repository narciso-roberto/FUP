#include <stdio.h>

int main() {

  int i;

  scanf("%d", &i);

  switch (i)
  {
  case 0:
    printf("Crianca");
    break;

  case 1:
    printf("Adolescente");
    break;

  case 2:
    printf("Adulto jovem");
    break;

  case 3:
    printf("Adulto jovem");
    break;

  case 4:
    printf("Adulto");
    break;

  case 5:
    printf("Melhor idade");
    break;

  default:
    printf("Melhor idade");
    break;
  }

  return 0;
}