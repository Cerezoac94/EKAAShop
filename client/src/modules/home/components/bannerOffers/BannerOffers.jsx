import ImgBanner from "../../../../assets/Cooleryeti_a.png";
const BannerOffers = () => {
  return (
    <section>
      Este es el banner de ofertas del home
      <section className="bannerHome">
        {/* variant="top" */}
        <img className="bannerHome__img" src={ImgBanner} alt="banner" />

        <article className="bannerHome__container">
          <button className="bannerHome__btn" variant="primary">
           Ver más 
          </button>
          <div className="bannerHome__contText">
            <h2 className="bannerHome__h2">Obténlo con un 20% de descuento</h2>
            <span className="bannerHome__span">TUNDRA 65 HARD COOLER</span>
          </div>
          <button className="bannerHome__btn" variant="primary">
          Comprar
          </button>
        </article>
      </section>
    </section>
  );
};
export default BannerOffers;
