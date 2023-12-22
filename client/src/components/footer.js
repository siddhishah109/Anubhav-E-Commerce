import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter  className='footer text-center text-lg-start '>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='facebook-f' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='twitter' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='google' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='instagram' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='linkedin' />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon color='secondary' fab icon='github' />
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon color='secondary' icon='gem' className='me-3' />
              Anubhav
            </h6>
            <p>
            Dive into Anubhav – where shopping meets innovation. Uncover curated collections, snag exclusive deals, and redefine your style. Anubhav: because your lifestyle deserves a touch of extraordinary!
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='text-reset'>
                Clothing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Footwear
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Bags
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                And much more..
              </a>
            </p>
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Admin
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon color='secondary' icon='home' className='me-2' />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon color='secondary' icon='envelope' className='me-3' />
              info@example.com
            </p>
            <p>
              <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2024 Copyright: 
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        Anubhav.com
      </a>
    </div>
  </MDBFooter>
  )
}

export default Footer