import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { ICryptoProps } from './Cryptocurrencies'
import Loader from './Loader';

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

interface INewsProps {
  createdAt: Date
  description: string
  thumbnail: string
  title: string
  url: string
}

const News = ({ simplified }: { simplified?: boolean }) => {
  // const count = simplified ? 6 : 12;
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery(12);
  // console.log(cryptoNews);

  if (isFetching  || !cryptoNews?.data ) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
          <Col span={24}>
            <Select
              showSearch
              className="select-news"
              placeholder="Select a Crypto"
              optionFilterProp="children"
              onChange={(value: string) => setNewsCategory(value)}
              filterOption={(input, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              <Option value="Cryptocurency">Cryptocurrency</Option>
              {data?.data?.coins?.map((currency: ICryptoProps) => <Option key={currency.name} value={currency.name}>{currency.name}</Option>)}
            </Select>
          </Col>
        )}

        {cryptoNews?.data?.map((news: INewsProps, i: number) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>{news.title}</Title>
                  <img src={news?.thumbnail || demoImage} alt="" />
                </div>
                <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className="provider-container">
                  <div>
                    <Avatar src={news.thumbnail || demoImage} alt="" />
                    <Text className="provider-name">{news.title}</Text>
                  </div>
                  <Text>{moment(news.createdAt).fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
  )
};

export default News;
