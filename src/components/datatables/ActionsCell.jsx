import React from "react";
import ReactDOM from 'react-dom';
import { Dropdown } from "react-bootstrap";
import { Table } from "rsuite";
const { Cell } = Table;

const DropdownPortal = ({ children }) =>
  ReactDOM.createPortal(children, document.body);


function ActionsCell({ rowData, dataKey, ...props }) {
  return (
    <Cell {...props} className="text-center">
      <ul className="mb-0 ps-0 pe-4 d-flex align-items-center">
        <li className="pe-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-reset"
          >
            <i className="fa-solid fa-pen"></i>
          </a>
        </li>
        <li className="pe-4">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="text-reset"
          >
            <i className="fa-solid fa-share-nodes"></i>
          </a>
        </li>
        <li className="pe-4">
          <Dropdown>
            <Dropdown.Toggle
              className="bg-transparent no-caret border-0 p-0 text-reset"
              type="button"
              id="actionsDropdown"
            >
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </Dropdown.Toggle>
            <DropdownPortal>
              <Dropdown.Menu>
                <Dropdown.Item className="" href="#">
                  Action
                </Dropdown.Item>
                <Dropdown.Item className="" href="#">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item className="" href="#">
                  Something else here
                </Dropdown.Item>
              </Dropdown.Menu>
            </DropdownPortal>
          </Dropdown>
        </li>
      </ul>
    </Cell>
  );
}

export default ActionsCell;
