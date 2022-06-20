import Head from "next/head";
import Card from "../components/Card";
import CardProfile from "../components/CardProfile";
import styles from "../styles/Home.module.css";
import Icon from "../components/Icon";
import { useState } from "react";

const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

export default function Home() {
  const [dataReference, setDataReference] = useState({
    work: data[0].timeframes.daily,
    play: data[1].timeframes.daily,
    study: data[2].timeframes.daily,
    exercise: data[3].timeframes.daily,
    social: data[4].timeframes.daily,
    selfCare: data[5].timeframes.daily,
    reference: "day",
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

  const changeTimeFrameworkDaily = () => setDataReference(daily);
  const changeTimeFrameworkWeekly = () => setDataReference(weekly);
  const changeTimeFrameworkMonthly = () => setDataReference(monthly);

  return (
    <div className={styles.container}>
      <Head>
        <title>time tracking dashboard_.</title>
        <meta
          name="description"
          content="Frontend mentor challenge time tracking dashboard"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <div className={`${styles.cardProfile} ${styles.profile}`}>
            <CardProfile
              changeDay={changeTimeFrameworkDaily}
              changeWeek={changeTimeFrameworkWeekly}
              changeMonth={changeTimeFrameworkMonthly}
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
            <Icon type={data[1].title} />
            <Card
              title={"Play"}
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
