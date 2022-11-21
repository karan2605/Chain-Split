import {
  Label,
  TextInput,
  Dropdown,
  Button,
  Modal,
  Table,
  Checkbox,
} from "flowbite-react";

const NewSplit = ({ toggle }) => {
  return (
    <Modal show={true} position="center" onClose={toggle} size="4xl">
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
            <Dropdown
              label="Select Token"
              dismissOnClick={false}
              color="purple"
            >
              <Dropdown.Item className="flex gap-4">Token 1</Dropdown.Item>
              <Dropdown.Item className="flex gap-4">Token 2</Dropdown.Item>
              <Dropdown.Item className="flex gap-4">Token 3</Dropdown.Item>
              <Dropdown.Item className="flex gap-4">Token 4</Dropdown.Item>
              <Dropdown.Item className="flex gap-4">Token 5</Dropdown.Item>
            </Dropdown>
          </div>
          <div>
            <Table>
              <Table.Head>
                <Table.HeadCell>Friends</Table.HeadCell>
                <Table.HeadCell>Select for this Split</Table.HeadCell>
                <Table.HeadCell>Amount Required</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Friend 1
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      id="amount"
                      type="number"
                      size="sm"
                      required={true}
                      placeholder="> 0"
                      className="font-mono"
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Friend 2
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      id="amount"
                      type="number"
                      size="sm"
                      required={true}
                      placeholder="> 0"
                      className="font-mono"
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Friend 3
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      id="amount"
                      type="number"
                      size="sm"
                      required={true}
                      placeholder="> 0"
                      className="font-mono"
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Friend 4
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      id="amount"
                      type="number"
                      size="sm"
                      required={true}
                      placeholder="> 0"
                      className="font-mono"
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Friend 5
                  </Table.Cell>
                  <Table.Cell>
                    <Checkbox />
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      id="amount"
                      type="number"
                      size="sm"
                      required={true}
                      placeholder="> 0"
                      className="font-mono"
                    />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="amount" value="Total Amount" />
            </div>
            <TextInput
              id="amount"
              type="number"
              required={true}
              placeholder="> 0"
              className="font-mono"
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="initContrib" value="Your Contribution" />
            </div>
            <TextInput
              id="initContrib"
              type="number"
              required={true}
              placeholder=">= 0"
              className="font-mono"
            />
          </div>
          <Button type="submit" color="purple">
            Confirm
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

export default NewSplit;
