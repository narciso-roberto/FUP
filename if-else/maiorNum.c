#include <stdio.h>

int main() {

  int n1,n2,n3,n4,maior;

  scanf("%d %d %d %d", &n1, &n2, &n3, &n4);

  if(n1 >= n2 && n1>= n3 && n1>=n4){
    maior = n1;
  }else if(n2>= n1 && n2 >= n3 && n2>=n4){
    maior = n2;
  }else if (n3 >= n1 && n3 >= n2 && n3>= n4){
    maior = n3;
  }else{
    maior = n4;
  }

  printf("%d",maior);

  

  


    return 0;
}

