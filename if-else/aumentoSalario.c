#include <stdio.h>

int main() {

  float sal,p;

  scanf("%f",&sal);

  if( sal > 2000){
    p = 0.05;
  }else if (sal <= 1000){
     p = 0.20;
  }else if(sal <= 1500){
    p = 0.15;
  }else if(sal <= 2000){
   p = 0.10;
  }
  
  sal = sal + (sal*p);

  printf("%.2f", sal);

  return 0;
}