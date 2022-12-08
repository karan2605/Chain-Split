import { Label, TextInput, Button, Modal, Alert } from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { UploadToIPFS, GetAccountData } from "./Utilities";

const AddFriend = ({ toggle }) => {
  const [showAlert, setShowAlert] = useState(false);
  const { reset } = useForm();

  const addFriend = async (event) => {
    event.preventDefault();

    let data = await GetAccountData();

    const friendName = event.target[0].value;
    const friendAccount = event.target[1].value;

    data.friends = [...data.friends, {
      account: friendAccount,
      name: friendName,
    }];

    data = new Blob([JSON.stringify(data)], { type: 'application/json' });

    await UploadToIPFS(data.account, data);

    setShowAlert(true);
    reset();
  };

  return (
    <Modal show={true} position="center" onClose={toggle}>
      {showAlert && (
        <Alert
          color="success"
          onDismiss={function onDismiss() {
            setShowAlert(false);
          }}
        >
          <span>
            <span className="font-medium">
              Friend Added!
            </span>
          </span>
        </Alert>
      )}
      <Modal.Header>Add New Friend</Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-4" onSubmit={addFriend}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Friend Name" />
            </div>
            <TextInput id="name" type="text" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="accHash" value="Public Key" />
            </div>
            <TextInput
              id="accHash"
              type="text"
              required={true}
              className={"font-mono"}
            />
          </div>
          <Button type="submit" color="purple">
            Add Friend
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Label
          value="NOTE - Once confirmed the transaction is irreversible"
          className={"text-red-700 font-bold"}
        />
      </Modal.Footer>
    </Modal>
  );
};

export default AddFriend;
