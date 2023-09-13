import Button from "./components/Buttons";
import IconButton from "./components/IconButton";

export default function Home() {
  return (
    <div>
      Button varients
      <p>
        <Button variant="clear">BUTTON</Button>
        <Button variant="withPlus">BUTTON</Button>{" "}
        <Button variant="borderWithPlus" length="sm">
          BUTTON
        </Button>{" "}
        <Button variant="withBorder" length="sm">
          BUTTON
        </Button>{" "}
        <Button variant="borderWithPlus" length="m">
          BUTTON
        </Button>{" "}
        <Button variant="withBorder" length="m">
          BUTTON
        </Button>{" "}
        <Button variant="borderWithPlus" length="lg">
          BUTTON
        </Button>{" "}
        <Button variant="withBorder" length="lg">
          BUTTON
        </Button>{" "}
        <Button variant="borderWithPlus" length="sm" bg="filled">
          BUTTON
        </Button>{" "}
        <Button variant="withBorder" length="sm" bg="filled">
          BUTTON
        </Button>{" "}
        <Button variant="borderWithPlus" length="m" bg="filled">
          BUTTON
        </Button>{" "}
        <Button variant="withBorder" length="m" bg="filled">
          BUTTON
        </Button>{" "}
        <Button variant="borderWithPlus" length="lg" bg="filled">
          BUTTON
        </Button>{" "}
        <Button variant="withBorder" bg="filled" length="lg">
          BUTTON
        </Button>
      </p>
      <br />
      <p>
        <IconButton variant="eyeTwoTone"/>
      <IconButton variant="eyeTwoTone" bg="filled" />
      <IconButton variant="eyeTwoTone" iconColor="colored"/>
      <IconButton variant="eyeTwoTone" bg="filled" iconColor="colored"/>
      <br />
      <IconButton variant="heart"/>
      <IconButton variant="heart" bg="filled" />
      <IconButton variant="heart" iconColor="colored"/>
      <IconButton variant="heart" bg="filled" iconColor="colored"/>
      <br />
      <IconButton variant="plus"/>
      <IconButton variant="plus" iconColor="colored"/>
      <br />
      <IconButton variant="delete"/>
      <IconButton variant="delete" bg="filled" />
      <IconButton variant="delete" iconColor="colored"/>
      <IconButton variant="delete" bg="filled" iconColor="colored"/>
      </p>
    </div>
  );
}
