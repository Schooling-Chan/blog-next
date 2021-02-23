import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>J-Chan博客</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="keywords" content="分享知识" />
        <meta
          name="description"
          content="这是J-Chan的个人博客，分享个人学习笔记和转载一些行业咨询，一起加油努力"
        />
        <meta name="author" content="J-Chan，一个前端工程师的个人博客" />
      </Head>

      <header className="headBox">555</header>
      <div className="mainBox">
        <div className="imgBox">
          <div className="bgBox"></div>
          <div className="imgBox_title">
            {/* 标题 */}
            <h1>J-Chan Blog</h1>
            {/* 副标题 */}
            <p>------愿有前程可奔赴，亦有岁月可回首</p>
          </div>
        </div>
        <div className="contentBox">
          <ul>
            {data &&
              data.length &&
              data.map((item) => <li key={item.id}>{item.title}</li>)}
          </ul>
        </div>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios
    .get("http://localhost:8081/blog/mdList", {
      params: {
        page: 1,
        pageSize: 10,
      },
    })
    .then((res) => res.data);

  return {
    props: {
      data: res.data,
    },
  };
}

export default Home;
