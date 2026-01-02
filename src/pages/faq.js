import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Sıkça Sorulan Sorular`}
          bgImage={'/faqCover.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <span>Siparişleriniz</span>
            <div className={styles.subSection}>
              <h3>Teslimatlar</h3>
              <p>
                Siparişinizin durumunu görmek için hesabınızdaki "Siparişlerim"
                bölümünü ziyaret edin. Paketiniz gönderildiğinde e‑posta bildirimi
                alacaksınız. Lütfen e‑posta gelen kutunuzu ve spam klasörünüzü kontrol edin.
              </p>
              <p>
                Tüm siparişler 24 saat içinde gönderilir. İndirim dönemlerinde fabrikamızda
                yoğunluk olabileceğinden siparişlerin gönderimi biraz daha uzun sürebilir.
                Bu nedenle fazladan 5 iş günü eklemenizi öneririz.
              </p>
              <p>
                Siparişinizle ilgili bilmek istediğiniz bir şey olursa
                customerservice@example.com adresinden bize e‑posta gönderebilir veya
                +44 (0)115 111 1111 numaralı telefondan arayabilirsiniz.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>İade & Değişim</h3>
              <p>
                Siparişinizin durumunu görmek için hesabınızdaki "Siparişlerim"
                bölümünü ziyaret edin. Paketiniz gönderildiğinde e‑posta bildirimi
                alacaksınız. Lütfen e‑posta gelen kutunuzu ve spam klasörünüzü kontrol edin.
              </p>
              <p>
                Tüm siparişler 24 saat içinde gönderilir. İndirim dönemlerinde fabrikamızda
                yoğunluk olabileceğinden siparişlerin gönderimi biraz daha uzun sürebilir.
                Bu nedenle fazladan 5 iş günü eklemenizi öneririz.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <span>Ödeme</span>
            <div className={styles.subSection}>
              <h3>Kargo Ücretleri</h3>
              <p>
                Siparişinizin durumunu görmek için hesabınızdaki "Siparişlerim"
                bölümünü ziyaret edin. Paketiniz gönderildiğinde e‑posta bildirimi
                alacaksınız. Lütfen e‑posta gelen kutunuzu ve spam klasörünüzü kontrol edin.
              </p>
              <p>
                Tüm siparişler 24 saat içinde gönderilir. İndirim dönemlerinde fabrikamızda
                yoğunluk olabileceğinden siparişlerin gönderimi biraz daha uzun sürebilir.
                Bu nedenle fazladan 5 iş günü eklemenizi öneririz.
              </p>
              <p>
                Siparişinizle ilgili bilmek istediğiniz bir şey olursa
                customerservice@example.com adresinden bize e‑posta gönderebilir veya
                +44 (0)115 111 1111 numaralı telefondan arayabilirsiniz.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Para Birimi</h3>
              <p>
                Web sitemiz teslimat adresinize göre para birimini otomatik seçer.
                Bunu sayfanın sol üst köşesinden manuel olarak değiştirebilirsiniz.
              </p>
              <p>
                İngiltere teslimatlarında Pound (£), Avrupa Birliği’nde Euro (€),
                ABD’de Dolar ($), diğer ülkelerde Pound (£) ile ödeme alınır.
              </p>
              <p>
                İngiltere ve Avrupa’ya yapılan siparişlerde KDV dahildir.
                Diğer ülkelere yapılan siparişlerde KDV dahil değildir.
                Gerekli durumlarda yerel gümrük vergilerinden siz sorumlu olursunuz.
              </p>
            </div>
            <div className={styles.subSection}>
              <h3>Sahtekarlık Şüphesi?</h3>
              <p>
                Yüksek güvenlik seviyemiz sayesinde kartınızın sahte kullanımına
                sitemizde rastlanması çok düşük ihtimaldir. Ancak böyle bir işlem
                gerçekleşirse, önce kart sağlayıcınızla iletişime geçerek kartınızı
                koruma altına aldırın ve iade talebinde bulunun. Ardından
                customerservice@example.com adresinden bize bildirin, biz de kart
                sağlayıcınızla birlikte çalışarak size daha fazla sorun yaşatmamak için
                gerekli adımları atalım.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;