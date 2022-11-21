import NavigationBar from "./Navbar";
import SiteFooter from "./SiteFooter";

import { Button, Label, TextInput, Checkbox, Card } from "flowbite-react";

const CreateAccount = () => {
  return (
    <div className="flex flex-col bg-stone-800 ">
      <NavigationBar />

      <div class="h-full bg-stone-800 px-40 py-20">
        <Card
          className={
            "dark:border-4 dark:border-purple-600 dark:bg-stone-900 place-content-center"
          }
        >
          <h1 className="text-3xl font-bold text-white py-3">
            Create your Account
          </h1>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required={true} />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </Card>
      </div>
      <SiteFooter />
    </div>
  );
};

export default CreateAccount;
