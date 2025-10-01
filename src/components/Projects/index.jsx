function Projects() {
  return (
    <div className="section col-1">
      <h2>Projects</h2>
      <div className="flex justify-center items-center flex-wrap gap-10">
<div className="w-2xs overflow-hidden rounded-md">
        <img src="/img/projects/project1.png" alt="" />
        <h2>
          {" "}
          <a
            target="_blank"
            className="underline"
            href="https://mijbah-eng.github.io/obys-agency/"
          >
            Obys Agency
          </a>{" "}
        </h2>
      </div>

      <div className="w-2xs overflow-hidden rounded-md">
        <img src="/img/projects/significo.png" alt="" />
        <h2>
          {" "}
          <a
            target="_blank"
            className="underline"
            href="https://mijbah-eng.github.io/significo"
          >
            Significo
          </a>{" "}
        </h2>
      </div>
      </div>
      
    </div>
  );
}

export default Projects;
