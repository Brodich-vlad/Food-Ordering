import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <HomeMenu/>
      <section className="text-center my-16" id="about">
        <SectionHeaders 
          subHeader={'Our story'} 
          mainHeader={'About us'}/>
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates reprehenderit perspiciatis officiis laborum, natus dolor sequi ipsa totam voluptatum quidem odit, dicta itaque, laboriosam explicabo mollitia? Itaque, veritatis maxime.
          </p>
          <p className="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae neque eum adipisci, facere odit sint fuga, ex, cum voluptate reiciendis eos qui. Voluptatum incidunt necessitatibus quo aliquam fuga minus consequuntur?
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae culpa sed, laborum iusto totam accusamus vero ullam. Voluptates, provident itaque ab, a ducimus quia natus odit sint vitae, eum illum.</p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders 
          subHeader={'Don\'t hesitae'} 
          mainHeader={'Contact us'}/>
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" 
          href="tel:+380677606508">
            +3 8 067 760 65 08</a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2026 All rights reserved
      </footer>
    </>
  );
}
