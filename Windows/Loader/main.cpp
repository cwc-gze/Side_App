#include <stdio.h>
#include <windows.h> 

typedef int (__cdecl  *Func_Entry) (char*);
typedef void (__cdecl *Func_Test) ();

int main(int argc, char** argv) {
  //using namespace std;
//  int ret = 0;
	printf("\n Myapp \n");
	
	HINSTANCE hDLL = LoadLibrary("GZE.dll");
    if (hDLL == NULL) {
		printf( "Failed to load library.\n");
    } else {
		printf( "GZE Laoded.\n");
		
		Func_Entry pEntryFunction = (Func_Entry)GetProcAddress(hDLL,"gze_entry");
		if(pEntryFunction != 0){
			
			pEntryFunction(0);
		
		}else{
			printf( "Failed to load funct.\n");
		}
		
		
		Func_Test pTestFunc= (Func_Test)GetProcAddress(hDLL,"test");
		if(pTestFunc != 0){
			
			pTestFunc();
		
		}else{
			printf( "Failed to load funct.\n");
		}
		
		
		
	//	pEntryFunction(0, "");
		
	}
	
  // your code goes here
	
  return 0;
} 