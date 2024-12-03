#include <stdio.h>

int main()
{
    float cont,notas,qnt,media;
    
    scanf("%f",&qnt);
    
    for(int i = 0; i<qnt; i++){
        scanf("%f", &notas);
        cont = cont + notas;
    }
    
    media = cont/qnt; 
    printf("%.2f", media);
    
    return 0;
}
