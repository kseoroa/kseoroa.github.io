export const siteConfig = {
  name: "Junior BackEnd Developer",
  image: "img/profile.jpg",
  title: " 경기도 안양시       |       01.09.30",
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
      description: "연매출 1000억의 중견 보안 기업 - 기업부설연구소 Backend 개발",
      bullets: [
        "자체 보안 관제 솔루션 'BlueCop' 및 APEC 2025 정상회의 통합 관제 시스템 백엔드 구축",
        "FastAPI 기반 비동기 아키텍처 도입을 통한 레거시 개편 및 시스템 성능 최적화"
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
        "현장 요원용 모바일 앱과 연동되는 RESTful API 설계 및 개발",
        "사용자 Needs 에 맞는 사용성 개선과 신규 비즈니스 로직 구현",
        "공지사항, 권한 관리, 시스템 설정 등 관제 센터 운영에 필수적인 관리자 기능 개발",
        "관제 현장에서 발생하는 이벤트 로그의 실시간 저장 로직 구축",
        "코드 리뷰와 기술 스터디를 통한 팀 내 전문성 및 협업 역량 강화"
      ],
    },
    {
      name: "블루캅 관제 시스템 위치정보 사업자 관리 백오피스",
      dateRange: "2025.01 - 2025.02",
      description: "사내 블루캅 관제 시스템 내 위치정보 사업자 관리 기능 고도화 및 레거시 코드 개선",
      skills: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "Redis", "WebSocket", "Docker", "AWS", "GitLab CI/CD", "Swagger"],
      bulletPoints: [
        "위치정보 사업자 관리 및 현장 요원 상태 모니터링을 위한 관리자 API 세트 구축",
        "기존 노후 시스템을 FastAPI/SQLAlchemy 기반으로 재설계하여 코드 유지보수성 및 API 응답 속도 개선",
        "iOS/Android 단말기 특성을 고려한 멀티파트 파일 업로드/다운로드 API 최적화",
          "SQLAlchemy/Alembic을 활용하여 파편화된 위치정보 데이터 스키마를 체계적으로 재구조화"
      ],
    },
    {
      name: "개인 재무 관리 시스템",
      dateRange: "2025.09 - 2025.12",
      description:
        "통계 분석 기반 맞춤형 예산 추천과 실시간 지출 모니터링을 제공하는 RESTful API (1人 개인 프로젝트)",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "PostgreSQL", "Docker", "JWT", "Redis", "JUnit", "Spring Scheduler"],
      bulletPoints: [
        "사용자 소비 패턴 분석을 통한 카테고리별 예산 자동 추천 알고리즘 구현",
        "JWT와 Redis를 결합한 Token Blacklist 구조 설계로 로그아웃 및 보안 세션 관리 강화",
        "Spring Scheduler를 활용한 일간 지출 리포트 자동 생성 및 메일링 시스템 구축",
        "JUnit 기반 120+ 테스트 케이스 작성 및 테스트 커버리지 70% 이상 유지"
      ],
    },
  ],
  capabilities: [
    {
      title: "대규모 트래픽 처리 및 시스템 성능 최적화",
      bullets: [
        "Redis 캐싱 도입을 통해 API 응답 속도를 평균 18ms로 단축, 기존 대비 약 3.6배의 성능 개선 달성",
        "k6를 활용한 부하 테스트로 시스템 임계치를 파악하고, 병목 지점(DB I/O) 개선을 통한 안정적 서비스 운영",
        "WebSocket 핸들러를 통해 초당 발생하는 대량의 관제 이벤트(비상 알람 등)를 PostgreSQL에 안정적으로 적재하는 비동기 파이프라인 구축"
      ]
    },
    {
      title: "객체지향 원칙 기반의 견고한 아키텍처 설계",
      bullets: [
        "Layered Architecture 및 DDD 개념을 도입하여 비즈니스 로직과 인프라 계층을 분리, 유지보수성 극대화",
        "Spring Security와 JWT를 결합한 무상태(Stateless) 인증 체계 및 Redis 기반 Token Blacklist로 보안성 강화",
        "반복되는 데이터 변환 로직을 Mapper 패턴으로 구조화하여 코드 중복 제거 및 가독성 향상"
      ]
    },
    {
      title: "레거시 현대화 및 개발자 경험 개선",
      bullets: [
        "노후화된 레거시 시스템을 FastAPI 기반 비동기 구조로 재설계하여 동시성 처리 성능 향상",
        "개인위치정보법 준수를 위한 DB 암호화 및 RBAC(권한 기반 접근 제어)를 설계하여 컴플라이언스 리스크 해소",
        "Swagger UI 및 Notion API 명세 자동화를 주도하여 프론트엔드 및 팀원 간 협업 효율성 제고"
      ]
    },
    {
      title: "인프라 자동화 및 테스트 기반의 안정적 배포",
      bullets: [
        "Docker 기반 컨테이너화로 개발-스테이징-운영 환경의 일관성을 확보하고 배포 오류 0% 달성",
        "JUnit을 활용한 120개 이상의 테스트 케이스 작성을 통해 비즈니스 로직의 정밀도 검증 및 리팩토링 안정성 확보"
      ]
    }
  ],
  education: [
    {
      school: "남서울대학교",
      dateRange: "2020.03 - 2025.02",
      achievements: [
        "정보통신공학과 학사",
        "학점: 4.19/4.5 (전공 4.3/4.5)",
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