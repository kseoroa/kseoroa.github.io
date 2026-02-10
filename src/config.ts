export const siteConfig = {
  name: "KyongSeo Park",
  image: "img/profile.jpg",
  title: "KyongSeo | Backend Developer",
  description: "코드는 다른 개발자가 읽을 거라 생각하고 씁니다.",
  accentColor: "#1d4ed8",
  social: {
    email: "pokj9800113@gmail.com",
    github: "https://github.com/kyongseo",
  },
  aboutMe: `Python & FastAPI, Java & Spring Boot 기반의 백엔드 개발자로
실시간 관제 시스템, 위치정보 사업자 관리 시스템 등의 서비스 개발을 해왔습니다.

코드는 다른 개발자가 읽을 거라 생각하고 작성하며, 주석 달 시간에 명확하게 짜는 게 낫다고 믿습니다.
"이거 안 돼요" 대신 "이렇게 하면 되는데요?" 이런 대화를 좋아하는 개발자입니다.

테스트 코드 작성을 당연하게 생각하며, JUnit 기반 120+ 테스트 케이스를 작성하고
70% 이상의 테스트 커버리지를 유지하는 환경을 구성하였습니다.

현재는 Junior Backend Developer로서 실시간 통신 시스템 설계, DB 성능 최적화,
CI/CD 파이프라인 구축 등을 주요 업무로 하고 있습니다.`,
    skills: {
    backend: "Python, Java, FastAPI, Spring Boot, Spring MVC, Spring Data JPA, Spring Security, SQLAlchemy, Alembic, JPA, Hibernate, JUnit, Mockito, Gradle, Maven, IntelliJ IDEA, PyCharm, Visual Studio Code",
    devops: "PostgreSQL, MySQL, GitLab CI/CD, Docker, AWS (EC2, RDS, S3), Redis, Nginx, Linux",
    communication: "WebSocket, Redis Pub/Sub, RESTful API, Swagger/OpenAPI"
  },
  experience: [
    {
      company: "(주) HDS",
      title: "Junior BackEnd Developer",
      dateRange: "2025.01 - 현재",
      description: "실시간 관제 시스템 개발 및 백오피스 구축 (정책 변경으로 운영 단계 직전 종료, 백엔드 개발 80% 완료)",
      bullets: [
        "APEC 2025 관제 시스템 전체 백엔드 개발자로 개발/설계",
        "WebSocket + Redis Pub/Sub 기반 실시간 통신 구조 설계 및 구현",
        "복합 인덱스 최적화로 100만 건 로그 조회 성능 80% 개선 (5초 → 1초)",
        "Alembic DB 마이그레이션 자동화로 60회+ 스키마 변경 무충돌 운영",
        "GitLab CI/CD 파이프라인 구축 및 무중단 배포 환경 구성",
        "테스트 코드 & 코드리뷰 & 아키텍처 개선 등 개발환경 개선"
      ],
    },
  ],
  capabilities: [
    {
      title: "실시간 통신 시스템 구축",
      dateRange: "2025.01 ~ 2025.10",
      bullets: [
        "WebSocket + Redis Pub/Sub 기반 실시간 통신 구조 설계",
        "Heartbeat 메커니즘으로 연결 끊김 3초 이내 자동 재연결 구현",
        "메시지 유실률 0.1% 이하 달성"
      ]
    },
    {
      title: "데이터베이스 성능 최적화",
      dateRange: "2025.01 ~ 2025.10",
      bullets: [
        "복합 인덱스 최적화로 100만 건 로그 조회 성능 80% 개선 (5초 → 1초)",
        "Redis 캐싱 + 복합 인덱스로 쿼리 성능 84% 향상 (500ms → 80ms)",
        "Soft Delete 패턴으로 실수 삭제 데이터 10건 이상 복구, 데이터 무결성 100% 유지"
      ]
    },
    {
      title: "견고한 보안 및 권한 관리 체계",
      dateRange: "2025.01 ~ 2025.10",
      bullets: [
        "JWT + RBAC 권한 관리 체계 구현 (슈퍼관리자/일반관리자)",
        "JWT + Redis 토큰 블랙리스트로 보안 강화",
        "공통 모듈(인증, 권한, 로깅) 라이브러리화로 코드 재사용성 향상"
      ]
    },
    {
      title: "CI/CD 및 인프라 자동화",
      dateRange: "2025.01 ~ 2025.10",
      bullets: [
        "Alembic 마이그레이션 자동화로 60회 이상 스키마 변경 충돌 zero",
        "GitLab CI/CD 파이프라인 구축 및 무중단 배포",
        "Docker + AWS 기반 개발/운영 환경 일원화",
        "Swagger UI로 실시간 API 문서 제공"
      ]
    },
    {
      title: "테스트 주도 개발",
      dateRange: "2025.10 ~ 2026.01",
      bullets: [
        "JUnit 기반 테스트 커버리지 70% 이상",
        "120+ 테스트 케이스 작성으로 안정적인 코드 품질 유지",
        "Spring Scheduler 기반 일 2회 자동 이메일 리포트 발송 시스템 구현"
      ]
    }
  ],
  projects: [
    {
      name: 'APEC 2025 관제 시스템',
      dateRange: "2025.01 - 2025.10",
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
      dateRange: "2025.01 - 2025.02",
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
      dateRange: "2025.09 - 2025.12",
      description:
        "통계 분석 기반 맞춤형 예산 추천과 실시간 지출 모니터링을 제공하는 RESTful API - 1인 프로젝트",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "PostgreSQL", "Docker", "JWT", "Redis", "JUnit", "Spring Scheduler"],
      bulletPoints: [
        'Redis 캐싱 + 복합 인덱스로 쿼리 성능 84% 향상 (500ms → 80ms)',
        'JUnit 기반 테스트 커버리지 70% 이상, 120+ 테스트 케이스 작성',
        'JWT + Redis 토큰 블랙리스트로 보안 강화',
        'Spring Scheduler 기반 일 2회 자동 이메일 리포트 발송',
      ],
    },
  ],
  education: [
    {
      school: "남서울대학교",
      dateRange: "2020.03 - 2025.02",
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




