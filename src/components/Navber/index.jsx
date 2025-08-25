import { ModeToggle } from "../mode-toggle";

function Navber() {
  return (
    <>
      <div className="flex gap-2  mb-5">
        {/* <div className="flex justify-between gap-4  p-2 w-2xl m-auto">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#">Contact</a>
        </div> */}
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

export default Navber;
