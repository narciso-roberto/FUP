#include <stdio.h>

int main(){
    int num=0,menor=0;
    
    scanf("%d",&menor);
    
    for(int i =0;i<4;i++){
        
        scanf("%d", &num);
        
        if(num < menor){
            menor = num;
        }
    }
    
    printf("%d\n", menor);
    
    return 0;
}