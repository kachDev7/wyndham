import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Wyndham Dubai Deira - Nigerian Checkout - Contact</title>
        <meta name="description" content="Nigerian checkout agent for Wyndham Dubai Deira. Get official information about Wyndham Dubai Deira like updates, pricing, properties, staff, etc." />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className="">
        <div className="">
        <div className="text-center text-light lgb-img landing2 d-sm-flex column jae">
            <h3 className='pt-5'>Reach Out To Us!</h3>
            <h1 className="fw-bold mt-3">Wyndham Dubai Deira</h1>
            <h3 className="">- Nigerian Checkout</h3>
            <div className="d-flex column jae">

              <div className="">
                <i className="bi bi-house h4"></i>
                <p className="">4-Star Hotel, Resort.</p>
              </div>
              <div className="">
                <i className="bi bi-geo-alt h4"></i>
                <div className="px-5 landing-text">
                  <p className=" text-center p-2">Sherina Plaza 4 Al Corniche Rd 111 Dubai. Wyndham Dubai Deira is adjacent to Gold Souk with other popular attractions like Dubai Creek within a couple of miles (3 km).</p>
                </div>
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

          <Link href="tel:09138236128"><button className="contact-btn p-3 fw-bold mb-3">CONTACT AGENT</button></Link>

          </div>
        </div>

        <div className="text-center">
          <h1 className="fw-bold text-dark py-3">CONTACT THIS AGENT</h1>
        </div>
        
        <div className="container">

          <div className=" mx-sm-5">
            <p className="lead text-center">
              Reach us via any of the above listed forms. We're always active to <strong>Take Your Calls</strong> or <strong>Chat</strong> with you, So as to profer answers to your questions or Take your reservation orders to the Management prior to your visit to Dubai. 
            </p>
          </div>
          <div className=" d-flex jae">
          <Link href="tel:09138236128"><button className="contact-btnB p-2 fw-bold mb-3"><i className="bi bi-telephone h3 mx-2"></i>CALL AGENT</button></Link>
          <Link href="https://wa.link/iqtxsc"><button className="contact-btnB p-2 fw-bold mb-3"><i className="bi bi-whatsapp h3 mx-2"></i>LIVE CHAT</button></Link>
          </div>


          {/* Feature */}
          <div className="text-center">
            <h1 className="fw-bold text-dark py-3">PROPERTY FEATURES</h1>
          </div>
          <div className=" mx-sm-5">
            <p className="lead text-center">
            We have lots of goodies ready for you! An outdoor pool,  a sauna, there's free valet parking, and an airport shuttle (available 24 hours) for AED 100 per vehicle one-way. The 24-hour front desk has staff standing by to help with luggage storage, dry cleaning/laundry, and tours or tickets. Other amenities at this spa hotel include free WiFi in public areas, conference space, and a 24-hour business center.
            </p>
            <div className="d-sm-flex jae fac-box br-10 p-4">
              <div className="p-1 d-sm-flex jac m-2">
                  <p className=" fw-bold"><i className="bi bi-geo-alt h3 text-light bg-dark br-10 p-2 text-center"></i> Steps from Gold Souk</p>              
              </div>
              <div className="p-1 d-sm-flex jac m-2">
                  <p className=" fw-bold"><i className="bi bi-wifi h3 text-light bg-dark br-10 p-2 text-center"></i> Free WiFi and wired Internet.</p>              
              </div>
              <div className="p-1 d-sm-flex jac m-2">
                  <p className="fw-bold"><i className="bi bi-cup-straw h3 text-light bg-dark br-10 p-2 text-center"></i> Onsite Dinning</p>              
              </div>
              <div className="p-1 d-sm-flex jac m-2">
                  <p className="fw-bold"><i className="bi bi-funnel h3 text-light bg-dark br-10 p-2 text-center"></i> Free Vehicle PMS</p>              
              </div>
            </div>
          </div>

          {/* Why us */}
          <div className="text-center">
            <h1 className="fw-bold text-dark py-3">WHY US?</h1>
          </div>
          <div className=" mx-sm-5">
            <p className="lead text-center">
            Guests staying at Wyndham Dubai Deira enjoy access to a full-service spa, an outdoor pool, and a sauna. There's free valet parking, and an airport shuttle (available 24 hours) for AED 100 per vehicle one-way. The 24-hour front desk has staff standing by to help with luggage storage, dry cleaning/laundry, and tours or tickets. Other amenities at this spa hotel include free WiFi in public areas, conference space, and a 24-hour business center.
            </p>
          </div>
          {/* Why us */}

          
        </div>
      </main>
    </div>
  )
}
