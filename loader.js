async function loadWebAssembly(filename, imports = {}) {
  const response = await fetch(filename)
  const buffer = await response.arrayBuffer()
  const module = await WebAssembly.compile(buffer)

  imports.env = imports.env || {}
  Object.assign(imports.env, {
    memoryBase: 0,
    tableBase: 0,
    memory: new WebAssembly.Memory({ initial: 256, maximum: 256 }),
    table: new WebAssembly.Table({ initial: 0, maximum: 0, element: 'anyfunc' })
  })
  return new WebAssembly.Instance(module, imports)
}
