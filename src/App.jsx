import Button from './button'
import Group from './group'

function App() {

  return (
    <>
      <h1>Buttons</h1>

      <h3>Default</h3>
      <Group>
        <Button>Default</Button>
        <Button disableShadow={true}>DisableShadow</Button>
        <Button disabled={true}>Disabled</Button>
      </Group>

      <h3>Ouline</h3>
      <Group>
        <Button variant="outline" color="primary">Outline</Button>
        <Button variant="outline" color="primary" disabled>Disabled</Button>
      </Group>

      <h3>Text</h3>
      <Group>
        <Button variant="text" color="secundary">Text</Button>
        <Button variant="text" disabled>Disable</Button>
      </Group>

      <h3>Button Icon</h3>
      <Group>
        <Button endIcon="face" color="primary">Start Icon</Button>
        <Button startIcon="home" color="secundary" disableShadow={true}>End Icon</Button>
        <Button endIcon="phone" disabled>Button Icon Disabled</Button>
      </Group>

      <h3>Colors</h3>
      <Group>
        <Button color="primary">Primary</Button>
        <Button color="secundary">Secundary</Button>
        <Button color="danger">Danger</Button>
        <Button defau>Default</Button>
      </Group>

      <h3>Sizes</h3>
      <Group>
        <Button size="sm">Small</Button>
        <Button color="primary" size="md">Medium</Button>
        <Button color="secundary" size="lg">Large</Button>
        <Button color="danger" size="xl">Extra Lage</Button>
      </Group>
    </>
  )
}

export default App;
