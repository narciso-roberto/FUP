#include <stdio.h>

int main() {

  int h,l,c,jh,jl;

  scanf("%d %d %d %d %d", &h, &l, &c, &jh, &jl);

  if((h <= jh && l <= jl) || (h <= jl && l <= jh) || (c <= jl && h <= jh) || (c <= jh && h <= jl)){
    printf("S");
  }else{
    printf("N");
  }

  return 0;
}