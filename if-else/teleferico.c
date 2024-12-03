#include <stdio.h>
#include <math.h>

int main() {

  float c,p;

  scanf("%f %f",&c,&p);
  c = c - 1;

 float v = ceil(p/c);

  printf("%.0f",v);

  return 0;
}