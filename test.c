#include<stdio.h>
int main(){
  int a = 1, count = 0;
  while(a < 10){
    if(a++ % 3 == 0 && ++a % 2 == 0){
      count++;
    }
  }
  printf("%d", count);
  return 0;
}