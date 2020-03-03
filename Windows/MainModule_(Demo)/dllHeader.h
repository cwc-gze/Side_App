#ifdef  MYDLL_EXPORTS 
#define DLLCALL __declspec(dllexport)   /* Should be enabled before compiling 
                                           .dll project for creating .dll*/
#else
#define DLLCALL __declspec(dllimport)  /* Should be enabled in Application side
                                          for using already created .dll*/
#endif

// Interface Class
class ImyMath {
public:
    virtual ~ImyMath() {;}
    virtual int Add(int a, int b) = 0;
    virtual int Subtract(int a, int b) = 0;
};

// Concrete Class
class MyMath: public ImyMath {
public:
    MyMath() {}
    int Add(int a, int b);
    int Subtract(int a, int b);
    virtual int Test(int a, int b);
	int nVal;
    int a,b;
};
/*
#ifdef MYDLL_EXPORTS
int MyMath::Test(int a, int b) {
    return a+b+b;
}
#else
int MyMath::Test(int a, int b) {
    return a-b-b;
}
#endif
*/

//  Factory function that will return the new object instance. (Only function
//  should be declared with DLLCALL)
extern "C" /*Important for avoiding Name decoration*/
{
    DLLCALL ImyMath* __cdecl CreateMathObject();
};

// Function Pointer Declaration of CreateMathObject() [Entry Point Function]
typedef ImyMath* (*CREATE_MATH) ();