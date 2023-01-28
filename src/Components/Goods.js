import { Container,Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import before from "../1.png"
import after from "../2.png"
import MisatoPink from "../Colors/MisatoPink.png"
import Button from 'react-bootstrap/Button';
import MisatoGreen from "../Colors/MisatoGreen.png"
import MisatoRed from "../Colors/MisatoRed.png"
import MisatoWhite from "../Colors/MisatoWhite.png"
import MisatoBlack from "../Colors/MisatoBlack.png"

function Goods() {
    return (
        <div className="mb-5" id="catalog">
            <h1 className='mb-5 text-center bg-yellow section'>ШМОТ</h1>
            <Container fluid className="pt-5">
                <Row>
                    <Col sm={7}>
                        <Carousel  controls={false}>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MisatoPink}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MisatoGreen}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MisatoRed}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image fluid
                                    className="d-block w-100"
                                    src={MisatoWhite}
                                    alt="Fourht slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MisatoBlack}
                                    alt="Fith slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="text-center" sm={5}>
                        <h1 className="text-yellow m-0">HOODIE "MISATO"</h1>
                        <h4 className="text-white mb-4 pb-2">EVANGELION</h4>
                        <div className="border-top border-bottom px-3 py-2 d-flex mb-3">
                            <Col className=" d-flex justify-content-end align-items-center me-4">
                                <input type="radio" className="btn-check" name="misato_color" id="misato_option1" autoComplete="off" />
                                <label className=" color red shadow mx-1" for="misato_option1"></label>

                                <input type="radio" className="btn-check" name="misato_color" id="misato_option2" autoComplete="off" />
                                <label className=" color green shadow " for="misato_option2"></label>

                                <input type="radio" className="btn-check" name="misato_color" id="misato_option3" autoComplete="off" />
                                <label className=" color pink shadow mx-1" for="misato_option3"></label>

                                <input type="radio" className="btn-check" name="misato_color" id="misato_option4" autoComplete="off" />
                                <label className=" color white shadow " for="misato_option4"></label>

                                <input type="radio" className="btn-check" name="misato_color" id="misato_option5" autoComplete="off" />
                                <label className=" color black shadow mx-1" for="misato_option5"></label>
                            </Col>
                            <Col className="d-flex align-middle">
                                <h2 className="text-white border-right px-2 my-2">S</h2>
                                <h2 className="text-white border-right px-2 my-2">M</h2>
                                <h2 className="text-white px-2 my-2">L</h2>
                            </Col>
                        </div>
                        <div className="d-flex p-3 mb-5">
                            <img className="quote" alt="before" src={before} />
                            <p className="text-white pt-3">ЭТО ВЗРОСЛЫЙ ПОЦЕЛУЙ, ОСТАЛЬНОЕ БУДЕТ КОГДА ВЕРНЕШЬСЯ</p>
                            <img className="quote mt-5" alt="after" src={after} />
                        </div>
                        <div className="py-3">
                        <Button className="rounded-pill buy-btn px-5 text-white py-0" >
                            17.900 ₸
                        </Button>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default Goods;