import "./ProductDescriptionContainer.css";
import truck2 from "../../Assets/Images/Truck2.svg";

const changTo1stDescPanel = () => {
  document.getElementById("desc-panel2").classList.add("hidden-desc-panel");
  document.getElementById("desc-panel1").classList.remove("hidden-desc-panel");
  document
    .getElementById("panel1-btn")
    .classList.add("ProductDescriptionContainer-btn-Activebtn");
  document
    .getElementById("panel2-btn")
    .classList.remove("ProductDescriptionContainer-btn-Activebtn");
};

const changTo2ndDescPanel = () => {
  document.getElementById("desc-panel1").classList.add("hidden-desc-panel");
  document.getElementById("desc-panel2").classList.remove("hidden-desc-panel");
  document
    .getElementById("panel2-btn")
    .classList.add("ProductDescriptionContainer-btn-Activebtn");
  document
    .getElementById("panel1-btn")
    .classList.remove("ProductDescriptionContainer-btn-Activebtn");
};

const ProductDescriptionContainer = ({
  title,
  description,
  DescriptionImage,
}) => {
  return (
    <section id='ProductDescriptionContainer'>
      <div className='ProductDescriptionContainer-tabs'>
        <button
          className='btn ProductDescriptionContainer-tabs-btn ProductDescriptionContainer-btn-Activebtn'
          onClick={changTo1stDescPanel} id="panel1-btn">
          Descritpion
        </button>
        <button
          className='btn ProductDescriptionContainer-tabs-btn'
          onClick={changTo2ndDescPanel} id="panel2-btn">
          Technical specifications
        </button>
      </div>
      <div
        className='row justify-content-center ProductDescriptionContainer-panel'
        id='desc-panel1'>
        <div className='col-10 col-sm-8 col-md-5 col-lg-4 col-xl-3'>
          <img
            src={process.env.PUBLIC_URL+"/image/"+DescriptionImage}
            className='ProductDescriptionContainer-panel-img mx-auto'
          />
        </div>
        <div className='col-10 col-sm-6 col-md-4'>
          <h1 className='ProductDescriptionContainer-panel-title'>{title}</h1>
          <p className='ProductDescriptionContainer-panel-text'>
            {description}
          </p>
        </div>
      </div>
      <div
        className='row justify-content-center ProductDescriptionContainer-panel hidden-desc-panel'
        id='desc-panel2'>
        <div className='col-10 col-sm-6 col-md-4'>
          <h1 className='ProductDescriptionContainer-panel-title'>Test</h1>
          <p className='ProductDescriptionContainer-panel-text'>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDescriptionContainer;