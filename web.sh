#!/bin/bash
set -ex

# if GRAX_FLAGS is unset, run `grax web` as normal
# otherwise run `grax-proxy` in front of `grax-web`
if [ -z "$GRAX_FLAGS" ]; then
    ./grax web
else
    ./grax-proxy &
    PORT=5000 ./grax web
fi
