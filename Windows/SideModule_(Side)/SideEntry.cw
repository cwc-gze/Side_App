package {
import GZ.EntryPoint;

import GZ.Base.Thread.ThreadExt;



 
<cpp>

	#include <windows.h>
	#include "../MainModule_(Demo)/dllHeader.h"
	//extern "C" void fTestExtFunc();
	typedef int (*Func_fTestExtFunc)();
	
</cpp>


public class SideEntry extends EntryPoint {

	public var oThread: ThreadExt; //Object Variable of our Class

	
	public function SideEntry():Int {
	
		<cpp>
			printf("\nTry To DoOpen: SideModule.dll");
			
			HINSTANCE hDLL = LoadLibrary("SideModule.dll");
			if (hDLL == NULL) {
				printf("Failed to load library.\n");
			}
			else {
				CREATE_MATH pEntryFunction = (CREATE_MATH)GetProcAddress(hDLL,"CreateMathObject");
				//ImyMath* pMath = pEntryFunction();
				//MyMath* pMath = (MyMath*)pEntryFunction();
				/*
				if (pMath) {
					std::cout << "10+10=" << pMath->Add(10, 10) << std::endl;
					std::cout << "50-10=" << pMath->Subtract(50, 10) << std::endl;
					std::cout << "Test:40-10-10=" << pMath->Test(40, 10) << std::endl;
					std::cout << "40-10=" << pMath->nVal << std::endl;
				}*/
				
				FreeLibrary(hDLL);
			}
			
			/*
		//	void* _oHandle = dlopen("Rc/libsomething.js", RTLD_NOW);
			void* _oHandle = dlopen("Lib.js", RTLD_NOW);
			if(_oHandle == GZ_Null){
				printf("\nError on dlopen: %s", dlerror());
			}else{
				printf("\nSucess on dlopen");
			}
			printf("\nTry Lauch function");
			
			Func_fTestExtFunc fTestExtFunc = (Func_fTestExtFunc)dlsym(_oHandle, "fTestExtFunc");
			if(fTestExtFunc != GZ_Null){
					printf("\nFound!");
				printf("\nReturn: %d" , fTestExtFunc());
			}else{
				printf("\nFuncNotFound");
				
			}
			*/
			printf("\nDone");
		</cpp>
	
		
		Debug.fTrace("Hello GZE!!");
		
	//	oThread = new MainInterface(); //Create our Class Interface
		
		return 1; //We return "1" (true) to continue execution
	}
}

}