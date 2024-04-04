# include <stdio.h>

int main(){
    int tot=0,m=0,c=0;
    
    scanf("%d", &c);
    
    while(tot < c*2){
        #include<stdio.h>

        scanf("%d", &m);
        tot = tot + m;

        if(tot >= c*2){
            printf("hora de partir\n");
        }else if(tot == 0){
            printf("vazio\n");
        }else if(tot<c){
            printf("ainda cabe\n");
        }else if(tot>=c){
            printf("lotado\n");
        }
    }

}
