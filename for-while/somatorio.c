
#include <stdio.h>

int main()
{
    int n,soma = 0;
    
    scanf("%d",&n);
    
    for(int i = n; i>0; i--){
        soma = soma + i;
    }
    
    printf("%d",soma);
    

    
    return 0;
}
