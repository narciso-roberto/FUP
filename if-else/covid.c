#include <stdio.h>

int main() {

  char a,b;

  scanf("%c %c", &a,&b);


  switch (a)
  {

  case 'A':
    printf("isolamento");
    break;

  default:
    switch (b)
    {

    case 'A':
      printf("isolamento");
      break;

    default:
      printf("fim do isolamento");
      break;
    }
    

  }

  

  return 0;
}