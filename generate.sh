#!/usr/bin/env bash
set -e

rm -fr ts_output
rm -fr dist
mkdir dist

npx tsc
node ts_output/main.js

cp -r --interactive static/. dist

ps2pdf resume/resume.ps dist/Andy-Bruce-Resume.pdf

echo "COMPILING RUST STUFF"

declare -a NAMES=("icosahedron" "mandelbrot" "boltzman_distribution" "schrödinger" "inter_molecular_forces")

for NAME in "${NAMES[@]}"
do
    rm -fr "projects/$NAME/wasm"
done

for NAME in "${NAMES[@]}"
do
    cargo build --release --package "$NAME" --target wasm32-unknown-unknown
done

for NAME in "${NAMES[@]}"
do
    wasm-bindgen --target web "target/wasm32-unknown-unknown/release/$NAME.wasm" --out-dir "dist/projects/$NAME/wasm"
done

echo "DONE"
