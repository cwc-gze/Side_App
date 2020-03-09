package {
import GZ.EntryPoint;

//import GZ.Base.Thread.ThreadExt;
import GZ.Base.Thread.Thread;


<cpp_h>



class tApi_Lib_GZ cClassTest: public gzSharedCount {
//class tApi_Lib_GZ cClassTest {

	public:
		
		// ------  Cpp section  ------ //
		inline cClassTest* SpFromThis(){return this;}; //TODO
		/*
		inline void AddInst() const {const_cast<cClass*>(this)->nInstCount++;};
		inline void SubInst() const {
		const_cast<cClass*>(this)->nInstCount--;
		GZ_printf("\nnInstCount: %d", nInstCount);
		if(nInstCount == 0){
		GZ_printf("\nDelete ");
		delete this;
		}
		};
		*/
		//cClass* parent;//temps //TODO gzWp
		gzWp<cClassTest> parent;//temps //TODO gzWp
		gzInt nInstCount;
		union {
		Lib_GZ::Base::Thread::cThread* GzThread;
		Lib_GZ::Base::Thread::cThread* thread;
		};
		inline cClassTest():GzThread(0),parent(0){}; //Sure?
		
		inline  void IniClass(){};
		  void ThreadLoop();
		  
		inline  void ThreadEnd(){
		GZ_printf("\n----ThreadEND");
		};
		// --------------------------- //


		//Var
		inline cClassTest(cClassTest* _parent)
		// ------  Cpp section  ------ //
		:SharedCount(), nInstCount(0)

		// --------------------------- //
		{
			//Special var ini
			// ------  Cpp section  ------ //
			if(_parent != 0){
			//GZ_printf("\nGetParentThread");
			//  parent = _parent->SpFromThis();

			GzThread = _parent->thread;
			//	GZ_printf("\nSetParentThread");
			//  GZ_printf("\nClassSetThread");
			}else{
			GZ_printf("\nThreadClass(No Parent)");
			//Only new thread can have parent to zero (cThread) TODO aAssert
			//	--> thread = this;--> IN thread.cpp
		}
		// --------------------------- //

		};
		void  Constructor();

		inline cClassTest(const cClassTest& _o, gzBool _bDCpy = false){
		};
		inline  ~cClassTest(){};

		//Static singleton function

	private:

		//Var

};

namespace Lib_GZ{namespace Base{namespace Thread{namespace Thread{

class tApi_Lib_GZ cTestThread : public cClassTest {

	public:

		// ------  Cpp section  ------ //
		//static gzUInt nCurrId; //TODO MAKE IT ATOMIC //TODO better way
		cThreadExt* pThreadExt;
		gzArray<Lib_GZ::Base::csClass*> st;
		gzSp<cClassTest> oObj;
		inline void fLinkThreadExt(cThreadExt* _pThreadExt){
		pThreadExt = _pThreadExt;

		};
		
		inline void fStart(cClassTest* _opObj){

		#ifndef GZ_D_Monothread
		fLoop(); //Change execution oder (Mono/multi thread), not good
		#endif
		}
		// --------------------------- //


		//Var
		gzBool bRun;
		gzUInt nId;
		gzUInt nSleepTime;
		inline cTestThread(cClassTest* _parent) : cClassTest(_parent)
		// ------  Cpp section  ------ //
		,pThreadExt(0)
		// --------------------------- //

		{
		//Special var ini
		bRun = /*|None|*/true;
		nId = /*|None|*/0;
		nSleepTime = /*|None|*/1;
		// ------  Cpp section  ------ //

		static gzUInt _nCurrId = 0; //TODO better way
		nId = _nCurrId;
		_nCurrId++;
		/*
		nId = nCurrId;
		nCurrId++;
		*/
		// --------------------------- //

		};
		void  Constructor();
		 void fLoop();

		  void ThreadLoop();
				
		 ~cTestThread();

		//Static singleton function

	private:

		//Var

};
}}}}

</cpp_h>







 
 
 
<cpp>

	#include <windows.h>
	#include "../MainModule_(Demo)/dllHeader.h"
	//extern "C" void fTestExtFunc();
	typedef int (*Func_fTestExtFunc)();
	
	
	gzPtrFuncRPAny fRegister = 0;
</cpp>






public class SideEntry extends EntryPoint {
//public class SideEntry {

	//public var oThread: ThreadExt; //Object Variable of our Class

	
	public function SideEntry():Int {
	
		<cpp>
		
		Lib_GZ::Base::Thread::Thread::cTestThread* _oMachin = new Lib_GZ::Base::Thread::Thread::cTestThread(0);
		
		
		//((cClassTest*)_oMachin)->ThreadLoop();
//(_oMachin)->fLoop();

		
		
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
	
		
		//Debug.fTrace("Hello GZE!!");
		
	//	oThread = new MainInterface(); //Create our Class Interface
		
		return 1; //We return "1" (true) to continue execution
	}
}

}