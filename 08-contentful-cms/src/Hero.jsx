import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Gorpcore chambray authentic, pour-over hammock cloud bread Brooklyn
            sustainable vexillologist tousled viral prism lomo. Enamel pin synth
            farm-to-table quinoa. Deep v hexagon stumptown JOMO heirloom bruh
            swag beard shoreditch bicycle rights banh mi umami photo booth tbh.
            Organic activated charcoal tumblr, squid gastropub seitan blackbird
            spyplane chambray YOLO. Small batch gluten-free whatever blue bottle
            neutral milk hotel.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' className='img' />
        </div>
      </div>
    </section>
  )
}
export default Hero
