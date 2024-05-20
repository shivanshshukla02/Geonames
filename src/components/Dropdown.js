import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownI() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item >QCT</Dropdown.Item>
      <Dropdown.Item>CECME</Dropdown.Item>
      <Dropdown.Item >Impelsys</Dropdown.Item>
      <Dropdown.Item >All</Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownI;