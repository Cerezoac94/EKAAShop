import ImgBanner from "../../../../assets/Cooleryeti_a.png";
const BannerOffers = () => {
  return (
    <>
      <section className="ofertaContainer">
        <section className="ofertaContainer__cont">
          <picture className="pictureCont" >
            <img
              className="pictureCont__img"
              src={ImgBanner}
              alt="Banner"
            />
          </picture>

          <section className="ofertaContainer__oferta">
            <button className="ofertaContainer__offerBtn">Ver mas</button>
            <section >
              <h2 className="ofertaContainer__h2">
                Obténlo con un 20% de descuento
              </h2>
              <span className="ofertaContainer__span">
                TUNDRA 65 HARD COOLER
              </span>
            </section>
            <button className="ofertaContainer__offerBtn">Comprar</button>
          </section>
        </section>
      </section>

      {/* <section className="bannerHome">
      <section className="bannerHome">
       
        <img className="bannerHome__img"  alt="banner" />

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
    </section> */}
    </>
  );
};
export default BannerOffers;
