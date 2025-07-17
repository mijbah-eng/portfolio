import { useEffect, useState } from "react";

function Skills() {
  const [skillsImg, setSkillsImg] = useState([]);

  useEffect(() => {
    setSkillsImg(() => [
      "/img/skills logo/html.png",
      "/img/skills logo/css.png",
      "/img/skills logo/js.png",
      "/img/skills logo/figma.png",
      "/img/skills logo/react.png",
      "/img/skills logo/redux.png",
      "/img/skills logo/type-script.png",
      "/img/skills logo/zod.png",
      "/img/skills logo/next js.png",
      "/img/skills logo/zustand.png",
      "/img/skills logo/RHF.png",
      "/img/skills logo/mongodb.png",
    ]);
  }, []);
  console.log(skillsImg ? skillsImg : null);

  return (
    <div className="section col-1">
      <h2>Skills</h2>
      <div className="col-mul">
        {skillsImg
          ? skillsImg?.map((skill) => (
              <div className="skill-icon w-12">
                <img src={skill} alt="" />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Skills;
