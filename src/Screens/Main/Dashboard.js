import React from "react"
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap"
import { SERVER_URL } from "../../constants"

const Dashboard = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          sm={{
            size: 6,
            offset: 3,
          }}
          className="mt-3"
        >
          <Form
            action={`${SERVER_URL}/songs/upload`}
            method="post"
            encType="multipart/form-data"
          >
            <FormGroup>
              <Label for="fileInput" className="text-white">
                Upload Music (MP3 Type Only)
              </Label>
              <Input id="fileInput" name="file" type="file" />
            </FormGroup>
            <FormGroup className="text-center">
              <Button color="primary">Upload</Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard
