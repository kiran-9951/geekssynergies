import React from 'react';
import { Card } from 'react-bootstrap';

const ContactMenu = () => {
  return (
    <Card className="mt-5">
      <Card.Header as="h5" className="text-center">Company Information</Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>Company:</strong> Geeksynergy Technologies Pvt Ltd
        </Card.Text>
        <Card.Text>
          <strong>Address:</strong> Sanjayanagar, Bengaluru-56
        </Card.Text>
        <Card.Text>
          <strong>Phone:</strong> XXXXXXXXX09
        </Card.Text>
        <Card.Text>
          <strong>Email:</strong> XXXXXX@gmail.com
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ContactMenu;
