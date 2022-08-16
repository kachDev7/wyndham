import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Wyndham Dubai Deira - Nigerian Checkout</title>
        <meta name="description" content="Nigerian checkout agent for Wyndham Dubai Deira. Get official information about Wyndham Dubai Deira like updates, pricing, properties, staff, etc." />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="">
        <div className="">
          <div className="text-center text-light lgb-img landing d-sm-flex column jae">
            <h3 className='pt-5'>Welcome to </h3>
            <h1 className="fw-bold mt-3">Wyndham Dubai Deira</h1>
            <h3 className="">- Nigerian Checkout</h3>
            <div className="d-flex jae">
              <div className="p-1">
                <i className="bi bi-x-circle h1"></i>
                <p className="lead">Hotel</p>
              </div>
              <div className="p-1">
                <i className="bi bi-x-circle h1"></i>
                <p className="lead">Location</p>
              </div>
              
              {/* <div className="p-1">
                <i className="bi bi-x-circle h1"></i>
                <p className="lead">Hospitality</p>
              </div>
              <div className="p-1">
                <i className="bi bi-x-circle h1"></i>
                <p className="lead">Rating</p>
              </div> */}
            </div>
            <div className="py-3 px-5 landing-text">
                <p>Located in Deira, Wyndham Dubai Deira is adjacent to Gold Souk with other popular attractions like Dubai Creek within a couple of miles (3 km).</p>
            </div>
          <button className="contact-btn p-3 fw-bold mb-3">CONTACT AGENT</button>

          </div>
        </div>
        
      </main>
    </div>
  )
}
