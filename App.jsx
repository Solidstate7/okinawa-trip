import { useState } from "react";

/* ========== CONFIRMED BOOKING DATA (from Expedia screenshot) ========== */
const BK = {
  hotel: "THE NEST NAHA",
  hotelStars: 3,
  hotelScore: "9.2",
  hotelReviews: 585,
  room: "Deluxe Twin Room, Non Smoking (bathroom)",
  beds: "2 Large Twin Beds + 1 Twin Bed",
  checkIn: "4/1 (수) 15:00",
  checkOut: "4/4 (토) 11:00",
  nights: 3,
  refundBefore: "3/31",
  hotelConfirm: "CONFIRMED",
  flightOut: "ICN 13:15 → OKA 15:45",
  flightOutFlight: "7C 1801",
  flightOutDuration: "2시간 30분",
  flightOutDate: "4/1 (수)",
  flightReturn: "OKA 16:45 → ICN 19:05",
  flightReturnFlight: "7C 1802",
  flightReturnDuration: "2시간 20분",
  flightReturnDate: "4/4 (토)",
  airline: "제주항공 (Jeju Air)",
  airlineConfirm: "CONFIRMED",
  carryOn: "10kg",
  checked: "15kg",
  cancelFee: 120000,
  changeFee: 40000,
  expediaItinerary: "CONFIRMED",
  packageKRW: 1662334,
  taxKRW: 282606,
  totalKRW: 1944940,
  perPersonKRW: 648313,
  payMethod: "MasterCard ****",
  paidDate: "2026.3.20",
  rewardsPoints: 5837,
  station: "아사히바시역(旭橋駅) 도보 3분",
  toKokusai: "국제거리 도보 15분 / 택시 500엔",
  toTourMeet: "현청앞 현민광장 도보 8분",
  toAirport: "유이레일 1정거장(3분)",
};

