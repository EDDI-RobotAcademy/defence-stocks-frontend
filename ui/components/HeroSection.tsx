"use client";

import { homePageStyles } from "@/ui/styles/homePageStyles";

const hero = homePageStyles.hero;

export default function HeroSection() {
  return (
    <section className={hero.section}>
      <div className={hero.overlay} />
      <div className={hero.content}>
        <div className={hero.badge}>
          <span className={hero.badgeDot} />
          Global Defence Market
        </div>

        <h1 className={hero.title}>
          글로벌 방산 시장을
          <br />
          <span className={hero.titleAccent}>한눈에 파악하세요</span>
        </h1>

        <p className={hero.description}>
          Defence Stocks는 전 세계 방산 기업의 주가, 시장 동향, 핵심 지표를
          실시간으로 제공합니다. 데이터 기반의 투자 인사이트를 경험하세요.
        </p>

        <div className={hero.stats}>
          <div className={hero.statItem}>
            <span className={hero.statValue}>50+</span>
            <span className={hero.statLabel}>글로벌 방산 종목</span>
          </div>
          <div className={hero.statItem}>
            <span className={hero.statValue}>12</span>
            <span className={hero.statLabel}>국가별 분석</span>
          </div>
          <div className={hero.statItem}>
            <span className={hero.statValue}>Real-time</span>
            <span className={hero.statLabel}>시장 데이터</span>
          </div>
        </div>
      </div>
    </section>
  );
}
