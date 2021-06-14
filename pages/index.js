import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
// import styles from './app.module.css'

export default function Home() {
  return (
    <div>
      {/* <Head>
        <title>AL</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main>
        {/* <Header /> */}
        

        <div className="container">
  <div className="wrapper">
    <h1> How many days without a MALTA FIXE LUNCH 😅</h1>
    <ul className="sessions">
      <li>
        <div className="time">-13.7 mil milhões de anos</div>
        <p>BIG BANG 🤯🤯</p>
      </li>
      <li>
        <div className="time">-4.6 mil milho~es</div>
        <p>Earth 🤷..</p>
        <div style={{height:300}}></div>
      </li>
      <li>
        <div className="time">Present Day</div>
        <p>🙄</p>
      </li>
      <li>
        <div className="time">1 July 2021</div>
        <p>Inês Birthday 😵</p>
      </li>
      {/* <li>
        <div className="time">01:30 PM</div>
        <p>Lunch time after which sleep just doesn't want to let go of me. 🤝</p>
      </li>
      <li>
        <div className="time">3:30 PM</div>
        <p>Drink the magical chai, it will ward off sleep they said. 🤷‍</p>
      </li>
      <li>
        <div className="time">4:30 PM </div>
        <p>The only time I don't feel sleepy cause it's work out time. I mean walking time. 😹</p>
      </li>
      <li>
        <div className="time">07:00 PM </div>
        <p>Food my tummy needs, sleep my body needs.👿</p>
      </li>
      <li>
        <div className="time">07:30 PM </div>
        <p>My tummy's happy time 🍝</p>
      </li>
      <li>
        <div className="time">10:00 PM </div>
        <p>uh oh!!! fuel low, get some snacks but wait should I just take a quick nap?🤓 </p>
      </li>
      <li>
        <div className="time">2:30 PM </div>
        <p>All hail! The time to sleep has finally arrived.😴😴😴😴😴 </p>
      </li> */}
    </ul>
  </div>
</div> 
  <div style={{display:'flex' , flexDirection:'row' , justifyContent:'center' , gap:10}}><div><span style={{backgroundColor:'black' , color:'white' , borderRadius:8 , padding:10 , fontSize:26 , fontWeitgh:'bold'}}>5,037,000,000,000</span></div><div style={{fontSize:26 , fontWeitgh:'bold'}}> days with no group lunch!</div></div>

      </main>

      {/* <Footer /> */}
      {/* .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        } */}
      <style jsx>{`
       
        main {
          display:flex;
          justify-content:center;
          flex-direction:column;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }

        ul,
li {
  list-style: none;
  padding: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  // background: linear-gradient(45deg, #209cff, #68e0cf);
  padding: 3rem 0;
}

.wrapper {
  background: #eaf6ff;
  padding: 2rem;
  border-radius: 15px;
}

h1 {
  font-size: 1.1rem;
  font-family: sans-serif;
}

.sessions {
  margin-top: 2rem;
  border-radius: 12px;
  position: relative;
}

li {
  padding-bottom: 1.5rem;
  border-left: 1px solid #abaaed;
  position: relative;
  padding-left: 20px;
  margin-left: 10px;
}
li:last-child {
  border: 0px;
  padding-bottom: 0;
}
li:before {
  content: "";
  width: 15px;
  height: 15px;
  background: white;
  border: 1px solid #4e5ed3;
  box-shadow: 3px 3px 0px #bab5f8;
  box-shadow: 3px 3px 0px #bab5f8;
  border-radius: 50%;
  position: absolute;
  left: -10px;
  top: 0px;
}

.time {
  color: #2a2839;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
}
@media screen and (min-width: 601px) {
  .time {
    font-size: 0.9rem;
  }
}
@media screen and (max-width: 600px) {
  .time {
    margin-bottom: 0.3rem;
    font-size: 0.85rem;
  }
}

p {
  color: #4f4f4f;
  font-family: sans-serif;
  line-height: 1.5;
  margin-top: 0.4rem;
}
@media screen and (max-width: 600px) {
  p {
    font-size: 0.9rem;
  }
}
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
