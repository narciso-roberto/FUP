#include <stdio.h>

int main() {
    int val, men;
    int i;

    scanf("%d", &men);

    for(i = 1; i < 5; i++) {
        scanf("%d", &val);
        
        if(val < men) {
            men = val;
        }
    }

    printf( "%d", men);

    return 0;
}