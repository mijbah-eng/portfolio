import { Button } from "@/components/ui/button";
function Hero() {
  return (
    <>
      <div className="col-2 items-center">
        <div className="flex flex-col items-start px-5 py-10 gap-2">
          <h2>Hi I'm Mibah Frontend Developer</h2>
          <p>I build responsive and engaging web applications.</p>
          {/* <Button className="cursor-pointer">Download Resume</Button> */}
        </div>
        <div>
          <img className="rounded-full" src="/img/hero-img.jpg" alt="hero-img" />
        </div>
      </div>
    </>
  );
}

export default Hero;
