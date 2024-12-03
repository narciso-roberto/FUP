#include <stdio.h>

int main() {

  char l;

  scanf("%c", &l);

  switch (l)
  {
  case 'A':
    printf("VOGAL");
    break;
  case 'E':
    printf("VOGAL");
    break;
  case 'I':
    printf("VOGAL");
    break;
  case 'O':
    printf("VOGAL");
    break;
  case 'U':
    printf("VOGAL");
    break;
  
  default:
    printf("CONSOANTE");
    break;
  }

  return 0;
}