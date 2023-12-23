import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Layout2 from '../layout2';
import InputTag from '../inputTag';


const AdminProduct = () => {
    const [validated, setValidated] = useState(false);
    const [filePreviews, setFilePreviews] = useState([]);

    const handleFileChange = (event) => {
        const files = event.target.files;
      
        Array.from(files).forEach((file) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            setFilePreviews((prevPreviews) => [...prevPreviews, e.target.result]);
          };
          reader.readAsDataURL(file);
        });
      
        console.log(filePreviews);
      };
      const handleRemoveImage = (index) => {
        console.log(filePreviews)
        setFilePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
       
      };
      const getTagsFromInput = () => {
        const tagsInput = document.getElementById('tag');
        const tagsValue = tagsInput.value;
        const tagsArray = tagsValue.split(',').map((tag) => tag.trim());
        const filteredTags = tagsArray.filter((tag) => tag !== '');
        return filteredTags;
      };
      const getColorFromInput = () => {
        const colorsInput = document.getElementById('color'); 
        const colorsValue = colorsInput.value;
        const colorsArray = colorsValue.split(',').map((color) => color.trim());
        const filteredColors = colorsArray.filter((color) => color !== '');
        return filteredColors;
      };
      const getSizeFromInput = () => {
        const sizesInput = document.getElementById('size'); 
        const sizesValue = sizesInput.value;
        const sizesArray = sizesValue.split(',').map((size) => size.trim());
        const filteredSizes = sizesArray.filter((size) => size !== '');
        return filteredSizes;
      };
      

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        //   setValidated(true);
        //   return;
        }
        const formData = new FormData(form);
        const productData = {
            name: formData.get('name'),
            brand: formData.get('brand'),
            category: formData.get('category'),
            description: formData.get('description'),
            price: formData.get('price'),
            countInStock: formData.get('countInStock'),
            manufacturer: formData.get('manufacturer'), // Adjust accordingly
            // Add other fields as needed
          };

        productData.images = filePreviews;
        productData.tags = getTagsFromInput();
        productData.color = getColorFromInput();
        productData.size = getSizeFromInput();

        console.log(productData);
        event.preventDefault();
        event.stopPropagation();
        // setValidated(true);

       
      };


  return (
    <Layout2>
<div className='admin-create-product'>
<Form noValidate validated={validated} onSubmit={handleSubmit} className='product-form'>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="name">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Product"
            name="name"
            
          />
          <Form.Control.Feedback type="invalid">Please provide a valid Name</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Brand"
            brand="brand"
           
          />
          <Form.Control.Feedback type="invalid">Please provide a valid Brand</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="category">
          <Form.Label>Category</Form.Label>
   
            <Form.Control
              type="text"
              placeholder="Category"
              aria-describedby="inputGroupPrepend"
              category="category"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Category.
            </Form.Control.Feedback>
       
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Add description" description="description" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid description.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" price="price" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Price.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="countInStock">
          <Form.Label>Count In Stock</Form.Label>
          <Form.Control type="number" placeholder="countInStock" countInStock="countInStock"required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid countInStock.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="manufacturer">
          <Form.Label>Manufacturer</Form.Label>
          <Form.Control type="text" placeholder="manufacturer" manufacturer="manufacturer" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid manufacturer.
          </Form.Control.Feedback>
        </Form.Group>
          <Form.Group as={Col} md="9" controlId="validationCustom04">
            <Form.Label>File</Form.Label>
            <Form.Control
              type="file"
              required
              name="file"
              multiple
              onChange={handleFileChange}
            />
            <Form.Control.Feedback type="invalid" >
            Please select one or more files and Please select only images.
            </Form.Control.Feedback>
          </Form.Group>
        
      </Row>
      <Row>
        <Form.Group as={Col} md="12" className="mb-3" controlId="tag">
          <Form.Label>Tags</Form.Label>
          <InputTag placeholder='Pls enter for new Tag'/>
        </Form.Group>
        
      </Row>
      <Row>
      <Form.Group as={Col} md="12" className="mb-3" controlId="color">
          <Form.Label>Color (only hash value)</Form.Label>
          <InputTag placeholder='Pls enter for new Color'/>
        </Form.Group>
       
      </Row>
      <Row>
      <Form.Group as={Col} md="12" className="mb-3" controlId="size">
          <Form.Label>Size</Form.Label>
          <InputTag placeholder='Pls enter for new Size'/>
         
        </Form.Group>
      </Row>
      
      
    
      <Button type="submit" className='mt-3'>Submit form</Button>
          {filePreviews.length > 0 && (
            <Row>
              <Col md="12">
                <h5>File Previews</h5>
                <div className="file-preview-container">
                  {filePreviews.map((preview, index) => (
                    <div key={index} className="image-preview">
                      <img src={preview} alt={`File Preview ${index}`} className="file-preview" />
                      <Button variant="danger" onClick={() => handleRemoveImage(index)}>
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          )}
    </Form>

</div>
    </Layout2>
  )
}

export default AdminProduct