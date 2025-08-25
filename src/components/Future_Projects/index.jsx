function Future_Projects() {
  return (
    <div className="section col-1">
      <h2>Future Projects</h2>
      <div className="flex flex-wrap gap-10">
        <div className="w-2xs overflow-hidden rounded-md">
          <img src="/img/future_projects/fP1.png" alt="" />
          <h2>
            <a
              target="_blank"
              className="underline"
              href="https://infosysss.netlify.app/"
            >
              Infosysss
            </a>{" "}
          </h2>
        </div>
        <div className="w-2xs overflow-hidden rounded-md">
          <img src="/img/future_projects/fP2.png" alt="" />
          <h2>
            <a
              target="_blank"
              className="underline"
              href="https://dojos-katanas-reimagine-round2-mu.vercel.app/"
            >
              TESLA
            </a>{" "}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Future_Projects;
