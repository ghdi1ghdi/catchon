import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>특급 영화 구독 서비스 CATCHON | CATCHON</title>
        <meta name="title" content="특급 영화 구독 서비스 CATCHON | CATCHON" />
        <meta
          name="description"
          content="특급 영화 구독 서비스 CATCHON | CATCHON"
        />
        <meta
          name="keywords"
          content="특급 영화 구독 서비스 CATCHON | CATCHON"
        />
        <link
          rel="icon"
          sizes="152x152"
          href="https://poc-cf-image.cjenm.com/crop/152x152/public/share/systemmng/site/sitemng/캐치온Pavicon5355.png"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Image
            src="https://poc-cf-image.cjenm.com/resize/280x64/public/share/systemmng/site/gnbmng/catchonLogolmg.png"
            alt="CatchOn Logo"
            className={styles.catchonLogo}
            width={280}
            height={64}
            priority
          />
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.banner}
            src="https://poc-cf-image.cjenm.com/public/share/contentsmng/kr/배너1920x530_1703639591882.jpg?v=1703639592"
            alt="banner-bg1"
            width={1920}
            height={530}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerlogo}>
          <Image
            src="https://poc-cf-image.cjenm.com/resize/280x64/public/share/systemmng/site/gnbmng/catchonLogolmg.png"
            alt="CatchOn Logo"
            className={styles.catchonLogo}
            width={280}
            height={64}
            priority
          />
        </div>
        <div className={styles.footerinfo}>
          <p>시청자 상담실 (편성 문의 및 시청자 의견):080-080-0987</p>
          <p>
            (주)씨제이이엔엠?대표이사:구창근,윤상현 |
            <a
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=1068151510&apv_perm_no="
              target="_blank"
              rel="noopener noreferrer"
            >
              사업자정보확인
            </a>
          </p>
          <p>
            본점 : (06761) 서울시 서초구 과천대로 870-13 사업장 : (03926) 서울시
            마포구 상암산로 66 사업자 등록번호 : 106-81-51510 개인정보
            보호책임자 : 강봉관
          </p>
        </div>

        {/* Instagram */}
        <a href="https://www.instagram.com/catchon_movie/" target="_blank">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18 25.6594C18 21.4292 21.4292 18 25.6594 18H38.7897C43.0198 18 46.449 21.4292 46.449 25.6594V38.7897C46.449 43.0198 43.0198 46.449 38.7897 46.449H25.6594C21.4292 46.449 18 43.0198 18 38.7897V25.6594ZM27.7355 32.6594C27.7355 35.3787 29.94 37.5832 32.6594 37.5832C35.3787 37.5832 37.5832 35.3787 37.5832 32.6594C37.5832 29.94 35.3787 27.7355 32.6594 27.7355C29.94 27.7355 27.7355 29.94 27.7355 32.6594ZM32.6594 25C28.4292 25 25 28.4292 25 32.6594C25 36.8895 28.4292 40.3187 32.6594 40.3187C36.8895 40.3187 40.3187 36.8895 40.3187 32.6594C40.3187 28.4292 36.8895 25 32.6594 25ZM40.6413 22C39.7348 22 39 22.7348 39 23.6413C39 24.5477 39.7348 25.2826 40.6413 25.2826C41.5477 25.2826 42.2826 24.5477 42.2826 23.6413C42.2826 22.7348 41.5477 22 40.6413 22Z"
              fill="white"
            ></path>
          </svg>
        </a>
        {/* youtube */}
        <a
          href="https://www.youtube.com/channel/UC-JgOE5JA5PDg3R0USzVfFA"
          target="_blank"
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.9009 21.0413C17.5496 21.3821 15 24.2041 15 27.5727V36.7294C15 39.9676 17.4508 42.6803 20.6724 43.0079C27.633 43.7157 34.6469 43.7273 41.6098 43.0424L41.9485 43.0091C45.2836 42.6811 47.8258 39.8765 47.8258 36.5254V27.5924C47.8258 24.2155 45.264 21.3894 41.9033 21.0588L39.8533 20.8572C34.0584 20.2872 28.2212 20.2968 22.4283 20.8859L20.9009 21.0413ZM35.7177 32.2113C36.2876 31.8823 36.2876 31.0597 35.7177 30.7307L30.0758 27.4733C29.5059 27.1443 28.7935 27.5556 28.7935 28.2137V34.7284C28.7935 35.3865 29.5059 35.7977 30.0758 35.4687L35.7177 32.2113Z"
              fill="white"
            ></path>
          </svg>
        </a>
      </footer>
    </>
  );
}
