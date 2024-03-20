#include <stdio.h>

int main() {

  float salario,percent;

  scanf("%f", &salario);
  scanf("%f", &percent);

  percent = percent / 100;

  printf("Salario com aumento: %f", salario + (salario* percent));
  

  return 0;
}