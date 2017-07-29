# INSTRUCTIONS
## How to run the project
1. Open a terminal window and navigate to the project folder (frontend-nanodegree-mobile-portfolio-master)
2. Run npm install to install project dependencies
3. Refer to Gruntfile.js for grunt dependencies
2. Launch your favourite http server (for reference I used python simpleHTTP server & ngrok to create a web domain for Google Pagespeed Insights testing)
3. Open a web browser and navigate to index.html to view the portfolio
4. Navigate to Cam's Pizzeria via the link to see the Pizzeria
5. Open developer tools on either page to see the effect of the optimisations

## Optimisations made
### Cam's Portfolio (index.html)
* Google webfonts removed and "Open Sans" Sans Serif font added to CSS
* media.css & print.css stylesheets created to move non-CRP styles out of main CSS
* Javascript contcatenated and minified using Grunt
* CRP styles inlined into <head> tags
* Images compressed using compressjpg.com
* Finally, index.html was minified

**Google Pagespeed Insights Scores: Mobile 90, Desktop 92**

### Cam's Pizzeria (views/pizza.html)
* Non-CRP responsive styles moved into separate CSS files (media768.css, media920.css & media1200.css)
*  CRP styles inlined
*  JS inlined
*  .mover class height & width settings moved to CSS from JS to prevent forced layout / style calcs later in code
*  'will-change' added to mover class to let browser know the class will be transformed
*  Pizzeria image compressed
*  changePizzaSizes function re-factored as per Cam's guidance to avoid multiple style recalculations followed by layout in for loop
*  updatePositions function re-factored:
    * querySelectorAll changed to getElementsByClassName as it is more performant for selecting moving pizza elements
    * top variable created to hold "scrollTop" position instead of calling it in the for loop
    * transX variable created & initialised for later use in element transforms
    * new sub-function created = setTransform to better handle movement of pizza elements via CSS
    * sliding pizza count reduced from 200 to 40 as this seemed like the maxmimum required to give the desired effect

**60 FPS achieved on scroll and time to resize pizzas is < 5ms**

### Notes
package.json & grunt.js configuration files included for file processing an project set up
______________________________________________________________________________

## PROJECT INFO & DESCRIPTION

## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* [The fewer the downloads, the better]("https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html")
* [Reduce the size of text]("https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html")
* [Optimize images]("https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html")
* [HTTP caching]("https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html")

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
