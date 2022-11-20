import { Modal } from "flowbite-react/lib/cjs/components/Modal";
import { Button } from "flowbite-react/lib/cjs/components/Button/Button";
import { Label, Checkbox, TextInput, Dropdown } from "flowbite-react";

const NewSplit = ({ toggle }) => {
  return (
    <Modal show={true} position="center" onClose={toggle}>
      <Modal.Header>Start a New Split</Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="groupName" value="Group Name" />
            </div>
            <TextInput id="groupName" type="text" required={true} />
          </div>
          <div>
            <Dropdown label="Select Token" dismissOnClick={false} color="purple">
              <Dropdown.Item className="flex gap-4">Token 1</Dropdown.Item>
              <Dropdown.Item className="flex gap-4">Token 2</Dropdown.Item>
              <Dropdown.Item className="flex gap-4">Token 3</Dropdown.Item>
              <Dropdown.Item className="flex gap-4">Token 4</Dropdown.Item>
              <Dropdown.Item className="flex gap-4">Token 5</Dropdown.Item>
            </Dropdown>
          </div>
          <div>
            <label for="friends_multiple" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Friends</label>
            <select multiple id="friends_multiple" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="0x213ef...j2nk">Friend 1</option>
            <option value="0x213ef...j2nk">Friend 2</option>
            <option value="0x213ef...j2nk">Friend 3</option>
            <option value="0x213ef...j2nk">Friend 4</option>
            </select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="amount" value="Total Amount" />
            </div>
            <TextInput id="amount" type="number" required={true} placeholder="> 0" className="font-mono"/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="initContrib" value="Your Contribution" />
            </div>
            <TextInput id="initContrib" type="number" required={true} placeholder=">= 0" className="font-mono"/>
          </div>
          <Button type="submit" color="purple">Confirm</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Label value="NOTE - Once confirmed the transaction is irreversible" class={"text-red-700 font-bold"}/>
      </Modal.Footer>
    </Modal>
  );
};

export default NewSplit;
