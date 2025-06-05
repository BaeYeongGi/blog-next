#include<stdio.h>
int a;
int f(){
  return a++;
}
int main(void){
  for(int i = 0; i < 3; i++){
    printf("%d ", f());
  }
  print("%d", a);
  return 0;
}