/* ========== ITINERARY ========== */
const DAYS = [
  {
    date: "4/1 (수)",
    title: "나하 도착 · 국제거리 저녁 산책",
    emoji: "🌺",
    color: "#E8654A",
    spots: [
      {
        time: "15:45",
        name: "나하 공항 도착",
        icon: "✈️",
        desc: "제주항공 직항 2시간30분. 입국심사+수하물 약 30~40분. 유이레일 2일권 구매(1,400엔/인). 공항역에서 바로 탑승.",
        duration: "40분",
        cat: "교통",
      },
      {
        time: "16:30",
        name: "THE NEST NAHA 체크인",
        icon: "🏨",
        desc: "유이레일 공항→아사히바시 단 1정거장(3분)! 역에서 도보 3분. Deluxe Twin Room. 루프탑 풀 & 해피아워 무료음료 체크.",
        duration: "30분",
        cat: "숙박",
      },
      {
        time: "17:15",
        name: "마키시 공설시장",
        icon: "🐟",
        desc: "호텔에서 도보 15분 or 택시 500엔. 1층 해산물 고르면 2층 즉석 조리(500엔/인). 저녁 겸 첫 식사! 20시까지 영업. 현금 위주.",
        duration: "60분",
        cat: "식사",
      },
      {
        time: "18:30",
        name: "국제거리 야경 산책",
        icon: "🛍️",
        desc: "시장에서 바로 연결. 블루씰 아이스크림, 사타안다기 간식. 저녁 조명이 예쁨.",
        duration: "60분",
        cat: "관광",
      },
      {
        time: "19:30",
        name: "호텔 복귀 · 휴식",
        icon: "🌙",
        desc: "국제거리→호텔 택시 500엔 or 도보 15분. 내일 7:40 미팅 대비 일찍 취침!",
        duration: "—",
        cat: "숙박",
      },
    ],
    budget: { 식사: 6000, 관광: 1500, 교통: 4200, 쇼핑: 3000 },
    transport:
      "유이레일 2일권 개시 (48h: ~4/3 16:30 커버). 공항→아사히바시 1정거장 3분.",
    tips: [
      "15:45 도착 → 실질 활동 17시경. 시장+국제거리만 욕심 없이!",
      "유이레일 2일권: 첫 탑승부터 48시간 — 공항에서 바로 찍기",
      "내일 7:40 미팅! 일찍 자기",
    ],
  },
  {
    date: "4/2 (목)",
    title: "🚌 유투어 북부 버스투어",
    emoji: "🐋",
    color: "#2B7A9B",
    spots: [
      {
        time: "07:45",
        name: "류보 백화점 집합",
        icon: "🚌",
        desc: "유투어(마이리얼트립)! 류보백화점 07:45~07:55 미팅. THE NEST에서 도보 약 10분 → 7:35 출발. 08:00 버스 출발.",
        duration: "15분",
        cat: "교통",
      },
      {
        time: "09:30",
        name: "만좌모 (万座毛)",
        icon: "🌊",
        desc: "코끼리 코 모양 절벽. 약 30분 자유관광. 평지 산책로.",
        duration: "30분",
        cat: "관광",
      },
      {
        time: "11:00",
        name: "코우리 대교",
        icon: "🏝️",
        desc: "에메랄드빛 바다 위 1.96km. 약 30분 자유관광. 하트바위 포토.",
        duration: "30분",
        cat: "관광",
      },
      {
        time: "12:00",
        name: "추라우미 수족관",
        icon: "🐋",
        desc: "★ 메인! 약 3시간 자유관광 + 자유중식. 구로시오의 바다 대수조. 입장권 포함. 오키짱 극장(돌고래 쇼)도 시간 내 관람!",
        duration: "180분",
        cat: "관광",
      },
      {
        time: "12:30",
        name: "  └ 자유중식 (수족관 내)",
        icon: "🍱",
        desc: "카페 '오션블루' 대수조 앞 or 푸드트럭. 3인 약 4,500엔.",
        duration: "—",
        cat: "식사",
      },
      {
        time: "13:30",
        name: "  └ 오키짱 극장 (돌고래 쇼)",
        icon: "🐬",
        desc: "야외, 무료! 어머니와 포토타임.",
        duration: "—",
        cat: "관광",
      },
      {
        time: "16:30",
        name: "아메리칸 빌리지",
        icon: "🎡",
        desc: "약 1시간 30분 자유관광. 석양 타이밍! ★하차 가능 — 여기서 빠져도 OK.",
        duration: "90분",
        cat: "관광",
      },
      {
        time: "17:00",
        name: "  └ 빌리지 저녁",
        icon: "🍔",
        desc: "타코라이스, 블루씰, 포크타마고. 3인 약 5,000엔.",
        duration: "—",
        cat: "식사",
      },
      {
        time: "19:00",
        name: "국제거리 하차 · 호텔 복귀",
        icon: "🚌",
        desc: "국제거리에서 하차. 호텔까지 도보 약 15분. 내일 남부 투어 대비 휴식!",
        duration: "—",
        cat: "교통",
      },
    ],
    budget: { 식사: 9500, 관광: 0, 교통: 0, 쇼핑: 3000 },
    transport:
      "종일 버스투어 (나하 출발·도착). 투어비 ₩200,000 확정(삼성카드). 수족관 입장 포함. 도보 10분으로 집합, 국제거리 하차 후 도보 15분 복귀.",
    tips: [
      "⚠️ 07:45~07:55 류보백화점 미팅! THE NEST에서 7:35 출발",
      "수족관 3시간 — 자유중식 포함이라 여유롭게 관람+식사",
      "아메리칸 빌리지 하차 가능 — 나하 복귀 택시 시 약 ¥3,000",
      "투어비 ₩200,000 삼성카드 결제 완료",
    ],
  },
  {
    date: "4/3 (금)",
    title: "슈리성 · 남부 투어 · 코스트코",
    emoji: "🏯",
    color: "#C4713B",
    spots: [
      {
        time: "09:00",
        name: "슈리성 (首里城)",
        icon: "🏯",
        desc: "유이레일 아사히바시→슈리 27분(2일권 유효 ~16:30). 슈리역→성 입구 택시 5분(¥500). 성벽·전망·전시 400엔/인.",
        duration: "90분",
        cat: "관광",
      },
      {
        time: "11:00",
        name: "시키나엔 왕가 정원",
        icon: "🌿",
        desc: "슈리성→택시 10분(¥1,000). UNESCO 세계유산. 평지 산책로. 400엔/인. ※수요일 휴무→금요일 OK!",
        duration: "60분",
        cat: "관광",
      },
      {
        time: "12:30",
        name: "오키나와 월드 (옥천동굴)",
        icon: "🕳️",
        desc: "시키나엔→택시 약 25분(¥2,500). 일본 최대급 종유석 동굴 800m. 왕국촌(류큐 전통가옥). 입장료 2,000엔/인. 바람 불어도 동굴 내부는 무관!",
        duration: "120분",
        cat: "관광",
      },
      {
        time: "13:00",
        name: "  └ 왕국촌 내 점심",
        icon: "🍲",
        desc: "오키나와 월드 내 식당에서 오키나와 소바. 3인 약 4,000엔.",
        duration: "—",
        cat: "식사",
      },
      {
        time: "14:30",
        name: "미바루 해변",
        icon: "🏖️",
        desc: "오키나와 월드→택시 약 15분(¥1,500). 바람 3~8m/s 예보 — 산책·포토만 가볍게! 바위 지형이 바람막이. 주차 ¥500. 강풍 시 스킵 가능.",
        duration: "30분",
        cat: "관광",
      },
      {
        time: "15:30",
        name: "코스트코 오키나와 (난조시)",
        icon: "🛒",
        desc: "미바루→코스트코 택시 약 10분(¥1,000). 10:00~20:00. 한국 회원카드 OK. 일본 한정 상품 쇼핑!",
        duration: "90분",
        cat: "쇼핑",
      },
      {
        time: "17:00",
        name: "  └ 코스트코 푸드코트",
        icon: "🌭",
        desc: "핫도그 ¥180, 피자 ¥350. 가볍게 간식 or 저녁 해결.",
        duration: "—",
        cat: "식사",
      },
      {
        time: "17:30",
        name: "코스트코→호텔 복귀",
        icon: "🚕",
        desc: "GO 또는 Uber로 택시 호출. 약 40분(¥5,000). Uber 프로모 적용 시 최대 ¥1,500 할인! 내일 생신 대비 일찍 휴식.",
        duration: "—",
        cat: "교통",
      },
    ],
    budget: { 식사: 5000, 관광: 8400, 교통: 11500, 쇼핑: 15000 },
    transport:
      "유이레일(2일권 ~16:30 만료) + GO/Uber 택시. 슈리역→성(¥500), 성→시키나엔(¥1,000), 시키나엔→오키나와월드(¥2,500), 월드→미바루(¥1,500), 미바루→코스트코(¥1,000), 코스트코→호텔(¥5,000). Uber 신규 SAKURASKRFT 50%(max ¥1,500) / 기존 SAKURASKER 15%×2회.",
    tips: [
      "시키나엔→오키나와월드: 같은 남부 방향이라 택시 25분 직행 가능",
      "오키나와월드↔코스트코↔미바루: 전부 난조시 내 택시 10~15분",
      "미바루 해변: 바람 강하면 스킵 → 코스트코 시간 늘리기",
      "Uber 프로모 코드 적용 잊지 말기! 코스트코→나하 구간 추천",
    ],
  },
  {
    date: "4/4 (토) 🎂",
    title: "어머니 생신 · 세나가지마 · 귀국",
    emoji: "🎂",
    color: "#D4456A",
    spots: [
      {
        time: "08:30",
        name: "호텔 체크아웃",
        icon: "🧳",
        desc: "짐 프론트 보관.",
        duration: "20분",
        cat: "교통",
      },
      {
        time: "09:00",
        name: "국제거리 마지막 쇼핑",
        icon: "🛍️",
        desc: "호텔→국제거리 도보 15분. 자색고구마 타르트, 치스코 스팸 등. 아침이라 한산!",
        duration: "50분",
        cat: "쇼핑",
      },
      {
        time: "10:00",
        name: "🎉 생신 야키니쿠 (미정)",
        icon: "🥩",
        desc: "★ 메인! THE NEST 도보 5~12분 내 8곳 후보 중 택1. 牛福(11:00~,★4.8), 木村(12:00~,★5.0), 오리온뷔페(11:30~) 등. 3인 약 15,000~35,000엔.",
        duration: "90분",
        cat: "식사",
      },
      {
        time: "11:40",
        name: "호텔 짐 수령 → 공항",
        icon: "🚆",
        desc: "THE NEST→짐 찾고 아사히바시→공항 유이레일 1정거장(3분). 공항 코인로커 짐 보관(¥400~700).",
        duration: "40분",
        cat: "교통",
      },
      {
        time: "12:30",
        name: "우미카지 테라스 (세나가지마)",
        icon: "🏝️",
        desc: "공항→택시 10분(¥1,000). 오션뷰 카페에서 🎂 케이크+음료로 생신 축하! 3인 약 4,500엔.",
        duration: "80분",
        cat: "관광",
      },
      {
        time: "14:00",
        name: "세나가→공항 복귀",
        icon: "✈️",
        desc: "택시 10분(¥1,000). 코인로커 짐 회수. 포크타마고로 마지막 한 끼! ✈️ 16:45 OKA→19:05 ICN",
        duration: "—",
        cat: "교통",
      },
    ],
    budget: { 식사: 25000, 관광: 0, 교통: 2900, 쇼핑: 10000, 투어: 0 },
    transport:
      "나하 시내(도보) → 유이레일(호텔→공항) → 택시(공항↔세나가 ¥1,000×2). ✈️ 16:45 출발.",
    tips: [
      "생신 야키니쿠: 牛福·木村·오리온 등 토요일 런치 가능 후보 → 지도 참조",
      "세나가 14:00 출발 엄수 — 14:15 공항",
      "✈️ 7C 1802 OKA 16:45→ICN 19:05",
    ],
  },
];

