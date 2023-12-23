import React from 'react'
import Layout2 from '../layout2'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AdminHomePage = () => {
  return (
  <Layout2>
 <div className='admin-card'>
 <Card style={{ width: '18rem' }} bg={'dark'}
          text={'white'}
          
          className="mb-2">
      <Card.Body>
        <Card.Title>Products</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">dddd</Card.Subtitle>
        <Card.Text>
         Create  , Edit 
        </Card.Text>
        <Button href='/admin-product' >Create</Button>
        <Button href='/admin-product' >Edit</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} bg={'dark'}
          text={'white'}
          
          className="mb-2">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
 </div>
  </Layout2>
  )
}

export default AdminHomePage