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
      bulletPoints: [
        'WebSocket + Redis Pub/Sub 기반 실시간 통신 구조 설계',
        'Swagger 자동 문서화로 API 협의 시간 70% 단축',
          '100만 건 로그 조회: 5초 → 1초',
          '복합 인덱스 + 페이지네이션으로 메모리 40% 절감',
          'Alembic 기반 마이그레이션 자동화로 60회 이상 스키마 변경 충돌 zero 달성',
          'GitLab CI/CD로 테스트 자동화 및 배포 표준화'
      ],
    },
    {
      name: "위치정보 사업자 관리 웹페이지",
      description:
        "위치정보 사업자 정보를 관리하는 백오피스 시스템 구축 프로젝트",
      skills: ["FastAPI", "PostgreSQL", "Redis", "Docker", "AWS"],
      bulletPoints: [
        "데이터 무결성 100% 유지",
        "Alembic 자동화로 스키마 변경 시간 80% 단축",
        "Swagger UI로 실시간 API 문서 제공",
        "Docker를 활용한 개발 및 배포 환경 일원화",
          "관리자용 백엔드 API 및 모바일 앱 연동 API 설계·구현",
          "공통 모듈(인증, 권한, 로깅) 라이브러리화"
      ]
    },
    {
      name: "개인 재무 관리 시스템",
      description:
        "통계 분석 기반 맞춤형 예산 추천과 실시간 지출 모니터링을 제공하는 RESTful API - 1인 프로젝트",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "PostgreSQL", "Docker", "JWT", "Redis", "JUnit"],
      bulletPoints: [
          'Redis 캐싱 + 인덱스 최적화로 쿼리 성능 84% 향상 (500ms → 80ms)',
          'JUnit 기반 단위 테스트 커버리지 70% 이상, 120+ 테스트 케이스 작성',
          'JWT + Redis 기반 토큰 블랙리스트 구현',
          'Docker로 개발 및 배포 환경 일원화',
          '일 2회 자동 이메일 리포트 발송 (Thymeleaf 템플릿)'
      ]
    },
  ],
  experience: [
    {
      company: "(주) HDS",
      title: "Junior BackEnd Developer",
      dateRange: "2025.01 - Present",
      bullets: [
        "APEC 2025 정상회의 실시간 관제 시스템 구축",
        "실시간 통신 아키텍처 설계 및 구현",
        "GitLab CI/CD 파이프라인 구축 및 테스트 자동화",
      ],
    },
  ],
  education: [
    {
      school: "멋쟁이사자처럼 백엔드스쿨 10기",
      dateRange: "2024.03 - 2024.09",
      achievements: [
        "Java, Spring Boot, MySQL, AWS 기반 백엔드 개발 학습",
          "CS지식 및 알고리즘 문제 해결 능력 향상",
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