const CC = {
  식사: "#E8654A",
  관광: "#2B7A9B",
  교통: "#7B8794",
  쇼핑: "#C4713B",
  투어: "#3A8F6B",
  숙박: "#6B5B95",
};
const CE = { 식사: "🍽️", 관광: "🎌", 교통: "🚆", 쇼핑: "🛍️", 투어: "🚌" };

export default function App() {
  const [day, setDay] = useState(0);
  const [panel, setPanel] = useState(null);
  const loc = {};
  DAYS.forEach((d) =>
    Object.entries(d.budget).forEach(([k, v]) => {
      loc[k] = (loc[k] || 0) + v;
    }),
  );
  const locTotal = Object.values(loc).reduce((a, b) => a + b, 0);
  const locKRW = Math.round(locTotal * 9.2);
  const tourKRW = 200000;
  const grandKRW = BK.totalKRW + tourKRW + locKRW;
  const d = DAYS[day];
  const tog = (p) => setPanel(panel === p ? null : p);

  return (
    <div
      style={{
        fontFamily: "'Noto Sans KR','Hiragino Sans',sans-serif",
        background: "linear-gradient(165deg,#FFF8F0,#FFF1E6 40%,#F0E6D6)",
        minHeight: "100vh",
        color: "#2D2A26",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&family=Playfair+Display:wght@700;900&display=swap'); *{box-sizing:border-box;margin:0;padding:0} ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#C4A882;border-radius:4px} @keyframes fu{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}} .sc{animation:fu .3s ease both}.sc:hover{transform:translateY(-1px);box-shadow:0 6px 18px rgba(0,0,0,.06)} .dt{transition:all .25s;cursor:pointer;border:none}.dt:hover{transform:translateY(-2px)}.dt.a{transform:translateY(-3px);box-shadow:0 6px 18px rgba(0,0,0,.12)} .bb{transition:width .6s cubic-bezier(.22,1,.36,1)} .pb{transition:all .2s;cursor:pointer;border:none}.pb:hover{box-shadow:0 3px 10px rgba(0,0,0,.07)} .fi{animation:fu .3s ease}`}</style>

      {/* ===== HEADER ===== */}
      <div
        style={{
          background: `linear-gradient(135deg,${d.color}14,${d.color}04)`,
          borderBottom: `2px solid ${d.color}15`,
          padding: "22px 18px 14px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 10,
            letterSpacing: 3,
            color: "#9B8C7A",
            fontWeight: 500,
          }}
        >
          OKINAWA · 沖縄 · 2026
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display',serif",
            fontSize: 24,
            fontWeight: 900,
            lineHeight: 1.2,
            marginTop: 4,
          }}
        >
          🌺 어머니 생신 기념 오키나와
        </h1>
        <div
          style={{
            fontSize: 11,
            color: "#8B7D6B",
            marginTop: 6,
            lineHeight: 1.7,
          }}
        >
          4.1(수)~4.4(토) 3박4일 · 가족 여행
          <br />
          <span
            style={{
              display: "inline-block",
              marginTop: 4,
              fontSize: 10,
              background: "#2B7A9B0E",
              padding: "3px 8px",
              borderRadius: 5,
              fontWeight: 600,
              color: "#2B7A9B",
              lineHeight: 1.5,
            }}
          >
            ✈️ 제주항공 13:15→15:45 &nbsp;·&nbsp; 🏨 THE NEST NAHA &nbsp;·&nbsp;
            🚝 유이레일+🚌투어+🚕택시
          </span>
        </div>
      </div>

      {/* ===== DAY TABS ===== */}
      <div style={{ display: "flex", gap: 5, padding: "12px 10px 0" }}>
        {DAYS.map((dd, i) => (
          <button
            key={i}
            className={`dt ${day === i ? "a" : ""}`}
            onClick={() => {
              setDay(i);
              setPanel(null);
            }}
            style={{
              flex: 1,
              padding: "9px 4px 7px",
              borderRadius: 11,
              background: day === i ? dd.color : "#FFF",
              color: day === i ? "#FFF" : "#6B5B4E",
              fontSize: 11,
              fontWeight: day === i ? 700 : 500,
              textAlign: "center",
              boxShadow:
                day === i
                  ? `0 4px 14px ${dd.color}40`
                  : "0 1px 3px rgba(0,0,0,.05)",
              lineHeight: 1.3,
            }}
          >
            <div style={{ fontSize: 16, marginBottom: 1 }}>{dd.emoji}</div>
            <div style={{ fontWeight: 700, fontSize: 11.5 }}>
              {dd.date.split(" ")[0]}
            </div>
            <div style={{ fontSize: 8.5, opacity: 0.85, marginTop: 1 }}>
              {["도착·시장", "북부투어", "남부·코스트코", "생신🎂"][i]}
            </div>
          </button>
        ))}
      </div>

      {/* ===== DAY TITLE + TRANSPORT ===== */}
      <div style={{ padding: "12px 16px 3px" }}>
        <h2
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: d.color,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span style={{ fontSize: 20 }}>{d.emoji}</span>
          {d.title}
        </h2>
      </div>
      {d.transport && (
        <div
          style={{
            margin: "4px 14px 8px",
            padding: "7px 10px",
            background: "#2B7A9B07",
            borderRadius: 7,
            border: "1px solid #2B7A9B10",
            fontSize: 10.5,
            color: "#2B6B85",
            lineHeight: 1.55,
          }}
        >
          <b>🚆</b> {d.transport}
        </div>
      )}

      {/* ===== TIMELINE ===== */}
      <div style={{ padding: "0 10px 6px" }}>
        {d.spots.map((s, i) => {
          const sub = s.name.startsWith("  └");
          return (
            <div
              key={i}
              className="sc"
              style={{
                animationDelay: `${i * 0.04}s`,
                display: "flex",
                gap: 8,
                marginBottom: sub ? 3 : 6,
              }}
            >
              <div
                style={{
                  width: 44,
                  flexShrink: 0,
                  textAlign: "right",
                  paddingTop: sub ? 6 : 9,
                }}
              >
                {!sub && (
                  <div
                    style={{ fontSize: 11, fontWeight: 700, color: d.color }}
                  >
                    {s.time}
                  </div>
                )}
              </div>
              <div
                style={{
                  width: 15,
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: sub ? 4 : 8,
                    height: sub ? 4 : 8,
                    borderRadius: "50%",
                    background: sub ? `${d.color}45` : d.color,
                    marginTop: sub ? 9 : 11,
                    flexShrink: 0,
                    boxShadow: sub ? "none" : `0 0 0 3px ${d.color}14`,
                  }}
                />
                {i < d.spots.length - 1 && (
                  <div
                    style={{
                      width: 1.5,
                      flex: 1,
                      background: `${d.color}18`,
                      marginTop: 2,
                    }}
                  />
                )}
              </div>
              <div
                style={{
                  flex: 1,
                  background: sub ? `${d.color}04` : "#FFF",
                  borderRadius: 9,
                  padding: "8px 10px",
                  boxShadow: sub ? "none" : "0 1px 4px rgba(0,0,0,.03)",
                  border: `1px solid ${d.color}${sub ? "06" : "0B"}`,
                  transition: "all .2s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ fontSize: 12, fontWeight: sub ? 600 : 700 }}>
                    {s.icon} {sub ? s.name.replace("  └ ", "") : s.name}
                  </div>
                  <span
                    style={{
                      fontSize: 8.5,
                      fontWeight: 600,
                      color: CC[s.cat],
                      background: `${CC[s.cat]}0E`,
                      padding: "1px 5px",
                      borderRadius: 4,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {s.cat}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: 10.5,
                    color: "#5A4E42",
                    marginTop: 3,
                    lineHeight: 1.6,
                  }}
                >
                  {s.desc}
                </div>
                {s.duration !== "—" && (
                  <div style={{ fontSize: 9, color: "#A09484", marginTop: 3 }}>
                    ⏱ {s.duration}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== TIPS ===== */}
      {d.tips && (
        <div
          style={{
            margin: "0 14px 10px",
            padding: "8px 10px",
            background: `${d.color}05`,
            borderRadius: 8,
            border: `1px dashed ${d.color}1C`,
          }}
        >
          <div
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: d.color,
              marginBottom: 4,
            }}
          >
            💡 팁
          </div>
          {d.tips.map((t, i) => (
            <div
              key={i}
              style={{
                fontSize: 10,
                color: "#5A4E42",
                lineHeight: 1.6,
                marginBottom: 1,
              }}
            >
              · {t}
            </div>
          ))}
        </div>
      )}

      {/* ========== PANELS ========== */}
      <div style={{ padding: "2px 14px 24px" }}>
        {/* --- RESERVATION --- */}
        <PanelBtn
          active={panel === "res"}
          onClick={() => tog("res")}
          color="#6B5B95"
          label="📋 예약 확정 사항"
          sub={`₩${BK.totalKRW.toLocaleString()} 확정`}
        />

        {panel === "res" && (
          <div className="fi" style={{ ...cardStyle, marginBottom: 7 }}>
            {/* Flight */}
            <Section title="✈️ 항공" color="#2B7A9B">
              <Row l="가는편" r={`${BK.flightOut} (${BK.flightOutFlight})`} />
              <Row
                l=""
                r={`${BK.flightOutDate} · ${BK.flightOutDuration} · 직항`}
              />
              <Row
                l="오는편"
                r={`${BK.flightReturn} (${BK.flightReturnFlight})`}
              />
              <Row
                l=""
                r={`${BK.flightReturnDate} · ${BK.flightReturnDuration} · 직항`}
              />
              <Row l="항공사" r={BK.airline} />
              <Row l="예약번호" r={BK.airlineConfirm} highlight />
              <Row l="수하물" r={`캐리온 ${BK.carryOn} + 위탁 ${BK.checked}`} />
            </Section>

            {/* Hotel */}
            <Section title="🏨 숙소" color="#C4713B">
              <Row l="호텔" r={`${BK.hotel} ★${BK.hotelStars}`} />
              <Row
                l="평점"
                r={`${BK.hotelScore}/10 (${BK.hotelReviews}개 리뷰)`}
              />
              <Row l="객실" r={BK.room} />
              <Row l="침대" r={BK.beds} />
              <Row l="체크인" r={BK.checkIn} />
              <Row l="체크아웃" r={BK.checkOut} />
              <Row l="확인번호" r={BK.hotelConfirm} highlight />
              <Row l="위치" r={BK.station} />
            </Section>

            {/* Price */}
            <Section title="💳 결제 내역" color="#3A8F6B">
              <Row
                l="📦 패키지 (호텔+왕복항공)"
                r={`₩${BK.packageKRW.toLocaleString()}`}
              />
              <Row l="세금/수수료" r={`₩${BK.taxKRW.toLocaleString()}`} />
              <div
                style={{
                  borderTop: "1px solid #E8E0D6",
                  marginTop: 4,
                  paddingTop: 4,
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                <span>패키지 소계</span>
                <span>₩{BK.totalKRW.toLocaleString()}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 11,
                  marginTop: 4,
                }}
              >
                <span>🚌 유투어 (삼성카드)</span>
                <span style={{ fontWeight: 700 }}>
                  ₩{tourKRW.toLocaleString()}
                </span>
              </div>
              <div
                style={{
                  borderTop: "2px solid #2D2A26",
                  marginTop: 6,
                  paddingTop: 6,
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 14,
                  fontWeight: 900,
                }}
              >
                <span>확정 합계</span>
                <span>₩{(BK.totalKRW + tourKRW).toLocaleString()}</span>
              </div>
              <div
                style={{
                  textAlign: "right",
                  fontSize: 10,
                  color: "#8B7D6B",
                  marginTop: 2,
                }}
              >
                {BK.payMethod} + 삼성카드
              </div>
            </Section>

            {/* Hotel proximity */}
            <div
              style={{
                background: "#FFF8F0",
                borderRadius: 8,
                padding: "9px 10px",
                border: "1px solid #E8D8C8",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 4 }}>
                📍 THE NEST NAHA 위치 이점
              </div>
              <div style={{ fontSize: 10, color: "#5A4E42", lineHeight: 1.7 }}>
                · 유이레일 아사히바시역 <b>도보 3분</b> — 공항에서 1정거장!
                <br />
                · 국제거리 도보 15분 · 류보백화점(투어집합) 도보 10분
                <br />· 마키시 시장 도보 15분 · 야키니쿠 8곳 도보 4~18분
              </div>
            </div>
          </div>
        )}

        {/* --- BUDGET --- */}
        <PanelBtn
          active={panel === "budget"}
          onClick={() => tog("budget")}
          color="#2D2A26"
          label="💰 3인 전체 예산"
          sub={`총 ₩${grandKRW.toLocaleString()}`}
        />

        {panel === "budget" && (
          <div className="fi" style={{ ...cardStyle, marginBottom: 7 }}>
            {/* Confirmed */}
            <div
              style={{
                background: "#F0F8FF",
                borderRadius: 9,
                padding: "10px 12px",
                marginBottom: 12,
                border: "1px solid #D0E8F5",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#2B7A9B",
                  marginBottom: 6,
                }}
              >
                💳 확정 지출 (결제 완료)
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 11,
                  marginBottom: 2,
                }}
              >
                <span>✈️🏨 항공+숙박 패키지</span>
                <span style={{ fontWeight: 700 }}>
                  ₩{BK.totalKRW.toLocaleString()}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 11,
                  marginBottom: 4,
                }}
              >
                <span>🚌 유투어 버스투어</span>
                <span style={{ fontWeight: 700 }}>
                  ₩{tourKRW.toLocaleString()}
                </span>
              </div>
              <div
                style={{
                  borderTop: "1px solid #D0E8F5",
                  paddingTop: 4,
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 13,
                  fontWeight: 900,
                }}
              >
                <span>확정 합계</span>
                <span>₩{(BK.totalKRW + tourKRW).toLocaleString()}</span>
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: "#8B7D6B",
                  textAlign: "right",
                  marginTop: 2,
                }}
              >
                {BK.payMethod} + 삼성카드
              </div>
            </div>

            {/* Local */}
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#6B5B4E",
                marginBottom: 8,
              }}
            >
              🇯🇵 현지 지출 (3인)
            </div>
            {Object.entries(loc)
              .sort(([, a], [, b]) => b - a)
              .map(([cat, val]) => (
                <div key={cat} style={{ marginBottom: 7 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 2,
                    }}
                  >
                    <span
                      style={{ fontSize: 11, fontWeight: 600, color: CC[cat] }}
                    >
                      {CE[cat]} {cat}
                    </span>
                    <span style={{ fontSize: 11 }}>
                      <b>¥{val.toLocaleString()}</b>
                      <span
                        style={{
                          fontSize: 9.5,
                          color: "#9B8C7A",
                          marginLeft: 3,
                        }}
                      >
                        (₩{Math.round(val * 9.2).toLocaleString()})
                      </span>
                    </span>
                  </div>
                  <div
                    style={{
                      height: 6,
                      background: "#F5F0EA",
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="bb"
                      style={{
                        height: "100%",
                        width: `${(val / locTotal) * 100}%`,
                        background: CC[cat],
                        borderRadius: 3,
                        opacity: 0.8,
                      }}
                    />
                  </div>
                </div>
              ))}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "2px solid #2D2A26",
                paddingTop: 5,
                marginTop: 4,
                fontSize: 12,
                fontWeight: 900,
              }}
            >
              <span>현지 합계</span>
              <span>
                ¥{locTotal.toLocaleString()} (₩{locKRW.toLocaleString()})
              </span>
            </div>

            {/* Day table */}
            <div
              style={{
                background: "#FAF6F1",
                borderRadius: 8,
                padding: "9px",
                margin: "12px 0",
                overflowX: "auto",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#6B5B4E",
                  marginBottom: 5,
                }}
              >
                📅 일별 현지 지출
              </div>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  fontSize: 9,
                }}
              >
                <thead>
                  <tr style={{ borderBottom: "1px solid #E8E0D6" }}>
                    {[
                      "날짜",
                      "식사",
                      "관광",
                      "교통",
                      "쇼핑",
                      "투어",
                      "소계",
                    ].map((h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: h === "날짜" ? "left" : "right",
                          padding: "3px 1px",
                          color: "#9B8C7A",
                          fontWeight: 500,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DAYS.map((dd, i) => {
                    const sub = Object.values(dd.budget).reduce(
                      (a, b) => a + b,
                      0,
                    );
                    return (
                      <tr
                        key={i}
                        style={{
                          borderBottom: "1px solid #F0EBE4",
                          background: i === 3 ? `${dd.color}05` : "transparent",
                        }}
                      >
                        <td
                          style={{
                            padding: "5px 1px",
                            fontWeight: 600,
                            color: dd.color,
                            whiteSpace: "nowrap",
                          }}
                        >
                          {dd.emoji}
                          {dd.date.split(" ")[0]}
                        </td>
                        {["식사", "관광", "교통", "쇼핑", "투어"].map((c) => (
                          <td
                            key={c}
                            style={{
                              textAlign: "right",
                              padding: "5px 1px",
                              color:
                                (dd.budget[c] || 0) === 0
                                  ? "#D0C8BE"
                                  : "#2D2A26",
                            }}
                          >
                            {(dd.budget[c] || 0) === 0
                              ? "—"
                              : `¥${dd.budget[c].toLocaleString()}`}
                          </td>
                        ))}
                        <td
                          style={{
                            textAlign: "right",
                            padding: "5px 1px",
                            fontWeight: 700,
                          }}
                        >
                          ¥{sub.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Grand Total */}
            <div
              style={{
                background: "#2D2A26",
                borderRadius: 9,
                padding: "14px",
                color: "#FFF",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 9, color: "#B0A494", letterSpacing: 1 }}>
                3인 여행 총 비용
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: 28,
                  fontWeight: 900,
                  marginTop: 3,
                }}
              >
                ₩{grandKRW.toLocaleString()}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 8,
                  marginTop: 6,
                  fontSize: 9,
                  color: "#B0A494",
                  flexWrap: "wrap",
                }}
              >
                <span>패키지 ₩{BK.totalKRW.toLocaleString()}</span>
                <span>투어 ₩{tourKRW.toLocaleString()}</span>
                <span>현지 ₩{locKRW.toLocaleString()}</span>
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#E8654A",
                }}
              >
                1인당 약 ₩{Math.round(grandKRW / 3).toLocaleString()}
              </div>
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 9,
                color: "#8B7D6B",
                lineHeight: 1.7,
              }}
            >
              ※ 환율 1엔≈9.2원 · 야키니쿠 미정(¥15,000~35,000 범위)
              <br />※ 쇼핑·Uber 프로모 적용 시 변동 가능
            </div>
          </div>
        )}

        {/* --- TRANSPORT --- */}
        <PanelBtn
          active={panel === "tr"}
          onClick={() => tog("tr")}
          color="#2B7A9B"
          label="🚆 교통 가이드"
          sub="유이레일·투어·GO/Uber"
        />

        {panel === "tr" && (
          <div className="fi" style={{ ...cardStyle, marginBottom: 7 }}>
            <div
              style={{
                background: "#FFF8F0",
                borderRadius: 8,
                padding: "9px 10px",
                marginBottom: 8,
                border: "1px solid #E8D8C8",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, marginBottom: 3 }}>
                📍 THE NEST 기준 주요 거리
              </div>
              <div style={{ fontSize: 10, color: "#5A4E42", lineHeight: 1.7 }}>
                나하공항: 유이레일 1정거장(3분) · 국제거리: 도보15분 ·
                류보백화점(투어집합): 도보10분 · 마키시시장: 도보15분
              </div>
            </div>
            {[
              {
                i: "🚝",
                t: "유이레일",
                b: "Day 1·3·4",
                bc: "#E8654A",
                c: "2일권 1,400엔/인 (48h). Day 1 공항→호텔. Day 3 슈리역(~16:30 만료). Day 4 호텔→공항 편도(¥300×3).",
              },
              {
                i: "🚌",
                t: "유투어 (마이리얼트립)",
                b: "Day 2",
                bc: "#2B7A9B",
                c: "7:45 류보백화점 집합, 8시 출발. 만좌모→코우리→수족관(3h+중식)→빌리지(1.5h). 수족관 입장 포함. 국제거리 19:00 하차.",
              },
              {
                i: "🚕",
                t: "GO / Uber 택시",
                b: "Day 3·4",
                bc: "#C4713B",
                c: "Day 3 슈리~남부~코스트코 약 ¥11,500. Day 4 공항↔세나가 ¥1,000×2. 앱: DiDi·GO·Uber 사전 설치!",
              },
            ].map((x, i) => (
              <div
                key={i}
                style={{
                  padding: "8px 10px",
                  background: `${x.bc}05`,
                  borderRadius: 8,
                  marginBottom: 6,
                  border: `1px solid ${x.bc}0E`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 3,
                  }}
                >
                  <span style={{ fontSize: 12, fontWeight: 700 }}>
                    {x.i} {x.t}
                  </span>
                  <span
                    style={{
                      fontSize: 8.5,
                      fontWeight: 700,
                      color: x.bc,
                      background: `${x.bc}10`,
                      padding: "1px 5px",
                      borderRadius: 4,
                    }}
                  >
                    {x.b}
                  </span>
                </div>
                <div
                  style={{ fontSize: 10.5, color: "#5A4E42", lineHeight: 1.6 }}
                >
                  {x.c}
                </div>
              </div>
            ))}
            <div
              style={{
                background: "#F0F8FF",
                borderRadius: 8,
                padding: "9px 10px",
                border: "1px solid #D0E8F5",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#2B7A9B",
                  marginBottom: 4,
                }}
              >
                🎫 Uber 프로모션 코드
              </div>
              <div style={{ fontSize: 10, color: "#5A4E42", lineHeight: 1.7 }}>
                · 신규: <b>SAKURASKRFT</b> — 50% 할인 (최대 ¥1,500, 1회)
                <br />· 기존: <b>SAKURASKER</b> — 15% 할인 (2회)
                <br />· 기간: 2026.3.28~4.30 · 일본 한정
              </div>
            </div>
          </div>
        )}

        {/* --- CHECKLIST --- */}
        <PanelBtn
          active={panel === "ck"}
          onClick={() => tog("ck")}
          color="#D4456A"
          label="✅ 체크리스트"
          sub=""
        />

        {panel === "ck" && (
          <div className="fi" style={{ ...cardStyle, marginTop: 7 }}>
            {[
              {
                p: "✅",
                item: "항공+숙박 패키지",
                when: "결제 완료",
                note: `₩${BK.totalKRW.toLocaleString()} · ${BK.payMethod}`,
                done: true,
              },
              {
                p: "✅",
                item: "귀국편 확인",
                when: "확인 완료",
                note: "7C 1802 OKA 16:45→ICN 19:05",
                done: true,
              },
              {
                p: "✅",
                item: "유투어 버스투어 (마이리얼트립)",
                when: "결제 완료",
                note: "4/2(목) ₩200,000 삼성카드. 7:45 류보백화점 집합",
                done: true,
              },
              {
                p: "🟡",
                item: "Day 4 생신 야키니쿠 결정",
                when: "출발 전 or 현지",
                note: "THE NEST 도보권 8곳. 牛福·木村·오리온 등. 토요일 런치 확인!",
              },
              {
                p: "🟢",
                item: "택시 앱 설치",
                when: "출발 전",
                note: "DiDi + GO + Uber 설치·카드 등록. Uber 프로모 코드 입력!",
              },
              {
                p: "🟢",
                item: "코스트코 회원카드",
                when: "출발 전",
                note: "한국 카드 일본 OK. 만료일 체크",
              },
              {
                p: "🟢",
                item: "유이레일 2일권",
                when: "현지 구매",
                note: "나하공항역 자판기. 1,400엔/인",
              },
              {
                p: "🟢",
                item: "엔화 환전",
                when: "출발 전",
                note: "시장·코스트코 현금 전용. 1인 5만엔 권장",
              },
            ].map((c, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 8,
                  padding: "7px 0",
                  borderBottom: i < 7 ? "1px solid #F5F0EA" : "none",
                  opacity: c.done ? 0.55 : 1,
                }}
              >
                <span style={{ fontSize: 13, flexShrink: 0, marginTop: 1 }}>
                  {c.p}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 11.5,
                      fontWeight: 700,
                      textDecoration: c.done ? "line-through" : "none",
                    }}
                  >
                    {c.item}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      color: c.done
                        ? "#3A8F6B"
                        : c.urgent
                          ? "#E8654A"
                          : "#D4456A",
                      fontWeight: 600,
                      marginTop: 1,
                    }}
                  >
                    {c.when}
                  </div>
                  <div style={{ fontSize: 10, color: "#8B7D6B", marginTop: 1 }}>
                    {c.note}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        style={{
          textAlign: "center",
          padding: "4px 20px 28px",
          fontSize: 10.5,
          color: "#B0A494",
        }}
      >
        어머니 생신 축하드려요 🎂 즐거운 오키나와 여행 되세요!
      </div>
    </div>
  );
}

