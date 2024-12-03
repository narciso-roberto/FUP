#include<stdio.h>

int main(){
    long int t;
    scanf("%ld", &t);
    
    long int n1=0,n2=1,n3=1;
    
    for(int i = 0;i<t;i++){
        
        n3 = n1+n2;
        n1=n2;
        n2=n3;
        
    }
    printf("%ld",n1);
    
    return 0;
}