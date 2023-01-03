#!/bin/bash

date > timestamp.txt && git add timestamp.txt && git commit -m "dummy"
sleep 1
git push origin master

