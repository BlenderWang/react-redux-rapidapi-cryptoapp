import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={'4'} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={'6'} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`7`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`8`} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={'5'} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={'3'} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      {/* <Cryptocurrencies simplified /> */}
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      {/* <News simplified /> */}
    </>
  )
};

export default Homepage;
