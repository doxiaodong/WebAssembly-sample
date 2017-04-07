(module
  (import "methods" "fib" (func $fib (param i32) (result i32)))
  (export "testFib" (func $testFib))
  (func $testFib (param $n i32) (result i32)
    (return
      (call $fib (get_local $n))
    )
  )
)
