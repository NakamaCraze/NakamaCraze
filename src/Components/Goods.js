import { Container, Image } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import before from "../1.png"
import after from "../2.png"
import MisatoPink from "../Colors/MisatoPink.png"
import price from "../price.png"
import MisatoGreen from "../Colors/MisatoGreen.png"
import MisatoRed from "../Colors/MisatoRed.png"
import MisatoWhite from "../Colors/MisatoWhite.png"
import MisatoBlack from "../Colors/MisatoBlack.png"

function Goods() {
    return (
        <div id="catalog">
            <h1 className='text-center bg-yellow section py-3'>ШМОТ</h1>
            <Container fluid className="pt-5">
                <Row>
                    <Col sm={7}>
                        <Carousel interval={null} controls={false}>
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
                    <Col className="text-center pb-5 d-grid" sm={5}>
                        <div>
                        <h1 className="text-yellow m-0 RoadRadio name">HOODIE "MISATO"</h1>
                        <div className="text-white mb-4 pb-2 h4">EVANGELION</div>
                        <div className="border-top d-grid d-sm-flex border-bottom py-2 mb-2 align-items-center justify-content-center">
                            <div className="d-flex">                            
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
                            </div>
                            <div className="d-flex justify-content-center">
                            <h2 className="text-white border-right px-2 my-2 RoadRadio">S</h2>
                            <h2 className="text-white border-right px-2 my-2 RoadRadio">M</h2>
                            <h2 className="text-white px-2 my-2 RoadRadio">L</h2>
                            </div>
                        </div>
                        <div className="d-flex p-3 mb-3 justify-content-center">
                            <img className="quote" alt="before" src={before} />
                            <p className="text-white pt-3 align-items-center d-flex">ЭТО ВЗРОСЛЫЙ ПОЦЕЛУЙ, ОСТАЛЬНОЕ БУДЕТ КОГДА ВЕРНЕШЬСЯ</p>
                            <img className="quote mt-5" alt="after" src={after} />
                        </div>
                        </div>
                            <Image fluid
                            className="align-self-end mx-auto"
                                src={price}
                            />
                    </Col>
                </Row>
            </Container >
        </div >
    );
}

export default Goods;