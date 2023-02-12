import Carousel from 'react-bootstrap/Carousel';
import Misato from "../Characters/Misato.png"
import Misa from "../Characters/Misa.png"
import Mai from "../Characters/Mai.png"
import Lucy from "../Characters/Lucy.png"

function Characters() {
  return (
    <div className='bg-lightWhite'>
        <h1 className='text-center font-weight-bold section design pt-3'>DESIGN</h1>
    <Carousel variant="dark" indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 border-white"
          src={Misato}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 border-white"
          src={Misa}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 border-white"
          src={Mai}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 border-white"
          src={Lucy}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Characters;