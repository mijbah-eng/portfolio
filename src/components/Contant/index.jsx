import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
function Contant() {
  const InputType = [
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Name",
      autoComplete: "given-name",
    },
    {
      type: "email",
      name: "email",
      id: "email",
      placeholder: "Email",
      autoComplete: "email",
    },
  ];
  return (
    <div className="section col-1">
      <h2>Contact</h2>
      <div className="w-[300px] sm:w-sm">
        <form className="flex flex-col gap-6 sm:gap-2" action="">
          {InputType
            ? InputType?.map((inputItem) => (
                <Input
                  type={inputItem?.type}
                  name={inputItem?.name}
                  id={inputItem?.id}
                  placeholder={inputItem?.placeholder}
                  autoComplete={inputItem?.autoComplete}
                />
              ))
            : null}
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default Contant;
