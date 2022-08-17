import Link from "next/link";

const Footer = () => {
    return (
        <div className="do">
            <footer className="bg-dark me">
                {/* Follow icons */}
                <div className="d-flex align-items-center"></div>
                <div className="py-5 bg-dark text-center text-secondary">
                    <Link href='/'><a className="text-secondary nav-link fw-bold ">Home</a></Link>
                    <Link href='/contact'><a className=" text-secondary nav-link fw-bold">Contact</a></Link>
                    <Link href='/about'><a className="text-secondary nav-link fw-bold">About Us</a></Link>
                    <p>Wyndham Dubai Deira - Nigerian Checkout &copy; 2021-22</p>
                    <p className="fw-bold">Contact Us:</p>
                    <p className="lead">To Contact us kindly make a call to the Nigerian Agent, <strong><Link href="tel:09138236128">here...</Link></strong></p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;