import React from 'react';

function About() {
  const styles: any = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      // backgroundColor: '#f2f2f2',
      // marginBottom: '1rem'

    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#0066cc',
      marginBottom: '20px',
      textAlign: 'center',
      animation: 'fadeIn 1s ease-in-out',
    },
    description: {
      fontSize: '20px',
      lineHeight: '1.5',
      color: '#333',
      marginBottom: '40px',
      textAlign: 'center',
      animation: 'fadeIn 1s ease-in-out',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#0066cc',
      color: '#fff',
      borderRadius: '5px',
      textDecoration: 'none',
      textAlign: 'center',
      fontSize: '18px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease-in-out',
      animation: 'fadeIn 1s ease-in-out',
    },
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  };

  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.title}>KHELO INDIA</h1>
      <h2>ABOUT KHELO INDIA NATIONAL PROGRAMME FOR DEVELOPMENT OF SPORTS</h2>
      <p style={styles.description}>
        Sports is an extremely important component for the overall development of our nation. India, in the last few years has made steady progress in the field of sports. This tremendous potential needs to be showcased at a global platform. It’s time we inspire young talent, give them top-notch infrastructure and training of the highest level. We need to inculcate a strong spirit of participation in sports that enables players to demonstrate their true potential. Only then can India realise its dream of becoming a sports super power. The Khelo India programme has been introduced to revive the sports culture in India at the grass-root level by building a strong framework for all sports played in our country and establish India as a great sporting nation.
      </p>
      <p style={styles.description}>The following verticals are implemented by Sports Authority of India - State Level Khelo India Centres, Annual Sports Competitions, Talent Search and Development, Sports for Women, Support to National/Regional/State Sports Academies, Promotion of Sports among persons with disabilities, Promotion of rural and indigenous/tribal games, Physical Fitness of School going Children. In addition, the following verticals are implemented by the Ministry of Youth Affairs & Sports - Play Field Development, Utilisation and Creation/ Upgradation of Sports Infrastructure and Sports for Peace and Development. The Community Coaching Development vertical is implemented by Lakshmi Bai National Institute of Physical Education (LNIPE).

      </p>
      <a href="https://kheloindia.gov.in/about.html" style={styles.button}>Learn More</a>
    </div>
  );
}

export default About;
