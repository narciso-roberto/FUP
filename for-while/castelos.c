#include <stdio.h>

int main(){
    int num = 0, qua = 0, cont= 1;
    
    scanf("%d", &num);
    
    while(qua < num){
        qua = cont * cont;
        cont++;
        
    }
    
    if(qua!=num || qua == 0){
        printf("nao\n");
    }else{
        printf("sim\n");
    }
    
    
    
    return 0;
}