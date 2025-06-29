import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Burger from '../../assets/hero/hero-2.png';

function Section1() {
  return (
    <section className="hero_section">
        <Container>
            <Row>
                <Col lg={7} className='mb-5 mb-lg-0'>
                <div className='position-relative'>
                    <img src={Burger} className='img-fluid' alt='Hero'/>
                    <div className='price_badge'>
                        <div className='badge_text'>
                            <h4 className='h4_xs'>Only</h4>
                             <h4 className='h3_lg'>$6.99</h4>
                        </div>
                    </div>
                </div>
                </Col>
                <Col lg={5}>
                <div className='hero_text text_centre'>
                    <h1 className='text-white'>New Burger</h1>
                    <h2 className='text-white'>With Onion</h2>
                    <p className='text-white pt-2 pb-4'>Feugiat primis ligula risus auctor la0reet augue egestas mauris
                        viverra tortor in iaculis pretium at magna mauris ipsum primis 
                        rhoncus feugiat
                    </p>
                    <Link to='/' className='btn order_now'>
                    Order Now
                    </Link>
                </div>
                </Col>
            </Row>

        </Container>
    </section>
  )
}

export default Section1;
