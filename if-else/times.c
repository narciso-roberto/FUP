#include <stdio.h>
#include <locale.h>

int main() {

  int a,b,c;

  scanf("%d %d %d", &a, &b, &c);

  switch (a)
  {
  case 1://SERIE
    switch (b)
    {
    case 1://SEDE
      switch (c)
      {
      case 1://UNIFORME
        printf("Cearáaaaa");
        break;
      
      case 2://UNIFORME
        printf("Fortaleza");
        break;
      }
      break;
    
    case 2://SEDE
      break;
    }
    break;
  
  case 2://SERIE
    switch (b)
    {
    case 1://SEDE
      switch (c)
      {
      case 1://UNIFORME
        printf("Ceará");
        break;
      
      case 2://UNIFORME
        printf("Floresta");
        break;
      }
      break;
    
    case 2://SEDE
      switch (c)
      {
      case 1://UNIFORME
        break;
      
      case 2://UNIFORME
        printf("Guarany(s)");
        break;
      }
      break;
    }
    break;
  }

  return 0;
}