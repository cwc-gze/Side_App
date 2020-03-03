(function(fb,parentModule){var Module={};Module.arguments=[];Module.cleanups=[];var gb=0;var STACKTOP=getMemory(parentModule["TOTAL_STACK"]);assert(STACKTOP%8==0);var STACK_MAX=STACKTOP+parentModule["TOTAL_STACK"];Module.cleanups.push(function(){parentModule["_free"](STACKTOP);parentModule["_free"](gb)});gb=alignMemory(getMemory(184+4),4||1);for(var i=gb;i<gb+184;++i)HEAP8[i]=0;allocate([],"i8",ALLOC_NONE,gb);var ASSERTIONS=false;var asmGlobalArg={"Math":Math,"Int8Array":Int8Array,"Int16Array":Int16Array,"Int32Array":Int32Array,"Uint8Array":Uint8Array,"Uint16Array":Uint16Array,"Uint32Array":Uint32Array,"Float32Array":Float32Array,"Float64Array":Float64Array,"NaN":NaN,Infinity:Infinity};var asmLibraryArg={"a":abort,"b":setTempRet0,"c":getTempRet0,"d":tempDoublePtr,"e":gb,"f":fb,"g":STACKTOP,"h":STACK_MAX};// EMSCRIPTEN_START_ASM
var asm=(/** @suppress {uselessCode} */ function(global,env,buffer) {
"use asm";var a=new global.Int8Array(buffer),b=new global.Int16Array(buffer),c=new global.Int32Array(buffer),d=new global.Uint8Array(buffer),e=new global.Uint16Array(buffer),f=new global.Uint32Array(buffer),g=new global.Float32Array(buffer),h=new global.Float64Array(buffer),i=env.d|0,j=env.e|0,k=env.f|0,l=env.g|0,m=env.h|0,n=0,o=0,p=0,q=0,r=0,s=0,t=0,u=0.0,v=global.NaN,w=global.Infinity,x=global.Math.floor,y=global.Math.abs,z=global.Math.sqrt,A=global.Math.pow,B=global.Math.cos,C=global.Math.sin,D=global.Math.tan,E=global.Math.acos,F=global.Math.asin,G=global.Math.atan,H=global.Math.atan2,I=global.Math.exp,J=global.Math.log,K=global.Math.ceil,L=global.Math.imul,M=global.Math.min,N=global.Math.max,O=global.Math.clz32,P=env.a,Q=env.b,R=env.c,S=0.0;
// EMSCRIPTEN_START_FUNCS
function T(a){a=a|0;var b=0;b=l;l=l+a|0;l=l+15&-16;return b|0}function U(){return l|0}function V(a){a=a|0;l=a}function W(){return 20}

// EMSCRIPTEN_END_FUNCS
return{_fTestExtFunc:W,stackAlloc:T,stackRestore:V,stackSave:U}})


// EMSCRIPTEN_END_ASM
(asmGlobalArg,asmLibraryArg,buffer);var _fTestExtFunc=Module["_fTestExtFunc"]=asm["_fTestExtFunc"];var NAMED_GLOBALS={};for(var named in NAMED_GLOBALS){Module["_"+named]=gb+NAMED_GLOBALS[named]}Module["NAMED_GLOBALS"]=NAMED_GLOBALS;parentModule["registerFunctions"]([],Module);if(runtimeInitialized){callRuntimeCallbacks(__ATPRERUN__);callRuntimeCallbacks(__ATINIT__)}return Module});

