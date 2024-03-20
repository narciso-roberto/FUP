#include <stdio.h>

int main() {

  int n1,n2,n3,n4;

  scanf("%d %d %d %d", &n1, &n2, &n3, &n4);

  int media = (n1+n2+n3+n4) / 4;

  if(media>= 7){
    printf("aprovado");
  }else{
    printf("reprovado");
  }


    return 0;
}

