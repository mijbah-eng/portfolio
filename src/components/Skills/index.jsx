import { useEffect, useState } from "react";

function Skills() {
  const [skillsImg, setSkillsImg] = useState([]);

  useEffect(() => {
    setSkillsImg(() => [
      "/public/img/skills logo/html.png",
      "/public/img/skills logo/css.png",
      "/public/img/skills logo/js.png",
      "/public/img/skills logo/figma.png",
      "/public/img/skills logo/react.png",
      "/public/img/skills logo/redux.png",
      "/public/img/skills logo/type-script.png",
      "/public/img/skills logo/zod.png",
      "/public/img/skills logo/next js.png",
      "/public/img/skills logo/zustand.png",
      "/public/img/skills logo/RHF.png",
      "/public/img/skills logo/mongodb.png",
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
