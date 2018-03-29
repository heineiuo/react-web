#! /usr/local/bash

npm run build-storybook
cd storybook-static
ga .
gc -m "update"
gp
