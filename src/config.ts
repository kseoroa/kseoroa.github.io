export const siteConfig = {
  name: "Junior BackEnd Developer",
  image: "img/profile.jpg",
  title: " 경기도 안양시       |       01.09.30",
  accentColor: "#1d4ed8",
  social: {
    email: "pokj9800113@gmail.com",
    github: "https://github.com/kyongseo",
  },
  aboutMe: `"명확한 변수명과 간결한 함수로 코드 자체가 설명서가 되는 개발"을 지향합니다.
  
  (주)HDS에서 Python, Java 기반의 실시간 관제 시스템 및 위치정보 관리 시스템을 개발했습니다.
    
  "코드는 읽기 쉬워야 한다"는 원칙 아래, 주석 없이도 의도가 드러나는 명확한 변수명과 간결한 함수 작성을 지향합니다.
  
  안정성을 위한 테스트 코드를 개발의 당연한 과정으로 여깁니다. 120개 이상의 단위 테스트를 직접 작성하며 리팩토링 안정성을 확보했습니다.
  `,

  skills: {
        Languages: "Python, Java, Kotlin",
        Frameworks: "FastAPI, SQLAlchemy, Spring Boot, Spring MVC, Spring Data JPA",
        Infra: "AWS, Docker, Linux",
        Databases: "PostgreSQL, Redis, Kafka"

  },
  experience: [
    {
      company: "Backend Developer (연구원)",
      title: "(주) HDS",
      dateRange: "2025.01 - 2026.04",
      description: "연매출 1000억의 중견 보안 기업 - 기업부설연구소 Backend 개발",
      bullets: [
        "APEC 2025 정부 정상회의 대비 실시간 관제 시스템 백엔드 개발 (정책 변경으로 종료)",
        "사내 보안 관제 시스템 '블루캅' 내 사업자 관리 백엔드 설계 및 레거시 개편"
      ],
    },
  ],
  projects: [
    {
      name: 'APEC 2025 관제 시스템 개발',
      dateRange: "2025.01 - 2025.10",
      description:
        'APEC 2025 정상회의 대비 실시간 관제·보안 통합 시스템 (정책 변경으로 운영 단계 직전 종료, 백엔드 개발 80% 완료)',
      skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      bulletPoints: [
        "공지사항, 권한관리, 시스템 설정 등 관제 센터 운영에 필수적인 관리자 RESTful API 개발",
        "실시간 현장 요원 위치 및 이벤트 로그 수집 Rest API 개발",
        "관제 현장에서 발생하는 이벤트(출입, 화제, 비상알림 등) 로그의 실시간 저장 로직 구축"
      ],
    },
    {
      name: "블루캅 관제 시스템 위치정보 사업자 관리 백오피스",
      dateRange: "2025.01 - 2025.02",
      description: "사내 블루캅 관제 시스템 내 위치정보 사업자 관리 기능 고도화 및 레거시 코드 개선",
      skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      bulletPoints: [
        "위치정보 사업자 관리 및 현장 요원 상태 모니터링을 위한 관리자 RESTful API 개발",
        "iOS/Android 단말기 특성을 고려한 멀티파트 파일 업로드/다운로드 RESTful API 개발",
        "기존 노후화된 레거시 시스템을 FastAPI 기반의 기능별 모듈 구조로 전환 및 현대화 진행",
        "예외 처리 핸들러(GlobalExceptionHandler) 표준 정립 및 Swagger UI/Notion을 활용한 API 명세 자동화 주도"
      ],
    },
    {
      name: "개인 재무 관리 시스템",
      dateRange: "2025.09 - 2025.12",
      description:
        "통계 분석 기반 맞춤형 예산 추천과 실시간 지출 모니터링을 제공하는 RESTful API (1人 개인 프로젝트)",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "PostgreSQL", "Docker", "JWT", "Redis", "JUnit", "k6"],
      bulletPoints: [
        "월별 소비 패턴 분석 기반 맞춤형 예산 추천 로직 설계 및 구현",
        "통계 및 예산 추천 API 응답 속도 기존 대비 3.6배 개선 (평균 65ms -> 18ms 단축)",
        "Spring Scheduler 기반 일 2회 자동 이메일 리포트 발송 시스템 구현",
        "JWT와 Redis를 결합한 Token Blacklist 구조 설계로 로그아웃 및 보안 세션 관리 강화",
        "JUnit을 활용한 120개 이상의 단위 테스트 및 통합 테스트 작성"
      ],
    },
  ],
  capabilities: [
    {
      title: "성능 최적화 및 테스트",
      bullets: [
        "Redis 캐싱 도입을 통해 API 응답 속도를 평균 18ms로 단축, 기존 대비 약 3.6배의 성능 개선 달성",
        "k6 부하 테스트 기반 동시 접속 환경의 병목 구간 파악/개선",
        "JUnit 기반 120개 이상의 단위 테스트 케이스 작성 및 정밀도 검증"
      ]
    },
    {
      title: "애플리케이션 아키텍처 및 보안",
      bullets: [
        "Layered Architecture 및 DDD(도메인 주도 설계) 개념을 도입하여 비즈니스 로직과 인프라 계층 분리",
        "Spring Security + JWT 기반 무상태 인증 설계 및 Redis Token Blacklist를 활용한 보안 세션 관리 강화",
        "Data Mapper 패턴 도입을 통해 데이터 변환 로직을 구조화하고, 코드 중복 제거 및 가독성 향상"
      ]
    },
    {
      title: "레거시 현대화 및 개발 문화 향상",
      bullets: [
        "기존 노후화된 레거시 시스템을 FastAPI 기반의 기능별 모듈 구조로 전환 및 현대화 진행",
        "Swagger UI 및 Notion을 활용한 API 명세 자동화 주도",
        "사내 코드 리뷰 문화 정착 및 백엔드 기술 스터디 리딩을 통한 팀 역량 강화 지원"
      ]
    }
  ],
  education: [
    {
      school: "남서울대학교",
      dateRange: "2020.03 - 2025.02",
      achievements: [
        "정보통신공학과 학사",
        "학점 4.19/4.5 (전공 4.3/4.5)",
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