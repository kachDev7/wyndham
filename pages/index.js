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
                <p className=" text-center p-2">43-inch TVs come with cable channels. Bathrooms offer rainfall showers, hair dryers, and free toiletries. Minibars, electric kettles, and safes are other standard amenities. Change of towels is available on request.</p>
              </div>
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
                <p className=" text-center p-2">This hotel is home to 2 onsite restaurants, perfect for a quick bite to eat. You can sip a beverage at the 2 coffee shops/cafes. Start each morning with continental breakfast, available for a fee from 6:30 AM to 11:00 AM.</p>
              </div>
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
                <p className=" text-center p-2">This hotel is home to 2 onsite restaurants, perfect for a quick bite to eat. You can sip a beverage at the 2 coffee shops/cafes. Start each morning with continental breakfast, available for a fee from 6:30 AM to 11:00 AM.</p>
              </div>
            </div>
          </div>
          {/* Facs */}
          <div className="my-5">
            <h4 className="fw-bold fac-head pb-2 mb-3">Pools</h4>
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
                <p className=" text-center p-2">This hotel is home to 2 onsite restaurants, perfect for a quick bite to eat. You can sip a beverage at the 2 coffee shops/cafes. Start each morning with continental breakfast, available for a fee from 6:30 AM to 11:00 AM.</p>
              </div>
            </div>
          </div>
          {/* Facs */}
          <div className="my-5">
            <h4 className="fw-bold fac-head pb-2 mb-3">Fitness Facility</h4>
            <div className="fac-box p-sm-5 br-20">
              <div className="d-flex img-box">
                <div className="my-3"><Image src="/fit1.webp" height={200} width={300} className="br-10 " /></div>
                <div className="my-3"><Image src="/fit4.webp" height={200} width={300} className="br-10 " /></div>
                <div className="my-3"><Image src="/fit3.webp" height={200} width={300} className="br-10 " /></div>
              </div>
              {/* <div className="d-block d-sm-none">
                small
              </div> */}
              <div className="pt-sm-5 pt-2  brb-20">
                <p className=" text-center p-2">This hotel is home to 2 onsite restaurants, perfect for a quick bite to eat. You can sip a beverage at the 2 coffee shops/cafes. Start each morning with continental breakfast, available for a fee from 6:30 AM to 11:00 AM.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
