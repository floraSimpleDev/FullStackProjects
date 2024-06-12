import apartment from "../assets/apartment.svg";

const Hero = () => {
  return (
    <section className="py-16 bg-[#493e99] flex justify-center">
      <div className="container flex justify-between flex-wrap">
        <article className="container mx-auto flex flex-col gap-2 pl-40 w-1/2">
          <h1 className="text-5xl text-white font-bold pb-10">
            Find your next hotel with Azure Heaven
          </h1>
          <p className="text-2xl text-white">
            Staying at a comfortable hotel or inn is one of the best ways to
            enjoy a trip, be it for a vacation or a business trip. At Azure
            Heaven, you can easily find the right hotel or inn plus according to
            your budget.
          </p>
        </article>
        <figure className="w-1/2 pr-40 flex justify-end">
          <img
            src={apartment}
            alt="apartment title image"
            width={450}
            draggable="false"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
