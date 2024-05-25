import Slider1 from "../assets/images/slider1.png";
import Slider2 from "../assets/images/slider.png";
import Slider3 from "../assets/images/slider2.png";

const Slider = () => {
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={Slider1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Slider2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={Slider3} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
