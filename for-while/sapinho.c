#include <stdio.h>


void main(){
    int p=0,s=0,e=0,loc=0;
    
    p = 500;
    s = 100;
    e = 20;
    
    scanf("%d %d %d", &p,&s,&e);
    
    printf("0 ");
    while(loc<p-s){
        loc += s;
        printf("%d\n", loc);
        
        
        loc -= e;
        printf("%d ", loc);
        
    }
    printf("saiu");
    
    
}