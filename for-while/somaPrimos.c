
#include <stdio.h>

int main()
{
    int n,cont,soma = 0;
    
    scanf("%d",&n);
    
    
    
    for(int i = n; i > 1; i--){
        for(int j = i; j >= 2; j--){
            //printf("%d %d \n", i, j);
            if(i == j){
                cont = 0;
            }else if(i%j == 0){
                cont++;
            }
        }
        if(cont == 0){
            //printf("%d", i);
            soma += i;
        }
        cont = 0;
    }
    printf("%d",soma);
        
        
    
    
    
    return 0;
}
