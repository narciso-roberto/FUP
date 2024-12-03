
#include <stdio.h>

int main()
{
    int n,cont = 0;
    int num = 1;
    int tot = 0;
    
    scanf("%d",&n);
    
    
    
    while(cont < n){
        if(num%3==0 && num%7!=0){
            tot = tot + num;
            cont++;
        }
        num++;
    }
    

     printf("%d",tot);
        
    
    
    
    return 0;
}
