import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';

const OrderConfirmPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Teşekkürler!</h1>
          <p>
            Siparişiniz işleme alındı. Herhangi bir sorunuz olursa bize
            customerservice@example.com adresinden e‑posta gönderebilirsiniz.
          </p>
          <div className={styles.actionContainer}>
            <ActionCard
              title={'Sipariş Durumu'}
              icon={'delivery'}
              subtitle={'Sipariş durumunu kontrol et'}
              link={'/account/orders'}
              size={'lg'}
            />

            <ActionCard
              title={'Mağaza'}
              icon={'bag'}
              subtitle={'Alışverişe Devam Et'}
              link={'/shop'}
            />

            <ActionCard
              title={'SSS'}
              icon={'question'}
              subtitle={'Sıkça Sorulan Sorular sayfasına göz at'}
              link={'/faq'}
            />

            <ActionCard
              title={'Bize Ulaşın'}
              icon={'phone'}
              subtitle={'Bizimle iletişime geçin'}
              link={'/support#contact'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderConfirmPage;