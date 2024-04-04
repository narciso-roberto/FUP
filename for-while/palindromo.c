#include<stdio.h>


int main(void){
    int num = 0,inver = 0,anum = 0,dig = 0,cont = 1;
    
    scanf("%d", &num);
    anum = num;
    
    while(anum != 0){
        anum = anum/10;
        dig++;
    }
    
    anum = num;
    
    for(int j = 0;j<dig;j++){
        cont *= 10;
    }
    cont = cont/10;
    
    for(int i = cont; i>0; i = i/10){
        inver += anum%10*i;
        anum = anum/10;
        
    }
    
    if(num == inver){
        printf("1");
    }else{
        printf("0");
    }

    
    return 0;
}