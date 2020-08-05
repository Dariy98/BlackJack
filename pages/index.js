import Head from 'next/head';

import classes from './styles/main.module.css';
import Cards from './components/Cards';

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>BlackJack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={classes.wrapper}>
        <main className={classes.main}>
          <h1>
            Welcome to game!
          </h1>

          <div className={classes.table}>
            <div className={classes.cardDeck}>
              <Cards/>
            </div>
          </div>
        </main>
     

        <footer className={classes.footer}>
          <p>Code by Daria Ost.</p>
        </footer>
      </div>
    </div>
  )
}
