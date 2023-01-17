import logo from './logo.svg';
import { Row, Col, Card } from 'react-bootstrap';
import { Pagination, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from './images/beige-trench-coat1.jpg';
import slide2 from './images/cheongsam1.jpg';
import slide3 from './images/just-tshirt2.jpg';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import './App.css';

function App() {
  const data = [
    {
      id: 1,
      name: 'Beige Trench Coat',
      colors: ['Beige'],
      gender: 'Men',
      size: 'One Size',
      category: 'Outwear',
      price: 120,
      imgs: './assets/item-images/beige-trench-thinlayer-man/',
      imgs_length: 2,
    },
    {
      id: 2,
      name: 'Cheongsam',
      colors: ['red', 'white'],
      gender: 'Women',
      size: 'One Size',
      category: 'Dress',
      price: 70,
      imgs: './assets/item-images/cheongsam/',
      imgs_length: 3,
      imgs_index: ['red', 'red', 'white'],
    },
    {
      id: 3,
      name: 'Hoodies',
      colors: ['orange', 'black'],
      gender: 'Women',
      size: 'One Size',
      category: 'Top',
      price: 50,
      imgs: './assets/item-images/hoodies/',
      imgs_length: 2,
      imgs_index: ['orange', 'black'],
    },
    {
      id: 4,
      name: 'Jean Jacket',
      colors: ['blue'],
      gender: 'Women',
      size: 'One Size',
      category: 'Jacket',
      price: 50,
      imgs: './assets/item-images/jean-jacket/',
      imgs_length: 3,
    },
    {
      id: 5,
      name: 'Just Tshirt',
      colors: ['white', 'black'],
      gender: 'Women',
      size: 'One Size',
      category: 'Top',
      price: 20,
      imgs: './assets/item-images/just-tshirt-woman/',
      imgs_length: 2,
      imgs_index: ['white', 'black'],
    },
    {
      id: 6,
      name: 'Leather Jacket',
      colors: ['black'],
      gender: 'Women',
      size: 'One Size',
      category: 'Jacket',
      price: 80,
      imgs: './assets/item-images/leather-jacket/',
      imgs_length: 2,
    },
  ];
  return (
    <Row>
      {data.map((info) => (
        <Col md={4} key={info.id}>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{info.name}</Card.Title>
              <Card.Text>{info.colors}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        effect="fade"
        pagination={{ clickable: false }}
        autoplay={{ delay: 4000 }}
        speed={5000}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={slide1} alt="slide1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slide2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slide3" />
        </SwiperSlide>
        ...
      </Swiper>
    </Row>
  );
}

export default App;
