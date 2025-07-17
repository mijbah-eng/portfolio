import { ModeToggle } from "../mode-toggle";

function Navber() {
  return (
    <>
      <div className="flex gap-2">
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </>
  );
}

export default Navber;
