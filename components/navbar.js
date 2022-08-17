import Link from "next/link";
import Image from 'next/image'

const Navbar = () => {


    // Component Return
    return (
        <nav className="navbar navbar-expand-md bg-body navbar-body myNavv py-3">
        <div className="container">
            {/* <!-- Brand --> */}
            <Image src="/logo1.jpg" height={50} width={50} className="circle" />
            <h4><span className="text-primary">Wyndham</span>nig
</h4>

            {/* <!-- Hambuger menu : visible @md --> */}
            <h1 className="fw-bold d-flex jac"  data-bs-toggle="collapse" data-bs-target="#navmenu">
                 <span className="text-primary d-md-none">...</span>
            </h1>
            {/* <!-- Nav links --> */}
            <div className="collapse navbar-collapse text-center" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link href='/'><a className="nav-link fw-bold">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/about'><a className="nav-link fw-bold">About Us</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/contact'><a className="nav-link fw-bold">Contact Us</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;