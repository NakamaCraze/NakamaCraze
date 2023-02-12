import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar variant='dark' expand="lg" className="position-absolute w-100 pt-sm-5">
      <Container fluid >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto justify-content-between w-28">
            <Nav.Link className='text-white p-1' href="#"><h6 className='m-0'>Главная</h6> <div className='line-long mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
            <Nav.Link className='text-white p-1' href="#catalog"><h6 className='m-0'>Каталог</h6> <div className='line-short mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
          </Nav>
          <Nav className='justify-content-between w-28'>
            <Nav.Link className='text-white p-1' href="#delivery"><h6 className='m-0'>Доставка</h6> <div className='line-short mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
            <Nav.Link className='text-white p-1' href="#contacts"><h6 className='m-0'>Контакты</h6> <div className='line-long mx-auto bg-yellow d-none d-sm-block'></div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;