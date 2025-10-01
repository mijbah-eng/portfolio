function About() {
  return (
    <div id="#about" className="col-1">
      <h2>About Me</h2>
      <div className=" col-2 items-start">
        <div id="side-img">
          <img
            className="rounded-2xl"
            src="/img/about-img.jpg"
            alt="about-img"
          />
        </div>
        <div className="flex flex-col gap-6">
          <p>
            Hi, I’m a passionate Full Stack Developer with a strong eye for
            design and a deep love for building clean, user-friendly digital
            experiences. I specialize in turning complex ideas into smooth,
            responsive, and functional web applications—from front-end
            interfaces to back-end architecture.
          </p>
          <p>
            With a solid understanding of modern web technologies and a
            dedication to writing clean, maintainable code, I focus on
            delivering products that not only look great but also perform
            seamlessly across all devices. Whether it’s crafting pixel-perfect
            layouts or enhancing user experience through thoughtful
            interactions, I bring creativity and precision to every project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
