#include <stdio.h>

int main() {

  int n1,n2;
  scanf("%d %d",&n1,&n2);

  int resto = n1 % n2;

  printf("%f",resto);

  return 0;
}