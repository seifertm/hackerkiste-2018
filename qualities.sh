#!/usr/bin/env bash
src=${1}
filename=${src%.*}

sizes=(
  1280x720
)

qualities=(
  100
  85
  70
  55
  40
  25
  10
)

for size in ${sizes[@]}; do
  for quality in ${qualities[@]}; do
	gm convert -resize ${size} -quality ${quality} ${src} ${filename}-${size}-q${quality}.jpeg
  done
done
