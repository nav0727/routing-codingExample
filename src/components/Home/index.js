import './index.css'

const Home = () => (
  <div className="home-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
      alt="home"
      className="home-img"
    />
    <h1 className="home-heading">Home</h1>
    <p>
      Welcome to My React Project
      <sub>
        <sub className="name"> --Naveen</sub>
      </sub>
    </p>
  </div>
)

export default Home
