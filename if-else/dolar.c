#include <stdio.h>

int main() {

  int k;
  float j,i;

  scanf("%f %d", &i, &k);

  switch (k)
  {
  case 1:
    j = 5.32;
    break;

  case 2:
    j = 4.40;
    break;

  case 3:
    j = 6.51;
    break;

  case 4:
    j = 7.53;
    break;

  }

  i = i / j;
  printf("%.2f", i);

  return 0;
}