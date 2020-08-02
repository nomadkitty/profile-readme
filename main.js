particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});

const instance = new Typewriter("#typewriter", {
  loop: true,
});

instance
  .typeString("Hi there, I'm Jojo.")
  .pauseFor(500)
  .deleteAll()
  .typeString("I'm a software developer.")
  .pauseFor(500)
  // .deleteChars(26)
  // .typeString(
  //   "passionate about<br>learning new technologies<br>and making ideas come true.",
  // )
  // .pauseFor(500)
  .deleteAll()
  .typeString("Check out my work at<br>github.com/nomadkitty")
  .pauseFor(700)
  .deleteAll()
  .start();
