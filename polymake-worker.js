importScripts("https://cdn.jsdelivr.net/npm/xterm-pty@0.9.4/workerTools.js");

onmessage = (msg) => {
  self.Module = self.Module || {};
  self.Module.preRun = self.Module.preRun || [];
  importScripts("polymake.js");
  importScripts("polymake.data.js");

  if (!self.asmLibraryArg) self.asmLibraryArg = self.wasmImports;
  if (self.SYSCALLS && !self.SYSCALLS.get) self.SYSCALLS.get = self.syscallGetVarargI;

  emscriptenHack(new TtyClient(msg.data));
};
