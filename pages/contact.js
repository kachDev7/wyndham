import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
          <div className="text-center text-light lgb-img landing d-sm-flex column jae">
            <h3 className='pt-5'>Reach Out To Us!</h3>
            <h1 className="fw-bold mt-3">Wyndham Dubai Deira</h1>
            <h3 className="">- Nigerian Checkout</h3>
            <div className="d-flex jae">
              <div className="p-1">
                <i className="bi bi-house h1"></i>
                <p className="lead">Hotel</p>
              </div>
              <div className="p-1">
                <i className="bi bi-pin-map h1"></i>
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
                <p className=" text-center p-2">This hotel is home to 2 onsite restaurants, perfect for a quick bite to eat. You can sip a beverage at the 2 coffee shops/cafes. Start each morning with continental breakfast, available for a fee from 6:30 AM to 11:00 AM.</p>
            </div>
          <button className="contact-btn p-3 fw-bold mb-3">CONTACT AGENT</button>

          </div>
        </div>

        <div className="text-center">
          <h1 className="fw-bold text-dark py-3">CONTACT THIS AGENT</h1>
        </div>
        
        <div className="container">

         

            
          Contact us


          {/* Feature */}
          <div className="text-center">
            <h1 className="fw-bold text-dark py-3">PROPERTY FEATURES</h1>
          </div>
          <div className="text-center mx-sm-5">
            <p className="lead">
            Guests staying at Wyndham Dubai Deira enjoy access to a full-service spa, an outdoor pool, and a sauna. There's free valet parking, and an airport shuttle (available 24 hours) for AED 100 per vehicle one-way. The 24-hour front desk has staff standing by to help with luggage storage, dry cleaning/laundry, and tours or tickets. Other amenities at this spa hotel include free WiFi in public areas, conference space, and a 24-hour business center.
            </p>
            <div className="d-sm-flex jae">
              <div className="p-1 d-sm-flex jac">
                  <p className=" fw-bold"><i className="bi bi-pin-map h3 text-light bg-dark br-10 p-2 text-center"></i> Steps from Gold Souk</p>              
              </div>
              <div className="p-1 d-sm-flex jac">
                  <p className="text-center fw-bold"><i className="bi bi-wifi h3 text-primary"></i> Free WiFi and wired Internet in public areas</p>              
              </div>
              <div className="p-1 d-sm-flex jac">
                  <p className=" text-center fw-bold"><i className="bi bi-cup-hot h3 text-primary"></i> Onsite Dinning</p>              
              </div>
              <div className="p-1 d-sm-flex jac">
                  <p className=" text-center fw-bold"><i className="bi bi-p-circle h3 text-primary"></i> Free Valet Parking</p>              
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  )
}
