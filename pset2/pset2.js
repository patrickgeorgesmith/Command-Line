/******************
PROBLEM 1:

In this problem, you will be downloading some files from online, then creating a custom project with git initialized. You will then one by one structure the files and make commits to git as needed.

1. Download this repository from the homepage by clicking "Clone or download", then "Download ZIP". You will be using the files from the /stuff directory.
2. Once the repository has been downloaded, go ahead and unzip it.

3. Achieve the following structure ONLY using command line:
   
~/Desktop/pset2
    /assets
        /images
            amazon.jpg
            facebook.png
            google.jpg
            twitter.png
        /memes
            meme.jpg
        /src
            foo.js
    app.js
    hello.html


cd desktop  
    mkdir pset2
    cd pset2
    mk assets
    mk memes
    mk src
    cd..
    mv stuff/facebook.png pset2/assets/images
    mv stuff/amazon.jpg pset2/assets/images
    mv stuff/google.jpg pset2/assets/images
    mv stuff/twitter.png pset2/assets/images
    mv stuff/meme.jpg pset2/assets/memes
    mv stuff/foo.js pset2/assets/src
    mv stuff/apps.js pset2/assets
    mv stuff/hello.html pset2/assets
    
4. Open `hello.html` using a code editor and change "SOME_CLASS" to "Full Stack: Nights & Weekends". Save it.
    code hello.html

5. You should have the following commits:

- git initialized
- added app.js
- added hello.html
- created assets directory
- added all images & memes
- added all sources
- modified hello file
******************/
