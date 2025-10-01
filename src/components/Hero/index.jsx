import { Button } from "@/components/ui/button";
function Hero() {
  return (
    <>
      <div className="col-2 items-center">
        <div className="flex flex-col items-start px-5 py-10 gap-2">
          <h2>Hi I'm Mibah Full stack Developer</h2>
          <p>I build scalable and efficient full-stack web applications.</p>
          <Button onClick={() => {
    const link = document.createElement("a");
    link.href = "/Mijbah_resume.pdf";
    link.download = "Mibah-Resume.pdf";
    link.click();
  }} className="cursor-pointer">Download Resume</Button>
        </div>
        <div>
          <img className="rounded-full" src="/img/hero-img.jpg" alt="hero-img" />
        </div>
      </div>
    </>
  );
}

export default Hero;
