#!/bin/bash

date > timestamp.txt && git add timestamp.txt && git commit -m "dummy" && git push origin master
