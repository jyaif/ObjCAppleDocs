#!/usr/bin/env python
import os

def resizeImage(imageName, sizes):
  for size in sizes:
    s = str(size)
    os.system("convert " + imageName + ".png -resize " + s + "x" + s +  " extension/" + imageName + s + ".png")

resizeImage("icon", [16, 48, 96, 128])
resizeImage("icon-disabled", [48])
