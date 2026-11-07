export const siteConfig = {
  name: "Junior BackEnd Developer",
  image: "img/profile.jpg",
  title: " 경기도 안양시       |       01.09.30",
  accentColor: "#1d4ed8",
  social: {
    email: "pokj9800113@gmail.com",
    github: "https://github.com/kyongseo",
  },
  aboutMe: `"코드 자체가 설명서가 되는 개발"을 지향하는 백엔드 개발자 박경서입니다.

(주)HDS에서 Python과 Java를 주력으로 다루며, 실시간 통합 관제 시스템 및 위치정보 백오피스 API 개발을 담당했습니다. 

명확한 변수명과 간결한 메서드 설계를 통해 주석 없이도 의도가 전달되는 가독성 높은 코드를 지향합니다.

단위 테스트 작성을 개발의 기본으로 여깁니다. 시스템의 안정성과 사이드 이펙트 걱정없이 과감한 리팩토링을 가능하게 하는 핵심 기반이라고 생각하기 때문입니다.
  `,

  skills: {
        Languages: "Python, Java, Kotlin",
        Frameworks: "FastAPI, Spring Boot",
        Infra : "AWS, Docker, Linux",
        Databases : "PostgreSQL, Redis, Kafka, MongoDB",
        Tools : "IDEA, Git, Github, Jenkins, Jira",
  },
  experience: [
    {
      company: "Backend Developer (연구원)",
      title: "(주) HDS",
      dateRange: "2025.01 - 2026.04 (1년 4개월)",
      description: "기업부설연구소 소속 백엔드 개발자",
      bullets: [
        "APEC 2025 정부 정상회의 대비 실시간 관제 시스템 백엔드 개발",
        "사내 보안 관제 시스템 '블루캅' 내 사업자 관리 백엔드 설계 및 레거시 개편"
      ],
    },
  ],
  projects: [
    {
      name: 'APEC 2025 관제 시스템 개발',
      dateRange: "2025.01 - 2025.12",
      description:
        'APEC 2025 정상회의 대비 실시간 관제·보안 통합 시스템',
      skills: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "MongoDB", "Redis", "WebSocket", "Docker", "GitLab CI/CD"],
      bulletPoints: [
          "APEC 2025 정상회의 대비 실시간 관제·보안 통합 시스템 구축 프로젝트",
        "로봇·센서·ACU·CCTV 등 이종 물리보안 장비의 이벤트를 통합 수집 및 제어하는 중앙 백엔드 서버 설계·구현",
        "관제 센터 운영을 위한 관리자 파트 담당 - 관리자 권한 제어, 시스템 설정, 공지사항 관리 RESTful API 개발",
        "실시간 현장 요원의 GPS 위치 데이터 및 긴급 상태 정보 수집 RESTful API 개발",
        "출입 통제, 화재 알림, 비상 버튼 등 현장 SOS 이벤트를 유실 없이 저장하고 수집하기 위한 데이터베이스 저장 로직 및 이벤트 파이프라인 구축",
        "APScheduler를 활용해 1개월 경과 대용량 관제 이력 로그를 PostgreSQL에서 MongoDB로 자동 이관하고 검증 후 원본을 지우는 로직 구현"
      ],
    },
    {
      name: "블루캅 관제 시스템 위치정보 사업자 관리 백오피스",
      dateRange: "2025.01 - 2025.02",
      description: "사내 블루캅 관제 시스템 내 위치정보 사업자 관리 기능 고도화 및 레거시 코드 개선",
      skills: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "MongoDB", "Redis", "Docker", "EC2"],
      bulletPoints: [
        "보안 관제 시스템 '블루캅' 내 기존 노후화된 레거시 코드를 FastAPI 기반 기능별 모듈 구조로 전환하여 가독성 및 유지보수성 대폭 개선",
        "위치정보 사업자 관리 및 현장 요원 상태 모니터링용 백오피스 관리자 전용 RESTful API 개발",
        "모바일 단말(iOS/Android) 환경 특성을 고려한 멀티파트 파일 업로드/다운로드 API 구축",
        "GlobalExceptionHandler 체계를 구축하여 API 예외 응답 규격을 일관되게 정립"
      ],
    },
    {
      name: "개인 재무 관리 시스템 (1人 개인 프로젝트)",
      dateRange: "2025.09 - 2025.12",
      description:
        "통계 분석 기반 맞춤형 예산 추천과 실시간 지출 모니터링을 제공하는 RESTful API (1人 개인 프로젝트)",
      skills: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Docker", "JWT", "Redis", "JUnit", "k6"],
      bulletPoints: [
        "통계 분석 기반의 월별 소비 패턴 분석 알고리즘 및 맞춤형 예산 추천 로직 설계 및 구현",
        "쿼리 튜닝 및 Redis 캐싱을 통한 통계/추천 API 성능 최적화 → 응답 속도 기존 대비 3.6배 개선 (평균 65ms → 18ms)",
        "Spring Scheduler 기반의 일 2회 자동 이메일 리포트 발송 비동기 파이프라인 구축",
        "JWT 및 Redis Token Blacklist 구조 설계로 무상태 인증 및 안전한 로그아웃/보안 세션 관리 강화",
        "JUnit 및 k6를 활용한 120개 이상의 단위 및 통합 테스트 작성 및 부하 테스트를 통한 API 안정성 검증"
      ],
    },
  ],
  capabilities: [
    {
      title: "실무 레거시 개선 및 개발 문화 정립 (HDS 실무)",
      bullets: [
        "노후화된 절차형 레거시 코드를 FastAPI 기반 모듈 구조로 리팩토링하여 코드 가독성과 재사용성 개선",
        "Swagger UI 및 Notion 기반 명세 자동화를 주도하여 타 파트(프론트/앱)와의 소통 오류 및 반복 문의 감소",
        "Layered Architecture 및 DDD(도메인 주도 설계) 개념을 도입하여 비즈니스 로직과 인프라 계층 분리",
        "Data Mapper 패턴 도입을 통해 데이터 변환 로직을 구조화하고, 코드 중복 제거 및 가독성 향상",
        "팀 내 코드 리뷰 체계를 정립하고 백엔드 기술 스터디를 주도하여 코딩 컨벤션 단일화 및 품질 향상"
      ]
    },
    {
      title: "성능 최적화 및 보안 아키텍처 (개인 프로젝트 역량)",
      bullets: [
        "SQL 쿼리 튜닝과 Redis 캐싱 도입으로 API 응답 속도를 65ms에서 18ms로 3.6배 단축하고, k6 부하 테스트를 통한 동시 접속 병목 탐지/개선",
        "JUnit 기반 120개 이상의 단위 및 통합 테스트 케이스를 작성하여 기능 정확성 검증",
        "Spring Security + JWT 무상태 인증 구조 구현 및 Redis Token Blacklist를 이용한 안전한 로그아웃/보안 세션 구축"
      ]
    }
  ],
  education: [
    {
      school: "남서울대학교",
      dateRange: "2020.03 - 2025.02",
      achievements: [
        "정보통신공학과 학사 졸업",
        "학점 4.19/4.5 (전공 4.3/4.5)",
      ]
    },
    {
      school: "조원고등학교 (경기도 수원시)",
      dateRange: "2017.03 - 2020.02",
      achievements: [
        "인문계 졸업"
      ],
    },
  ],
  ETC: [
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
        "천안시 청소년 수련관 봉사단",
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