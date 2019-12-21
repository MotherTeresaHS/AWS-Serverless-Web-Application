
Image Banks
===========

Before we can start coding a video game, we need to have the artwork and other assets. The stage library from CircuitPython we will be using is designed to import an "image bank". These image banks are 16 sprites staked on top of each other, each with a resolution of 16x16 pixels. This means the resulting image bank is 16x256 pixels in size. Also the image bank **must** be saved as a 16-color BMP file, with a pallet of 16 colors. To get a sprite image to show up on the screen, we will load an image bank into memory, select the image from the bank we want to use and then tell CircuitPython where we would like it placed on the screen. 

.. figure:: https://raw.githubusercontent.com/MotherTeresaHS/ICS3U-2019-Group0/master/space_aliens.bmp
    :height: 256 px
    :align: center
    :alt: Image Bank for Space Aliens

    Image Bank for Space Aliens

For sound, the stage library can play back :file:`*.wav` files in PCM 16-bit Mono Wave files at 22KHz sample rate. Adafruit has a great learning guide on how to save your sound files to the correct format `here <https://learn.adafruit.com/adafruit-wave-shield-audio-shield-for-arduino/convert-files>`_.

If you do not want to get into creating your own assets, other people have already made assets available to use. All the assets for this guide can be found in the GitHub repo here:

- `space aliens image bank <https://github.com/MotherTeresaHS/ICS3U-2019-Group0/blob/master/space_aliens.bmp>`_
- `coin sound <https://github.com/MotherTeresaHS/ICS3U-2019-Group0/blob/master/coin.wav>`_
- `pew sound <https://github.com/MotherTeresaHS/ICS3U-2019-Group0/blob/master/pew2.wav>`_
- `boom sound <https://github.com/MotherTeresaHS/ICS3U-2019-Group0/blob/master/boom.wav>`_
- `crash sound <https://github.com/MotherTeresaHS/ICS3U-2019-Group0/blob/master/crash.wav>`_

Please download the assets and place them on the PyBadge, in the root directory. Your previoud "Hello, World!" program should restart and run again each time you load a new file onto the PyBadge, hopefully with no errors once more.

Assets from other people can be found `here <https://github.com/MotherTeresaHS/ICS3U-2019-Group0/tree/master/docs/image_bank>`_.
