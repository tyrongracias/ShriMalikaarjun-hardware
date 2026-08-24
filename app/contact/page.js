import { Header, Footer } from "../components/SiteChrome";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="page">
        <div className="container">

          <p className="kicker">GET IN TOUCH</p>

          <h1>Talk to the store.</h1>

          <p className="lead">
            For product availability, colours, sizes, project requirements or
            general enquiries, call or WhatsApp us.
          </p>

          <div className="contact-grid pro-contact">

            {/* STORE */}
            <div className="contact-card">
              <span className="contact-icon">01</span>

              <h3>STORE</h3>

              <p>
                Shop No. 6, Vijayabai Complex, 224/BG/4
                <br />
                Near Ravindra Bhavan &amp; St. Teresa&apos;s Church
                <br />
                Church Street Road, Chaudi
                <br />
                Goa – 403702
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shri+Malikarjun+Hardware+%26+Paints,+Chaudi,+Goa"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                GET DIRECTIONS ↗
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="contact-card">
              <span className="contact-icon">02</span>

              <h3>WHATSAPP</h3>

              <p>
                Send us a product requirement or project enquiry.
              </p>

              <a
                href="https://wa.me/918310248961"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                MESSAGE US ↗
              </a>
            </div>

            {/* CALL */}
            <div className="contact-card">
              <span className="contact-icon">03</span>

              <h3>CALL</h3>

              <p>
                +91 83102 48961
                <br />
                Store Number
              </p>

              <a
                href="tel:+918310248961"
                className="text-link"
              >
                CALL NOW ↗
              </a>
            </div>

          </div>

          {/* GOOGLE MAP */}
          <div className="map-embed wide">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.85778393196796!2d74.0453690848158!3d15.00798854638001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbe5ab933a5ce7b%3A0x3e94529d11da8fad!2sCanacona%2C%20Goa!5e0!3m2!1sen!2sin!4v1787552315374!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
