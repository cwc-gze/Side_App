// Copyright 2011 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

// Capture the output of this into a variable, if you want
(function(fb, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.cleanups = [];

  var gb = 0;
  // Each module has its own stack
  var STACKTOP = getMemory(parentModule['TOTAL_STACK']);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + parentModule['TOTAL_STACK'];
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported, and that it was actually malloc'ed and not static memory FIXME
    parentModule['_free'](gb);
  });

  

// === Auto-generated preamble library stuff ===

//========================================
// Runtime essentials
//========================================



// === Body ===

var ASM_CONSTS = [];






gb = alignMemory(getMemory(200 + 4), 4 || 1);

for (var i = gb; i < gb + 200; ++i) HEAP8[i] = 0;

// STATICTOP = STATIC_BASE + 200;
/* global initializers */ /*__ATINIT__.push();*/


/* memory initializer */ allocate([10,72,101,108,108,32,83,117,98,70,117,110,99,33,33,0], "i8", ALLOC_NONE, gb);





/* no memory initializer */
// {{PRE_LIBRARY}}

function _printf(
  ) {
  if (!parentModule['_printf']) abort("external function 'printf' is missing. perhaps a side module was not linked in? if this function was expected to arrive from a system library, try to build the MAIN_MODULE with EMCC_FORCE_STDLIBS=1 in the environment");
  return parentModule['_printf'].apply(null, arguments);
  }
var ASSERTIONS = true;

// Copyright 2017 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

/** @type {function(string, boolean=, number=)} */
function intArrayFromString(stringy, dontAddNull, length) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      if (ASSERTIONS) {
        assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      }
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}





var asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

var asmLibraryArg = { "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "_printf": _printf, "abort": abort, "abortStackOverflow": abortStackOverflow, "fb": fb, "gb": gb, "getTempRet0": getTempRet0, "setTempRet0": setTempRet0, "tempDoublePtr": tempDoublePtr };
// EMSCRIPTEN_START_ASM
var asm = (/** @suppress {uselessCode} */ function(global, env, buffer) {
'almost asm';

  var HEAP8 = new global.Int8Array(buffer),
  HEAP16 = new global.Int16Array(buffer),
  HEAP32 = new global.Int32Array(buffer),
  HEAPU8 = new global.Uint8Array(buffer),
  HEAPU16 = new global.Uint16Array(buffer),
  HEAPU32 = new global.Uint32Array(buffer),
  HEAPF32 = new global.Float32Array(buffer),
  HEAPF64 = new global.Float64Array(buffer),
  tempDoublePtr=env.tempDoublePtr|0,
  gb=env.gb|0,
  fb=env.fb|0,
  STACKTOP=env.STACKTOP|0,
  STACK_MAX=env.STACK_MAX|0,
  __THREW__ = 0,
  threwValue = 0,
  setjmpId = 0,
  tempInt = 0,
  tempBigInt = 0,
  tempBigIntS = 0,
  tempValue = 0,
  tempDouble = 0.0,
  nan = global.NaN,
  inf = global.Infinity,
  Math_floor=global.Math.floor,
  Math_abs=global.Math.abs,
  Math_sqrt=global.Math.sqrt,
  Math_pow=global.Math.pow,
  Math_cos=global.Math.cos,
  Math_sin=global.Math.sin,
  Math_tan=global.Math.tan,
  Math_acos=global.Math.acos,
  Math_asin=global.Math.asin,
  Math_atan=global.Math.atan,
  Math_atan2=global.Math.atan2,
  Math_exp=global.Math.exp,
  Math_log=global.Math.log,
  Math_ceil=global.Math.ceil,
  Math_imul=global.Math.imul,
  Math_min=global.Math.min,
  Math_max=global.Math.max,
  Math_clz32=global.Math.clz32,
  abort=env.abort,
  setTempRet0=env.setTempRet0,
  getTempRet0=env.getTempRet0,
  abortStackOverflow=env.abortStackOverflow,
  _printf=env._printf,
  tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS

function stackAlloc(size) {
  size = size|0;
  var ret = 0;
  ret = STACKTOP;
  STACKTOP = (STACKTOP + size)|0;
  STACKTOP = (STACKTOP + 15)&-16;
    if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(size|0);

  return ret|0;
}
function stackSave() {
  return STACKTOP|0;
}
function stackRestore(top) {
  top = top|0;
  STACKTOP = top;
}

function _fTestExtFunc() {
 var $vararg_buffer = 0, label = 0, sp = 0;
 sp = STACKTOP;
 STACKTOP = STACKTOP + 16|0; if ((STACKTOP|0) >= (STACK_MAX|0)) abortStackOverflow(16|0);
 $vararg_buffer = sp; //@line 4 "../src_(Demo)/SideApp.cpp"
 (_printf(((gb + (0) | 0)|0),($vararg_buffer|0))|0); //@line 4 "../src_(Demo)/SideApp.cpp"
 STACKTOP = sp;return; //@line 6 "../src_(Demo)/SideApp.cpp"
}

  


// EMSCRIPTEN_END_FUNCS


  return { _fTestExtFunc: _fTestExtFunc, stackAlloc: stackAlloc, stackRestore: stackRestore, stackSave: stackSave };
})
// EMSCRIPTEN_END_ASM
(asmGlobalArg, asmLibraryArg, buffer);

  var real__fTestExtFunc = asm["_fTestExtFunc"];
  asm["_fTestExtFunc"] = function() {
  assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
  assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
    return real__fTestExtFunc.apply(null, arguments);
  };
  var _fTestExtFunc = Module["_fTestExtFunc"] = asm["_fTestExtFunc"];





var NAMED_GLOBALS = {
  
};
for (var named in NAMED_GLOBALS) {
  Module['_' + named] = gb + NAMED_GLOBALS[named];
}
Module['NAMED_GLOBALS'] = NAMED_GLOBALS;
;

parentModule['registerFunctions']([], Module);



// === Auto-generated postamble setup entry stuff ===




if (runtimeInitialized) {
  // dlopen case: we are being loaded after the system is fully initialized, so just run our prerun and atinit stuff now
  callRuntimeCallbacks(__ATPRERUN__);
  callRuntimeCallbacks(__ATINIT__);
} // otherwise, general dynamic linking case: stuff we added to prerun and init will be executed with the rest of the system as it loads





  // {{MODULE_ADDITIONS}}

  return Module;
});




