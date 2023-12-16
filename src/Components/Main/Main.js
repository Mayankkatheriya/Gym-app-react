import './Main.css'
import image from './istockphoto-164654160-612x612.jpg'


const Main = () => {
  return (
    <main>
      <section className="main-img">
        <img src={image} alt="" />
        <div className="main-img-icons">
            <i class='bx bx-chevron-left'></i>
            <i class='bx bx-chevron-right' ></i>
        </div>
      </section>
      <section className="info-box">
        <h1>Think Health. Think Massage</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur esse nam natus nobis minus cumque?</p>
        <div className="main-btn-box">
            <a href="/">learn more about us</a>
            <a href="/">contact us today</a>
        </div>
      </section>
      <section className="quotes-container">
        <div className="quotes">
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni aut reiciendis tempora repellat magnam aliquam, modi soluta unde commodi perspiciatis.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione consequatur, veniam earum beatae inventore numquam quibusdam laboriosam, labore, libero accusantium deserunt officiis quae sint.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis nemo, illo ipsam maiores exercitationem saepe quasi asperiores.
        </p>
        </div>
      </section>
      <section className="address">
        <h2>Family wellness massage therapy</h2>
        <p>9876 Main Street, Suite 123, Mainland, ML12345</p>
        <p>Phone: 987,654,3210</p>
      </section>
    </main>
  )
}

export default Main
