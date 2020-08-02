particlesJS.load("particles-js", "particles.json", function () {
  console.log("callback - particles.js config loaded");
});

const instance = new Typewriter("#typewriter", {
  loop: true,
});

instance
  .typeString("Hi there, I'm Jojo Zhang.")
  .pauseFor(1000)
  .deleteAll()
  .typeString("I'm a full stack web developer.")
  .pauseFor(1000)
  .deleteChars(27)
  .typeString(
    "passionate about learning new technologies<br>and making ideas come true.",
  )
  .pauseFor(1000)
  .deleteAll()
  .typeString("Check out my work at<br>github.com/nomadkitty")
  .pauseFor(1000)
  .deleteAll()
  .start();
