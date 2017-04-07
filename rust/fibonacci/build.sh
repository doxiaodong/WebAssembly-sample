#!/bin/bash

emcc index.rs -s WASM=1 -s SIDE_MODULE=1 -o index.wasm
