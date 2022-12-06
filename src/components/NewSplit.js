import {
  Label,
  TextInput,
  Button,
  Modal,
  Table
} from "flowbite-react";

import { useState } from "react";

const NewSplit = ({ toggle }) => {

  const [values, setValues] = useState([])

  const startSplit = async (event) => {
    event.preventDefault()

    const groupName = event.target[0].value
    const total = event.target[1].value
    const contribution = event.target[2].value

    console.log(groupName, total, contribution, values)

  }

  const updateValues = (event) => {
    console.log(event.target.id)
    setValues(values => [...values, [event.target.id, event.target.value]])
  }

  return (
    <Modal show={true} position="center" onClose={toggle} size="4xl">
      <Modal.Header>Start a New Split</Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-4" onSubmit={startSplit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="groupName" value="Group Name" />
            </div>
            <TextInput id="groupName" type="text" required={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="TotalAmount" value="Total Amount" />
            </div>
            <TextInput
              id="TotalAmount"
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
          <div>
            <Table>
              <Table.Head>
                <Table.HeadCell>Friends</Table.HeadCell>
                <Table.HeadCell>Amount Required</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Friend 1
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      id="Friend1"
                      type="number"
                      size="sm"
                      placeholder="> 0"
                      className="font-mono"
                      onChange={updateValues}
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Friend 2
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      id="Friend2"
                      type="number"
                      size="sm"
                      placeholder="> 0"
                      className="font-mono"
                      onChange={updateValues}
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Friend 3
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      id="Friend3"
                      type="number"
                      size="sm"
                      placeholder="> 0"
                      className="font-mono"
                      onChange={updateValues}
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Friend 4
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      id="Friend4"
                      type="number"
                      size="sm"
                      placeholder="> 0"
                      className="font-mono"
                      onChange={updateValues}
                    />
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Friend 5
                  </Table.Cell>
                  <Table.Cell>
                    <TextInput
                      id="Friend5"
                      type="number"
                      size="sm"
                      placeholder="> 0"
                      className="font-mono"
                      onChange={updateValues}
                    />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
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
