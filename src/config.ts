export const siteConfig = {
  name: "KyongSeo Park",
  image: "img/profile.jpg",
  title: "KyongSeo | Backend Developer",
  description: "좋은 코드는 읽는 사람을 배려하는 코드다.",
  accentColor: "#1d4ed8",
  social: {
    email: "pokj9800113@gmail.com",
    github: "https://github.com/kyongseo",
  },
  skills: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "Python", "FastAPI", "Alembic", "AWS", "Docker", "MongoDB", "RESTful API", "Redis", "GitLab CI/CD", "Swagger"],
  projects: [
    {
      name: 'APEC 2025 관제 시스템',
      description:
        'APEC 2025 정상회의 대비 실시간 관제·보안 통합 시스템 구축 프로젝트',
      skills: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "Redis", "WebSocket", "Docker", "AWS", "GitLab CI/CD", "Swagger"],
      bulletPoints: [
        'WebSocket + Redis Pub/Sub 기반 실시간 통신 구조 설계, 메시지 유실률 0.1% 이하 달성',
        '복합 인덱스 최적화로 100만 건 로그 조회 5초 → 1초 (80% 개선)',
        'Alembic 마이그레이션 자동화로 60회 이상 스키마 변경 충돌 zero',
        'JWT + RBAC 권한 관리 체계 구현 (슈퍼관리자/일반관리자)',
        'Heartbeat 메커니즘으로 연결 끊김 3초 이내 자동 재연결',
        '공통 모듈(인증, 권한, 로깅) 라이브러리화로 코드 재사용성 향상',
        'Swagger UI로 실시간 API 문서 제공',
        'Docker + AWS 기반 개발/운영 환경 일원화',
        'GitLab CI/CD 파이프라인 구축 및 무중단 배포'
      ],
    },
    {
      name: "위치정보 사업자 관리 웹페이지",
      description:
        "위치정보 사업자 정보를 관리하는 백오피스 시스템 구축 프로젝트",
      skills: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "Redis", "Docker", "AWS", "GitLab CI/CD", "Swagger"],
      bulletPoints: [
        'Soft Delete 패턴으로 실수 삭제 데이터 10건 이상 복구, 데이터 무결성 100% 유지',
        'JWT + RBAC 권한 관리 체계 구현 (슈퍼관리자/일반관리자)',
        'Alembic 마이그레이션 자동화로 스키마 변경 시간 80% 단축',
        'Swagger UI로 실시간 API 문서 제공',
        'Docker + AWS 기반 개발/운영 환경 일원화',
        'GitLab CI/CD 파이프라인 구축 및 무중단 배포'
      ],
    },
    {
      name: "개인 재무 관리 시스템",
      description:
        "통계 분석 기반 맞춤형 예산 추천과 실시간 지출 모니터링을 제공하는 RESTful API - 1인 프로젝트",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "PostgreSQL", "Docker", "JWT", "Redis", "JUnit", "Spring Scheduler"],
      bulletPoints: [
        'Redis 캐싱 + 복합 인덱스로 쿼리 성능 84% 향상 (500ms → 80ms)',
        '낙관적 락(@Version) 적용으로 동시성 이슈 100% 해결',
        'JUnit 기반 테스트 커버리지 70% 이상, 120+ 테스트 케이스 작성',
        'JWT + Redis 토큰 블랙리스트로 보안 강화',
        'Spring Scheduler 기반 일 2회 자동 이메일 리포트 발송',
      ],
    },
  ],
  experience: [
    {
      company: "(주) HDS",
      title: "Junior BackEnd Developer",
      dateRange: "2025.01 - Present",
      bullets: [
        "FastAPI + PostgreSQL 기반 APEC 2025 관제 시스템 백엔드 API 설계 및 구현",
        "WebSocket + Redis Pub/Sub을 활용한 실시간 데이터 통신 아키텍처 설계",
        "Alembic 기반 DB 마이그레이션 자동화로 60회 이상 스키마 변경 무충돌 운영",
          "GitLab CI/CD 파이프라인 구축으로 테스트 및 배포 자동화"
      ],
    },
  ],
  education: [
    {
      school: "남서울대학교",
      dateRange: "2020 - 2025.02",
      achievements: [
        "정보통신공학과 학사",
        "학점: 4.19/4.5",
      ]
    },
    {
      school: "멋쟁이사자처럼 백엔드스쿨 10기",
      dateRange: "2024.03 - 2024.09",
      achievements: [
        "Java, Spring Boot, MySQL, AWS 기반 백엔드 개발 학습",
          "CS지식 및 알고리즘 문제 해결 능력 향상",
      ],
    },
    {
      school: "베트남 하이즈엉 IT 교육 봉사",
      dateRange: "2023.06 - 2023.07",
      achievements: [
        "VR/AR 교육 봉사",
        "구글 카드보드 제작 및 IT 신기술 체험 교육",
      ],
    },
  ],
  certifications: [
    {
      name: "정보처리기사",
      date: "2024.06",
    },
    {
      name: "컴퓨터활용능력 1급",
      date: "2024.01",
    },
    {
      name: "데이터분석 준전문가(ADSP)",
      date: "2024.05",
    },
    {
      name: "리눅스마스터 2급",
      date: "2024.06",
    },
  ],
};




