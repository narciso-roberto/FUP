#include <stdio.h>

int main(){
    int num = 100,dig = 0,rest = 0,cont = 0,fim=0;
    
    scanf("%d %d",&dig,&num);
    
    rest = num;
    
    while(fim == 0){
        rest = num %10;
        
        num = num / 10;
        
        if(rest == dig){
            cont++;
        }
        
        if(num <= 0){
            fim = 1;
        }
        
    }
    printf("%d\n",cont);
    
    
}