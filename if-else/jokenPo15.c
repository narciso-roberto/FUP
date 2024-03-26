#include <stdio.h>

int main() {
    int j1, j2;
    //scanf("%d %d", &j1, &j2);

    j1=9;
    j2=1;

    if(j1==j2){
        printf("Empate");
    }else if(j1 == 0 && j2 >= 1  && j2 <= 7){
        printf("Jogador 1");

    }else if(j1 == 1 && j2 >= 2  && j2 <= 8){
         printf("Jogador 1");       
    }else if(j1 == 2 && j2 >= 3  && j2 <= 9){
         printf("Jogador 1");       
    }else if(j1 == 3 && j2 >= 4  && j2 <= 10){
        printf("Jogador 1");
    }else if(j1 == 4 && j2 >= 5  && j2 <= 11){
        printf("Jogador 1");
    }else if(j1 == 5 && j2 >= 6  && j2 <= 12){
        printf("Jogador 1");
    }else if(j1 == 6 && j2 >= 7  && j2 <= 13){
        printf("Jogador 1");
    }else if(j1 == 7 && j2 >= 8  && j2 <= 14){
        printf("Jogador 1");
    }else if(j1 == 8 && j2 >= 9  && j2 <= 15){
        printf("Jogador 1");
    }else if(j1 == 9 && (j2 >= 10  || j2 == 0)){
        printf("Jogador 1");
    }else if(j1 == 10 && (j2 >= 11  || j2 == 0 || j2 == 1)){
        printf("Jogador 1");
    }else if(j1 == 11 && (j2 >= 12  || (j2 >= 0 && j2 <= 2))){
        printf("Jogador 1");
    }else if(j1 == 12 && (j2 >= 13  || (j2 >= 0 && j2 <= 3))){
        printf("Jogador 1");
    }else if(j1 == 13 && (j2 >= 14  || (j2 >= 0 && j2 <= 4))){
        printf("Jogador 1");
    }else if(j1 == 14 && (j2 >= 15  || (j2 >= 0 && j2 <= 5))){
        printf("Jogador 1");
    }else if(j1 == 15 && (j2 >= 0  || (j2 >= 0 && j2 <= 6))){
        printf("Jogador 1");
    }else if(j1 == 9 && j2 == 1){
        printf("Jogador 1");
    }else if()

    if(j1 == 9 && (j2 >= 10  || j2 == 0)){
        printf("oi");
    }
    

    return 0;
}