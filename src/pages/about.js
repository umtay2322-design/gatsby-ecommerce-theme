import React, { useRef } from 'react';

import Container from '../components/Container';
import Hero from '../components/Hero';
import ThemeLink from '../components/ThemeLink';
import Layout from '../components/Layout/Layout';

import * as styles from './about.module.css';
import { toOptimizedImage } from '../helpers/general';

const AboutPage = (props) => {
  let historyRef = useRef();
  let valuesRef = useRef();
  let sustainabilityRef = useRef();

  const handleScroll = (elementReference) => {
    if (elementReference) {
      window.scrollTo({
        behavior: 'smooth',
        top: elementReference.current.offsetTop - 280,
      });
    }
  };

  return (
    <Layout disablePaddingBottom>
      <div className={styles.root}>
        {/* Hero Container */}
        <Hero
          maxWidth={'900px'}
          image={'/about.png'}
          title={`Sydney \n 1860’tan Beri İngiliz Markası`}
        />

        <div className={styles.navContainer}>
          <ThemeLink onClick={() => handleScroll(historyRef)} to={'#history'}>
            Tarihçe
          </ThemeLink>
          <ThemeLink onClick={() => handleScroll(valuesRef)} to={'#values'}>
            Değerlerimiz
          </ThemeLink>
          <ThemeLink
            onClick={() => handleScroll(sustainabilityRef)}
            to={'#sustainability'}
          >
            Sürdürülebilirlik
          </ThemeLink>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.detailContainer} ref={historyRef}>
            <p>
              1860 yılında kurulan Sydney, yenilikçi ve çağdaş bir İngiliz
              markasıdır. Zamansız, günlük lüks giyim üretiriz.
            </p>
            <br />
            <br />
            <p>
              Dünyanın ilk tişörtlerinden bazılarını biz ürettik ve pamuk
              dokusunu mükemmelleştirmek için onlarca yıl harcadık. Bugün,
              İngiltere’de kendi fabrikasında tişört üreten tek markayız. Bunu
              1937’den beri bulunduğumuz aynı fabrikada yapıyoruz.
            </p>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'gömlek markası'} src={toOptimizedImage('/about1.png')}></img>
        </div>

        <Container size={'large'} spacing={'min'}>
          <div className={styles.content}>
            <h3>Değerlerimiz</h3>
            <div ref={valuesRef}>
              <p>
                Sunspel, dünyanın en eski tişörtlerinden bazılarını üretti. 1800’lerin
                sonlarında iş, hafif Sea Island pamuktan lüks tunikler ve iç
                gömlekler üreterek Uzak Doğu ve sıcak iklimlere ihraç etti. Başta
                ipek düğmeli yakalar vardı, ancak 1900’lerin başında üretim
                maliyetlerini azaltmak için basit yuvarlak yakalarla değiştirildi —
                böylece tişört ortaya çıktı. Tişört, iç giyimden dış giyime,
                gençlik isyanının sembolünden günlük gardırobun vazgeçilmezine
                dönüşürken biz de her detayını mükemmelleştirmek için onlarca yıl
                harcadık.
              </p>
              <ol>
                <li>Çevre dostu giyim</li>
                <li>Seçkin ve seri üretim olmayan</li>
                <li>Sadece doğal malzemeler</li>
              </ol>
              <img alt={'kurucu'} src={toOptimizedImage('/about2.png')}></img>
            </div>
            <h3>Sürdürülebilirlik</h3>
            <div id={'#sustainability'} ref={sustainabilityRef}>
              <p>
                Kurucumuz  hem kaliteye hem de yeniliğe önem verirdi.
                Sea Island pamuk, kaşmir ve ipek gibi en iyi lifleri kullanmanın
                yanı sıra kendi kumaşlarını da icat etti. Sunspel bugün de bu
                yenilik taahhüdünü sürdürüyor ve benzersiz kumaşlarımız arasında:
                Q100 Sea Island pamuk, Q82 Supima pamuk, Q75 atkı örme pamuk ve
                Q14 hücresel pamuk bulunuyor. Bu kumaşların teknolojisi bugün de
                değişmeden devam ediyor ve tüm Sunspel ürünleri en kaliteli pamuk,
                yün ve liflerle üretiliyor.
              </p>
              <p>
                Türkiye’de üretilen ve uzun elyaflı Supima pamuktan
                yapılan Sunspel tişört, eşsiz yumuşaklık, konfor ve dayanıklılık
                sunar. Klasik kesime sahiptir ve yalnızca en gerekli detayları
                içerir.
              </p>
              <p>
                Kumaş, kesim ve stil üzerinde 100 yılı aşkın süredir çalışarak
                mükemmelleştirdiğimiz Sunspel Klasik Tişört, dünyanın en iyisi
                olarak kabul edilmektedir.
              </p>
            </div>
          </div>
        </Container>

        <div className={styles.imageContainer}>
          <img alt={'arkadan gömlek'} src={toOptimizedImage('/about3.png')}></img>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;