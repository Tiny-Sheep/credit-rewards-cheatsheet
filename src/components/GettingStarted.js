import React from 'react';
import { Carousel } from 'react-bootstrap';

const GettingStarted = () => (
    <div className="getting-started">
        <Carousel style={styles.carouselStyle} controls={false}>
            <Carousel.Item>
                <img width={1600} height={500} alt="900x500" src='http://i.imgur.com/v8hLYHu.jpg'/>
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1600} height={500} alt="900x500" src='http://i.imgur.com/PBeVtw7.jpg'/>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1600} height={300} alt="900x500" src='http://i.imgur.com/V7PHVtP.jpg'/>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1600} height={300} alt="900x500" src='http://i.imgur.com/iLOS4bm.jpg'/>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={1600} height={300} alt="900x500" src='http://i.imgur.com/lhujmHT.jpg'/>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
);

const styles = {
    carouselStyle: {
        marginTop: -20
    }
}

export default GettingStarted;
