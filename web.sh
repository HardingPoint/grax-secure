#!/bin/bash
set -ex

# if PROXY is unset, run `grax web` as normal
# otherwise run grax-proxy in front of `grax-web`
if [ -z "$PROXY" ]; then
    ./grax web
else
    ./grax-proxy &
    PORT=5000 ./grax web
fi
