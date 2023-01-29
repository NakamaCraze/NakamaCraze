import { Image,Container } from "react-bootstrap"
import phone from "../Colors/phone.png"
import instagram from "../Colors/instagram.png"
import craze from "../Colors/craze.png"

function Contacts() {
    return (
        <footer className="bg-yellow d-flex text-center " id="contacts">
            <Container fluid className="py-4">
            <a className="p text-black footerLink" href="tel:+77478705751" role="button">
                <Image fluid className="me-2 " src={phone} alt="" />+7 (747)870-57-51
            </a>
            <a className="mx-5" href="#!" role="button">
                <Image className="footerlogo" src={craze} alt="" />
            </a>
            <a className="p text-black footerLink" href="https://instagram.com/nakama.craze?igshid=YmMyMTA2M2Y=" role="button">
                <Image className="me-2 " src={instagram} alt="" />NACAMA.CRAZE
            </a>
            </Container>
        </footer>
    )
}
export default Contacts;