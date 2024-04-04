#include <stdio.h>


void main(){
    int p=0,s=0,e=0,loc=0;
    
    // p = 100;
    // s = 60;
    // e = 30;
    
    scanf("%d %d %d", &p,&s,&e);
    
    printf("0 ");
    while(loc<p-s){
        loc += s;
        printf("%d\n", loc);
        
        
        loc -= e;
        printf("%d ", loc);
        
        // s -= 10;
        if(s > 0){
            s -= 10;
        }else{
            s = 0;
        }
        
        if(loc < 0){
            loc = 999;
            
        }

        
    }
    if(loc == 999){
        printf("morreu");
    }else{
        printf("saiu");
    }
    
    
    
    
    
}