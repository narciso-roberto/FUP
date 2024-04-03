
#include <stdio.h>

int main()
{
    int n,cont = 0;
    
    scanf("%d",&n);
    
    
    for(int i = n-1; i >= 2; i--){
        if(n%i == 0){
            cont++;
        }
    }
    if(n == 0 || n == 1){
        printf("nao");
    }else if(cont > 0){
        printf("nao");
    }else{
        printf("sim");
    }
    
    
    return 0;
}
