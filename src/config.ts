export const siteConfig = {
  name: "KyongSeo Park",
  title: "KyongSeo | Backend Developer",
  description: "좋은 코드는 읽는 사람을 배려하는 코드다.",
  accentColor: "#1d4ed8",
  social: {
    email: "pokj9800113@gmail.com",
    github: "https://github.com/kyongseo",
  },
  about: `"이 코드, 왜 이렇게 짰어요?" 이 질문을 받지 않는 코드를 씁니다. 
    주석이 필요 없을 만큼 명확한 코드가 최고의 문서라고 믿습니다.
    좋은 기술은 비즈니스 문제를 풀 때 빛납니다. 
    기획자의 "이거 되나요?"에 "안 됩니다" 대신 "이렇게 하면 됩니다"로 답하는 개발자입니다.`,
  skills: ["Java", "Spring Boot", "Spring JPA", "Python", "FastAPI", "AWS", "Docker", "MongoDB", "RESTful API", "Redis"],
  projects: [
    {
      name: 'APEC 2025 관제 시스템',
      description:
        'APEC 2025 정상회의 대비 실시간 관제·보안 통합 시스템 구축 프로젝트',
      skills: ["FastAPI", "PostgreSQL", "Redis", "Docker", "AWS", "Redis", "WebSocket"],
    },
    {
      name: "위치정보 사업자 관리 웹페이지",
      description:
        "위치정보 사업자 정보를 관리하는 백오피스 시스템 구축 프로젝트",
      skills: ["FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
    },
    {
      name: "개인 재무 관리 시스템",
      description:
        "통계 분석 기반 맞춤형 예산 추천과 실시간 지출 모니터링을 제공하는 RESTful API - 1인 프로젝트",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Docker", "JWT", "Redis", "JUnit"],
    },
  ],
  experience: [
    {
      company: "(주) HDS",
      title: "Junior BackEnd Developer",
      dateRange: "Feb 2025 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
  ],
  education: [
    {
      name: "멋쟁이사자처럼 백엔드스쿨 10기",
      dateRange: "2024.03 - 2024.09",
      achievements: [
        "Spring Boot, MySQL, AWS 기반 백엔드 개발 학습",
      ],
    },
    {
      name: "베트남 하이즈엉 IT 교육 봉사",
      dateRange: "2023.06 - 2023.07",
      achievements: [
        "VR/AR 교육 봉사",
        "구글 카드보드 제작 및 IT 신기술 체험 교육",
      ],
    },
  ],
};
