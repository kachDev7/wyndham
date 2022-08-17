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
                <i className="bi bi-house h4"></i>
                <p className="lead">Hotel</p>
              </div>
              <div className="p-1">
                <i className="bi bi-pin-map h4"></i>
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
          <h1 className="fw-bold text-dark py-3">OUR FACILITIES</h1>
        </div>
        
        <div className="container">

          {/* Facs */}
          <div className="mt-2">
            <h4 className="fw-bold fac-head pb-2 mb-3">Rooms</h4>
            <div className="fac-box p-sm-5 br-20">
              <div className="d-flex img-box">
                <div className="my-3"><Image src="/room1.webp" height={200} width={300} className="br-10 " /></div>
                <div className="my-3"><Image src="/room2.webp" height={200} width={300} className="br-10 " /></div>
                <div className="my-3"><Image src="/room3.webp" height={200} width={300} className="br-10 " /></div>
              </div>
              {/* <div className="d-block d-sm-none">
                small
              </div> */}
              <div className="pt-sm-5 pt-2  brb-20">
              <h5 className="text-center my-3">Our Fitness Facility</h5>
                <p className=" text-center p-2">This hotel is home to 2 onsite restaurants, perfect for a quick bite to eat. You can sip a beverage at the 2 coffee shops/cafes. Start each morning with continental breakfast, available for a fee from 6:30 AM to 11:00 AM.</p>
                <div className="d-flex jae text-muted py-3">
                  <i className="bi bi-telephone h1"></i>
                  <i className="bi bi-chat h1"></i>
                  <i className="bi bi-whatsapp h1"></i>
                </div>              </div>
            </div>
          </div>
          {/* Facs */}
          <div className="my-5">
            <h4 className="fw-bold fac-head pb-2 mb-3">Dinning</h4>
            <div className="fac-box p-sm-5 br-20">
              <div className="d-flex img-box">
                <div className="my-3"><Image src="/din1.webp" height={200} width={300} className="br-10 " /></div>
                <div className="my-3"><Image src="/din2.webp" height={200} width={300} className="br-10 " /></div>
                <div className="my-3"><Image src="/din3.webp" height={200} width={300} className="br-10 " /></div>
              </div>
              {/* <div className="d-block d-sm-none">
                small
              </div> */}
              <div className="pt-sm-5 pt-2  brb-20">
              <h5 className="text-center my-3">Our Fitness Facility</h5>
                <p className=" text-center p-2">This hotel is home to 2 onsite restaurants, perfect for a quick bite to eat. You can sip a beverage at the 2 coffee shops/cafes. Start each morning with continental breakfast, available for a fee from 6:30 AM to 11:00 AM.</p>
                <div className="d-flex jae text-muted py-3">
                  <i className="bi bi-telephone h1"></i>
                  <i className="bi bi-chat h1"></i>
                  <i className="bi bi-whatsapp h1"></i>
                </div>              </div>
            </div>
          </div>
          {/* Facs */}
          <div className="my-5">
            <h4 className="fw-bold fac-head pb-2 mb-3">Bar</h4>
            <div className="fac-box p-sm-5 br-20">
              <div className="d-flex img-box">
                <div className="my-3"><Image src="/bar1.webp" height={200} width={300} className="br-10 " /></div>
                <div className="my-3"><Image src="/bar2.webp" height={200} width={300} className="br-10 " /></div>
                <div className="my-3"><Image src="/bar3.webp" height={200} width={300} className="br-10 " /></div>
              </div>
              {/* <div className="d-block d-sm-none">
                small
              </div> */}
              <div className="pt-sm-5 pt-2  brb-20">
              <h5 className="text-center my-3">Our Fitness Facility</h5>
                <p className=" text-center p-2">This hotel is home to 2 onsite restaurants, perfect for a quick bite to eat. You can sip a beverage at the 2 coffee shops/cafes. Start each morning with continental breakfast, available for a fee from 6:30 AM to 11:00 AM.</p>
                <div className="d-flex jae text-muted py-3">
                  <i className="bi bi-telephone h1"></i>
                  <i className="bi bi-chat h1"></i>
                  <i className="bi bi-whatsapp h1"></i>
                </div>              </div>
            </div>
          </div>
          {/* Facs */}
          <div className="my-5">
            <h4 className="fw-bold fac-head pb-2 mb-3 box-shd-10">Pools</h4>
            <div className="fac-box p-sm-5 br-20">
              <div className="d-flex img-box">
                <div className="my-3"><Image src="/pool1.webp" height={200} width={300} className="br-10 " /></div>
                <div className="my-3"><Image src="/pool2.webp" height={200} width={300} className="br-10 " /></div>
                {/* <div className="my-3"><Image src="/pool3.webp" height={200} width={300} className="br-10 " /></div> */}
              </div>
              {/* <div className="d-block d-sm-none">
                small
              </div> */}
              <div className="pt-sm-5 pt-2  brb-20">
              <h5 className="text-center my-3">Our Fitness Facility</h5>
                <p className=" text-center p-2">This hotel is home to 2 onsite restaurants, perfect for a quick bite to eat. You can sip a beverage at the 2 coffee shops/cafes. Start each morning with continental breakfast, available for a fee from 6:30 AM to 11:00 AM.</p>
                <div className="d-flex jae text-muted py-3">
                  <i className="bi bi-telephone h1"></i>
                  <i className="bi bi-chat h1"></i>
                  <i className="bi bi-whatsapp h1"></i>
                </div>              </div>
            </div>
          </div>
          {/* Facs */}
          <div className="my-5">
            <h4 className="fw-bold fac-head pb-2 mb-3">Fitness Facility</h4>
            <div className="fac-box p-sm-5 br-20">
              <div className="d-flex img-box">
                <div className="my-3"><Image src="/fit1.webp" height={200} width={300} className="br-10 " /></div>
                <div className="my-3"><Image src="/fit5.webp" height={200} width={300} className="br-10 " /></div>
                <div className="my-3"><Image src="/fit3.webp" height={200} width={300} className="br-10 " /></div>
              </div>
              {/* <div className="d-block d-sm-none">
                small
              </div> */}
              <div className="pt-sm-5 pt-2  brb-20">
                <h5 className="text-center my-3">Our Fitness Facility</h5>
                <p className=" text-center p-2">This hotel is home to 2 onsite restaurants, perfect for a quick bite to eat. You can sip a beverage at the 2 coffee shops/cafes. Start each morning with continental breakfast, available for a fee from 6:30 AM to 11:00 AM.</p>
                <div className="d-flex jae text-muted py-3">
                  <i className="bi bi-telephone h1"></i>
                  <i className="bi bi-chat h1"></i>
                  <i className="bi bi-whatsapp h1"></i>
                </div>
              </div>

            </div>
          </div>


          {/* Feature */}
          <div className="text-center">
            <h1 className="fw-bold text-dark py-3">PROPERTY FEATURES</h1>
          </div>
          <div className=" mx-sm-5">
            <p className="lead text-center">
            Guests staying at Wyndham Dubai Deira enjoy access to a full-service spa, an outdoor pool, and a sauna. There's free valet parking, and an airport shuttle (available 24 hours) for AED 100 per vehicle one-way. The 24-hour front desk has staff standing by to help with luggage storage, dry cleaning/laundry, and tours or tickets. Other amenities at this spa hotel include free WiFi in public areas, conference space, and a 24-hour business center.
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
          <div className="text-center">
            <h1 className="fw-bold text-dark py-3">CONTACT US?</h1>
          </div>

          <div className=" mx-sm-5">
            <p className="lead text-center">
              Reach us via any of the above listed forms. We're always active to <strong>Take Your Calls</strong> or <strong>Chat</strong> with you, So as to profer answers to your questions or Take your reservation orders to the Management prior to your visit to Dubai. 
            </p>
          </div>
          <div className=" d-flex jae">
            <button className="contact-btnB p-2 fw-bold mb-3"><i className="bi bi-telephone h3 mx-2"></i>CALL AGENT</button>
            <button className="contact-btnB p-2 fw-bold mb-3"><i className="bi bi-whatsapp h3 mx-2"></i>LIVE CHAT</button>
          </div>
        </div>
      </main>
    </div>
  )
}
