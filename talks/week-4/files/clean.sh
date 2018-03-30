#!/bin/bash
filename=$1

eslint —fix $filename
lebab —replace $filename —transform arrow,for-of,arg-spread,obj-method,obj-shorthand,no-strict,commonjs,exponent,multi-var,let,class,template,default-param
prettier —single-quote —trailing-comma —write —bracket-spacing=false $filename
