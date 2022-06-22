import Head from "next/head";
import Card from "../components/Card";
import CardProfile from "../components/CardProfile";
import styles from "../styles/Home.module.css";
import Icon from "../components/Icon";
import { useState } from "react";
import { data } from "../utils/data";
import ProfilePicture from "../components/ProfilePicture";
import ReportUser from "../components/ReportUser";

export default function Home() {
  const [dataReference, setDataReference] = useState({
    work: data[0].timeframes.weekly,
    play: data[1].timeframes.weekly,
    study: data[2].timeframes.weekly,
    exercise: data[3].timeframes.weekly,
    social: data[4].timeframes.weekly,
    selfCare: data[5].timeframes.weekly,
    reference: "week",
  });

  const [daily] = useState({
    work: data[0].timeframes.daily,
    play: data[1].timeframes.daily,
    study: data[2].timeframes.daily,
    exercise: data[3].timeframes.daily,
    social: data[4].timeframes.daily,
    selfCare: data[5].timeframes.daily,
    reference: "day",
  });

  const [weekly] = useState({
    work: data[0].timeframes.weekly,
    play: data[1].timeframes.weekly,
    study: data[2].timeframes.weekly,
    exercise: data[3].timeframes.weekly,
    social: data[4].timeframes.weekly,
    selfCare: data[5].timeframes.weekly,
    reference: "week",
  });

  const [monthly] = useState({
    work: data[0].timeframes.monthly,
    play: data[1].timeframes.monthly,
    study: data[2].timeframes.monthly,
    exercise: data[3].timeframes.monthly,
    social: data[4].timeframes.monthly,
    selfCare: data[5].timeframes.monthly,
    reference: "month",
  });

  const changeTimeframeDaily = () => setDataReference(daily);
  const changeTimeframeWeekly = () => setDataReference(weekly);
  const changeTimeframeMonthly = () => setDataReference(monthly);

  return (
    <div className={styles.container}>
      <Head>
        <title>time tracking dashboard_.</title>
        <meta
          name="description"
          content="Frontend mentor challenge time tracking dashboard"
        />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.reportUser}>
            <ReportUser user={"Jeremy Robson"} src={"/image-jeremy.png"} alt={"profile picture"}/>
          </div>
          <div className={`${styles.cardProfile} ${styles.profile}`}>
            <CardProfile
              changeDay={changeTimeframeDaily}
              changeWeek={changeTimeframeWeekly}
              changeMonth={changeTimeframeMonthly}
            />
          </div>

          <div className={`${styles.card} ${styles.work}`}>
            <Icon type={"work"} />
            <Card
              title={data[0].title}
              current={dataReference.work.current}
              previous={dataReference.work.previous}
              reference={dataReference.reference}
            />
          </div>
          <div className={`${styles.card} ${styles.play}`}>
            <Icon type={"play"} />
            <Card
              title={data[1].title}
              current={dataReference.play.current}
              previous={dataReference.play.previous}
              reference={dataReference.reference}
            />
          </div>
          <div className={`${styles.card} ${styles.study}`}>
            <Icon type={"study"} />
            <Card
              title={data[2].title}
              current={dataReference.study.current}
              previous={dataReference.study.previous}
              reference={dataReference.reference}
            />
          </div>
        </div>

        <div className={styles.secondGrid}>
          <div className={`${styles.card} ${styles.exercise}`}>
            <Icon type={"exercise"} />
            <Card
              title={data[3].title}
              current={dataReference.exercise.current}
              previous={dataReference.exercise.previous}
              reference={dataReference.reference}
            />
          </div>
          <div className={`${styles.card} ${styles.social}`}>
            <Icon type={"social"} />
            <Card
              title={data[4].title}
              current={dataReference.social.current}
              previous={dataReference.social.previous}
              reference={dataReference.reference}
            />
          </div>
          <div className={`${styles.card} ${styles.selfCare}`}>
            <Icon type={"self-care"} />
            <Card
              title={data[5].title}
              current={dataReference.selfCare.current}
              previous={dataReference.selfCare.previous}
              reference={dataReference.reference}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
