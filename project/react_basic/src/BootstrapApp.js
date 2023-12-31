import { Button, Stack } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function BootstrapApp() {

  return (
    
    <Stack direction="horizontal" gap={2}>
    <Button as="a" variant="primary">
      Button as link
    </Button>
    <Button as="a" variant="success">
      Button as link
    </Button>
  </Stack>

  );
}

export default BootstrapApp;
