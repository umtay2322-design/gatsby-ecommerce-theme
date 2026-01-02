import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import BlogPreviewGrid from '../components/BlogPreviewGrid';
import Highlight from '../components/Highlight';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Quote from '../components/Quote';
import Title from '../components/Title';

import { generateMockBlogData, generateMockProductData } from '../helpers/mock';

import * as styles from './index.module.css';
import { Link, navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');
  const blogData = generateMockBlogData(3);

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Container */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'SEMA nın Atölyesi\'ne Hoşgeldiniz'}
        subtitle={'Giyim ihtiyaçlarınızın tek adresi'}
        ctaText={'Şimdi alışverişe başla'}
        ctaAction={goToShop}
      />

      {/* Mesaj Kutusu */}
      <div className={styles.messageContainer}>
        <p>
        </p>
        <p>
          Giyim markaları: <span className={styles.gold}>sunspel</span> ve <span className={styles.gold}>scotch&soda</span>
        </p>
      </div>

      {/* Koleksiyon Kutusu */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Yeni Koleksiyon'} />
          <ProductCollectionGrid />
        </Container>
      </div>

      {/* Yeni Gelenler */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'Yeni Gelenler'} link={'/shop'} textLink={'tümünü gör'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Öne Çıkan Ürün */}
      <div className={styles.highlightContainer}>
        <Container size={'large'} fullMobile>
          <Highlight
            image={'/highlight.png'}
            altImage={'öne çıkan görsel'}
            miniImage={'/highlightmin.png'}
            miniImageAlt={'mini öne çıkan görsel'}
            title={'Lüks Trikolar'}
            description={`Bu yumuşak kuzu yünü kazak, İskoçya'da dünyanın en eski iplik üreticilerinden biri tarafından üretilen iplikle örülmüştür.`}
            textLink={'şimdi satın al'}
            link={'/shop'}
          />
        </Container>
      </div>

      {/* Kampanya */}
      <div className={styles.promotionContainer}>
        <Hero image={toOptimizedImage('/banner2.png')} title={`%50 indirim \n Tüm Temel Ürünlerde`} />
        <div className={styles.linkContainers}>
          <Link to={'/shop'}>KADIN</Link>
          <Link to={'/shop'}>ERKEK</Link>
        </div>
      </div>

      {/* Alıntı */}
      <Quote
        bgColor={'var(--standard-light-grey)'}
        title={'Atölyemiz Hakkında'}
        quote={
          '“Biz iki şeye inanıyoruz: yaptığımız her şeyde kalite arayışı ve birbirimize destek olmak. Gerisi kendiliğinden hallolur.”'
        }
      />

      {/* Blog Grid */}
      <div className={styles.blogsContainer}>
        <Container size={'large'}>
          <Title name={'Günlük'} subtitle={'Hayat ve stil üzerine notlar'} />
          <BlogPreviewGrid data={blogData} />
        </Container>
      </div>

      {/* Sürdürülebilirlik */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.png')}
          title={'Sürdürülebiliriz'}
          subtitle={
            'Toprağımıza sahip çıkmaktan insanımıza destek olmaya kadar, çevremiz için attığımız adımları keşfedin.'
          }
          ctaText={'devamını oku'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      {/* Sosyal Medya */}
      <div className={styles.socialContainer}>
        <Title
          name={'Senin Tarzınla'}
          subtitle={'@sydney etiketle, öne çık.'}
        />
        <div className={styles.socialContentGrid}>
          <img src={toOptimizedImage(`/social/socialMedia1.png`)} alt={'sosyal medya 1'} />
          <img src={toOptimizedImage(`/social/socialMedia2.png`)} alt={'sosyal medya 2'} />
          <img src={toOptimizedImage(`/social/socialMedia3.png`)} alt={'sosyal medya 3'} />
          <img src={toOptimizedImage(`/social/socialMedia4.png`)} alt={'sosyal medya 4'} />
        </div>
      </div>
      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;