/* ===== Sub-components ===== */
const cardStyle = {
  background: "#FFF",
  borderRadius: 12,
  padding: "14px 12px",
  boxShadow: "0 2px 10px rgba(0,0,0,.04)",
  border: "1px solid #E8E0D6",
};

function PanelBtn({ active, onClick, color, label, sub }) {
  return (
    <button
      className="pb"
      onClick={onClick}
      style={{
        width: "100%",
        padding: "11px 14px",
        background: active ? color : "#FFF",
        color: active ? "#FFF" : "#2D2A26",
        borderRadius: 10,
        fontSize: 13,
        fontWeight: 700,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 6,
      }}
    >
      <span>{label}</span>
      <span style={{ fontSize: 10.5, fontWeight: 400, opacity: 0.7 }}>
        {sub} {active ? "▲" : "▼"}
      </span>
    </button>
  );
}

function Section({ title, color, children }) {
  return (
    <div
      style={{
        marginBottom: 12,
        padding: "10px 11px",
        background: `${color}06`,
        borderRadius: 9,
        border: `1px solid ${color}12`,
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 700, color, marginBottom: 6 }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function Row({ l, r, highlight }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: 11,
        marginBottom: 3,
        color: highlight ? "#3A8F6B" : "#2D2A26",
      }}
    >
      <span style={{ color: "#6B5B4E", fontWeight: highlight ? 600 : 400 }}>
        {l}
      </span>
      <span
        style={{
          fontWeight: highlight ? 700 : 500,
          textAlign: "right",
          maxWidth: "60%",
        }}
      >
        {r}
      </span>
    </div>
  );
}
