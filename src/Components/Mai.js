import { Container,Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import before from "../1.png"
import after from "../2.png"
import MaiPink from "../Colors/MaiPink.png"
import Button from 'react-bootstrap/Button';
import MaiGreen from "../Colors/MaiGreen.png"
import MaiRed from "../Colors/MaiRed.png"
import MaiWhite from "../Colors/MaiWhite.png"
import MaiBlack from "../Colors/MaiBlack.png"

function Mai() {
    return (
        <div className="mb-5">
            <div className="bg-yellow py-1"></div>
            <Container fluid className="pt-5">
                <Row>
                    <Col sm={7}>
                        <Carousel  controls={false}>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MaiPink}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MaiGreen}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MaiRed}
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image fluid
                                    className="d-block w-100"
                                    src={MaiWhite}
                                    alt="Fourht slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item className="fadex">
                                <Image fluid
                                    className="d-block w-100"
                                    src={MaiBlack}
                                    alt="Fith slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col className="text-center" sm={5}>
                        <h1 className="text-yellow m-0">HOODIE "MISA"</h1>
                        <h4 className="text-white mb-4 pb-2">DEATH NOTE</h4>
                        <div className="border-top border-bottom px-3 py-2 d-flex mb-3">
                            <Col className=" d-flex justify-content-end align-items-center me-4">
                                <input type="radio" className="btn-check" name="Mai_color" id="Mai_option1" autoComplete="off" />
                                <label className=" color red shadow mx-1" for="Mai_option1"></label>

                                <input type="radio" className="btn-check" name="Mai_color" id="Mai_option2" autoComplete="off" />
                                <label className=" color green shadow " for="Mai_option2"></label>

                                <input type="radio" className="btn-check" name="Mai_color" id="Mai_option3" autoComplete="off" />
                                <label className=" color pink shadow mx-1" for="Mai_option3"></label>

                                <input type="radio" className="btn-check" name="Mai_color" id="Mai_option4" autoComplete="off" />
                                <label className=" color white shadow " for="Mai_option4"></label>

                                <input type="radio" className="btn-check" name="Mai_color" id="Mai_option5" autoComplete="off" />
                                <label className=" color black shadow mx-1" for="Mai_option5"></label>
                            </Col>
                            <Col className="d-flex align-middle">
                                <h2 className="text-white border-right px-2 my-2">S</h2>
                                <h2 className="text-white border-right px-2 my-2">M</h2>
                                <h2 className="text-white px-2 my-2">L</h2>
                            </Col>
                        </div>
                        <div className="d-flex p-3 mb-5 justify-content-center">
                            <img className="quote" alt="before" src={before} />
                            <p className="text-white pt-3">СМЕРТЬ? КАКАЯ ПРЕЛЕСТЬ!</p>
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

export default Mai;