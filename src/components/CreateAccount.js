import NavigationBar from "./Navbar";
import SiteFooter from "./SiteFooter";

import {
  Button,
  Label,
  TextInput,
  Card,
  FileInput,
} from "flowbite-react";

const CreateAccount = () => {
  return (
    <div className="flex flex-col bg-stone-800 ">
      <NavigationBar />

      <div class="flex h-full bg-stone-800 py-40 justify-center">
        <Card
          className={
            "dark:border-4 dark:border-purple-600 dark:bg-stone-900"
          }
        >
          <h1 className="text-3xl font-bold text-white py-3">
            Create your Account
          </h1>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="account" value="Account" />
              </div>
              <TextInput
                id="account"
                type="text"
                required={true}
              />
            </div>
            <div id="fileUpload">
              <div className="mb-2 block">
                <Label htmlFor="file" value="Upload Profile Picture" />
              </div>
              <FileInput
                id="file"
                required={true}
              />
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
