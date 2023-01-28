import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="position-absolute w-100 pt-5">
      <Container fluid >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto justify-content-between w-28">
            <Nav.Link className='text-white' href="#"><h6 className='m-0'>Главная</h6> <div className='line-long mx-auto bg-yellow'></div></Nav.Link>
            <Nav.Link className='text-white' href="#catalog"><h6 className='m-0'>Каталог</h6> <div className='line-short mx-auto bg-yellow'></div></Nav.Link>
          </Nav>
          <Nav className='justify-content-between w-28'>
            <Nav.Link className='text-white' href="#delivery"><h6 className='m-0'>Доставка</h6> <div className='line-short mx-auto bg-yellow'></div></Nav.Link>
            <Nav.Link className='text-white' href="#contacts"><h6 className='m-0'>Контакты</h6> <div className='line-long mx-auto bg-yellow'></div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;