export const siteConfig = {
  name: "KyongSeo Park",
  image: "img/profile.jpg",
  title: "KyongSeo | 서버 백엔드 엔지니어",
  description: "코드는 다른 개발자가 읽을 거라 생각하고 씁니다.",
  accentColor: "#1d4ed8",
  social: {
    email: "pokj9800113@gmail.com",
    github: "https://github.com/kyongseo",
  },
  aboutMe: `현재는 (주)HDS에서 Junior Backend Developer로 백엔드 개발을 담당하고 있습니다.
  
   Python, Java, Spring Boot, FastAPI 등을 주력으로 사용하며, 실시간 관제 시스템과 위치정보 사업자 관리 시스템 등 다양한 서비스 개발 경험을 쌓아왔습니다.
   
   "왜 이렇게 짰어요?"라는 질문을 받지 않으려 노력합니다.
명확한 변수명과 간결한 함수로 코드 자체가 설명이 되도록 작성하는 것을 원칙으로 삼고 있습니다. 주석을 달 시간에 더 명확하게 짜는 게 낫다고 믿으며, 선배 개발자들의 코드 리뷰 피드백을 빠르게 흡수하면서 성장하고 있습니다.

테스트 코드 작성도 당연한 과정으로 여깁니다. 
처음엔 어색했지만, 단위 테스트를 하나씩 작성하면서 안정적인 코드가 무엇인지 직접 체감했고 리팩토링에 대한 자신감도 생겼습니다. 

협업과 소통에서도 작은 기여를 이어가고 있습니다.
팀의 주간 회고와 코드 리뷰에 적극적으로 참여하며 배우고 있습니다. 흩어진 API 문서를 찾느라 시간을 허비하는 상황을 보고 Notion으로 직접 정리해 팀에 공유했습니다. 작은 개선이었지만 팀원들이 "찾기 편해졌다"고 했을 때 그 보람이 개발만큼 크게 느껴졌습니다.
     `,

      skills: {
        languages: "Python, Java, Kotlin",
        frameworks: "FastAPI, Spring Boot, Spring MVC, Spring Data JPA, Spring Security, SQLAlchemy, Alembic, JPA, Hibernate",
        testing: "JUnit",
        tools: "Git, Github, GitLab CI/CD, Gradle, IntelliJ IDEA, PyCharm",
        infrastructure: "PostgreSQL, Redis, Docker, Kafka, AWS (EC2, RDS, S3), Linux",
        communication: "WebSocket, Redis Pub/Sub, RESTful API, Swagger"
    },  experience: [
    {
      company: "Junior BackEnd Developer",
      title: "(주) HDS",
      dateRange: "2025.01 - (재직중)",
      description: "기업부설연구소 Backend 개발",
      bullets: [
        "자체 보안 관제 시스템인 'BlueCop' 위치정보 사업자 모듈 신규 구축",
        "APEC 2025 정부 정상회의 대비 실시간 관제 시스템 서비스 개발 (정책 변경으로 종료)"
      ],
    },
  ],
  projects: [
    {
      name: 'APEC 2025 관제 시스템 개발 및 운영',
      dateRange: "2025.01 - 2025.10",
      description:
        'APEC 2025 정상회의 대비 실시간 관제·보안 통합 시스템 (정책 변경으로 운영 단계 직전 종료, 백엔드 개발 80% 완료)',
      skills: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "Redis", "WebSocket", "Docker", "AWS", "GitLab CI/CD", "Swagger"],
      bulletPoints: [
        "실시간 관제 시스템 백엔드 아키텍처 설계 및 핵심 API 개발",
        "사용자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현",
        "대용량 관제 데이터 처리를 위한 DB 스키마 설계 및 성능 최적화",
        "WebSocket 기반 실시간 위치·이벤트 데이터 수신 및 저장 구조 구현",
        "공통 모듈(인증, 권한, 로깅) 라이브러리화로 코드 재사용성 향상",
        "코드 리뷰와 기술 스터디를 통한 팀 내 전문성 및 협업 역량 강화"
      ],
    },
    {
      name: "블루캅 관제 시스템 위치정보 사업자 관리 백오피스",
      dateRange: "2025.01 - 2025.02",
      description: "사내 블루캅 관제 시스템 내 위치정보 사업자 관리 기능 고도화 및 레거시 코드 개선",
      skills: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "Redis", "WebSocket", "Docker", "AWS", "GitLab CI/CD", "Swagger"],
      bulletPoints: [
        "위치정보 사업자 관리 백오피스 기능 설계 및 API 개발",
        "레거시 코드 리팩토링을 통한 구조 개선 및 유지보수성 향상",
        "사용자 요구사항 기반 신규 비즈니스 로직 구현 및 기능 고도화",
        "JWT 기반 인증 및 RBAC 권한 체계(슈퍼관리자/일반관리자) 정립",
        "PostgreSQL / NoSQL 데이터베이스 유지보수 및 관리",
        "코드 리뷰와 기술 스터디를 통한 팀 내 전문성 및 협업 역량 강화"
      ],
    },
    {
      name: "개인 재무 관리 시스템",
      dateRange: "2025.09 - 2025.12",
      description:
        "통계 분석 기반 맞춤형 예산 추천과 실시간 지출 모니터링을 제공하는 RESTful API (1人 개인 프로젝트)",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "PostgreSQL", "Docker", "JWT", "Redis", "JUnit", "Spring Scheduler"],
      bulletPoints: [
        "월별 소비 패턴 분석 기반 맞춤형 예산 추천 로직 설계 및 구현",
        "Redis 캐싱 + 복합 인덱스 설계로 통계 조회 성능 84% 개선 (500ms → 80ms)",
        "자주 조회되는 통계 데이터 캐싱 전략 적용으로 DB 부하 최소화",
        "JWT + Redis 토큰 블랙리스트 구조 설계로 인증 보안 강화",
        "Spring Scheduler 기반 일 2회 자동 이메일 리포트 발송 시스템 구현",
        "예산 초과 시 실시간 알림 기능 개발로 사용자 피드백 루프 구축",
        "JUnit 기반 120+ 테스트 케이스 작성 및 테스트 커버리지 70% 이상 유지"
      ],
    },
  ],
  capabilities: [
    {
      title: "실시간 통신 시스템 구축",
      dateRange: "2025.01 ~ 2025.10",
      bullets: [
        "WebSocket 기반 실시간 통신 구조 설계",
        "다중 서버 환경에서도 실시간 이벤트 동기화 완벽 구현",
        "메시지 유실률 0.1% 이하 달성"
      ]
    },
    {
      title: "데이터베이스 성능 최적화",
      dateRange: "2025.01 ~ 2025.10",
      bullets: [
        "복합 인덱스 최적화로 100만 건 로그 조회 성능 80% 개선 (5초 → 1초)",
        "Redis 캐싱 쿼리 성능 84% 향상 (500ms → 80ms)",
        "Soft Delete 패턴으로 실수 삭제 데이터 10건 이상 복구, 데이터 무결성 100% 유지"
      ]
    },
    {
      title: "견고한 보안 및 권한 관리 체계",
      dateRange: "2025.01 ~ 2025.10",
      bullets: [
        "JWT + RBAC 권한 관리 체계 구현 (슈퍼관리자/일반관리자)",
        "JWT + Redis 토큰 블랙리스트로 보안 강화",
        "공통 모듈(인증, 권한, 로깅) 라이브러리화"
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