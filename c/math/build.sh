#!/bin/bash

emcc index.c -Os -s WASM=1 -s SIDE_MODULE=1 -o index.wasm