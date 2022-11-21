import { Label, TextInput, Dropdown, Button, Modal } from "flowbite-react";

const AddFriend = ({ toggle }) => {
  return (
    <Modal show={true} position="center" onClose={toggle}>
      <Modal.Header>Add New Friend</Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Friend Name" />
            </div>
            <TextInput id="name" type="text" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="accHash" value="Account Hash" />
            </div>
            <TextInput id="accHash" type="text" required={true} className={"font-mono"}/>
          </div>
          <Button type="submit" color="purple">
            Add Friend
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Label
          value="NOTE - Once confirmed the transaction is irreversible"
          class={"text-red-700 font-bold"}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default AddFriend;
