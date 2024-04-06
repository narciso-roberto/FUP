#include <stdio.h>

void main(){
    int h=0,p=0,f=0,d=0,hc=0;
    
    scanf("%d %d %d %d", &h,&p,&f,&d);
    
    
    while(f!=-1){
        f++;
        if(f == 16){
            f = 0;
        }
        
        if(f == p){
            hc = 0;
            f = -1;
        }else if(f == h){
            hc = 1;
            f = -1;
        }
        
        
    }
    if((hc== 1 && d==1) || (hc==0 && d==-1)){
            printf("S");
        }else{
            printf("N");
        }
}