// Copyright 2013 The Emscripten Authors.  All rights reserved.
// Emscripten is available under two separate licenses, the MIT license and the
// University of Illinois/NCSA Open Source License.  Both these licenses can be
// found in the LICENSE file.

if (typeof window === "object" && (typeof ENVIRONMENT_IS_PTHREAD === 'undefined' || !ENVIRONMENT_IS_PTHREAD)) {
  var emrun_register_handlers = function() {
    // When C code exit()s, we may still have remaining stdout and stderr messages in flight. In that case, we can't close
    // the browser until all those XHRs have finished, so the following state variables track that all communication is done,
    // after which we can close.
    var emrun_num_post_messages_in_flight = 0;
    var emrun_should_close_itself = false;
    var postExit = function(msg) {
      var http = new XMLHttpRequest();
      // Don't do this immediately, this may race with the notification about the return code reaching the
      // server. Send a *sync* xhr so that we know for sure that the server has gotten the return code
      // before we continue.
      http.open("POST", "stdio.html", false);
      http.send(msg);
      try {
        // Try closing the current browser window, since it exit()ed itself. This can shut down the browser process
        // and then emrun does not need to kill the whole browser process.
        window.close();
      } catch(e) {}
    };
    var post = function(msg) {
      var http = new XMLHttpRequest();
      ++emrun_num_post_messages_in_flight;
      http.onreadystatechange = function() {
        if (http.readyState == 4 /*DONE*/) {
          if (--emrun_num_post_messages_in_flight == 0 && emrun_should_close_itself) postExit('^exit^'+EXITSTATUS);
        }
      }
      http.open("POST", "stdio.html", true);
      http.send(msg);
    };
    // If the address contains localhost, or we are running the page from port 6931, we can assume we're running the test runner and should post stdout logs.
    if (document.URL.search("localhost") != -1 || document.URL.search(":6931/") != -1) {
      var emrun_http_sequence_number = 1;
      var prevPrint = out;
      var prevErr = err;
      Module['addOnExit'](function() { if (emrun_num_post_messages_in_flight == 0) postExit('^exit^'+EXITSTATUS); else emrun_should_close_itself = true; });
      out = function(text) { post('^out^'+(emrun_http_sequence_number++)+'^'+encodeURIComponent(text)); prevPrint(text); };
      err = function(text) { post('^err^'+(emrun_http_sequence_number++)+'^'+encodeURIComponent(text)); prevErr(text); };

      // Notify emrun web server that this browser has successfully launched the page. Note that we may need to
      // wait for the server to be ready.
      var tryToSendPageload = function() {
        try {
          post('^pageload^');
        } catch (e) {
          setTimeout(tryToSendPageload, 50);
        }
      };
      tryToSendPageload();
    }
  };

  // POSTs the given binary data represented as a (typed) array data back to the emrun-based web server.
  // To use from C code, call e.g. EM_ASM({emrun_file_dump("file.dat", HEAPU8.subarray($0, $0 + $1));}, my_data_pointer, my_data_pointer_byte_length);
  var emrun_file_dump = function(filename, data) {
    var http = new XMLHttpRequest();
    out('Dumping out file "' + filename + '" with ' + data.length + ' bytes of data.');
    http.open("POST", "stdio.html?file=" + filename, true);
    http.send(data); // XXX  this does not work in workers, for some odd reason (issue #2681)
  };

  if (typeof Module !== 'undefined' && typeof document !== 'undefined') emrun_register_handlers();
}

//# sourceMappingURL=App.html.map