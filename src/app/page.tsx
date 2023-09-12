import Button from './components/Buttons';


export default function Home() {
  return (
    <div>
      Button varients
      <p><Button variant="clear" >BUTTON</Button>
     <Button variant="withPlus">BUTTON</Button> <Button variant="borderWithPlus" length="sm">BUTTON</Button> <Button variant="withBorder"  length="sm">BUTTON</Button> <Button variant="borderWithPlus" length="m">BUTTON</Button> <Button variant="withBorder"  length="m" >BUTTON</Button> <Button variant="borderWithPlus" length="lg">BUTTON</Button> <Button variant="withBorder" length="lg">BUTTON</Button> <Button variant="borderWithPlus" length="sm" bg="filled">BUTTON</Button> <Button variant="withBorder"  length="sm" bg="filled">BUTTON</Button> <Button variant="borderWithPlus" length="m" bg="filled">BUTTON</Button> <Button variant="withBorder"  length="m" bg="filled">BUTTON</Button> <Button variant="borderWithPlus" length="lg" bg="filled">BUTTON</Button> <Button variant="withBorder"  bg="filled">BUTTON</Button>
     </p>
      
      
    </div>
  )
}
