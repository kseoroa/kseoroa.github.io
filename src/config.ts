export const siteConfig = {
  name: "Junior Backend Developer",
  image: "img/profile.jpg",
  title: " 경기도 안양시       |       01.09.30",
  accentColor: "#1d4ed8",
  social: {
    email: "pokj9800113@gmail.com",
    github: "https://github.com/kyongseo",
  },
  aboutMe: `데이터를 정확하게 다루고, 개선은 숫자로 확인하는 백엔드 개발자 박경서입니다.

(주)HDS 기업부설연구소에서 APEC 2025 실시간 통합 관제 시스템과 위치정보 백오피스 API를 개발했습니다. 현장의 비상 이벤트를 유실 없이 저장하는 파이프라인과, 저장 확인 후에만 원본을 지우는 로그 이관 구조를 만들었습니다.

개인 프로젝트에서는 Java/Spring으로 계좌 이체 API를 만들며, 동시 이체 100건 중 10건만 반영되는 문제를 테스트로 재현하고 락 방식을 직접 비교해 해결했습니다.

문제는 먼저 테스트로 재현하고, 해결 방법은 같은 조건에서 측정한 숫자로 비교해 고르는 것을 기본으로 삼고 있습니다.
  `,

  skills: {
        Languages: "Python, Java",
        Frameworks: "Spring Boot, Spring Data JPA, Spring Security, FastAPI",
        Infra : "AWS, Docker, Linux",
        Databases : "MySQL, PostgreSQL, MongoDB, Redis",
        Tools : "IntelliJ IDEA, Git, GitHub, GitLab CI/CD, JUnit, k6",
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
      dateRange: "2025.01 - 2026.04",
      description:
        'APEC 2025 정상회의 대비 실시간 관제·보안 통합 시스템',
      skills: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "MongoDB", "Redis", "WebSocket", "Docker", "AWS", "GitLab CI/CD"],
      bulletPoints: [
          "로봇, 센서, ACU, CCTV 등 서로 다른 물리보안 장비의 이벤트를 한곳에서 수집하고 제어하는 중앙 백엔드 서버 설계 및 구현",
        "관제 센터 관리자 파트 담당: 관리자 권한 제어, 시스템 설정, 공지사항 관리 RESTful API 개발",
        "현장 요원의 GPS 위치와 긴급 상태 정보를 수집하는 RESTful API 개발",
        "운영 DB(PostgreSQL)에는 최근 1개월 로그만 두고, 이전 로그는 APScheduler 배치로 MongoDB에 자동 이관하는 구조 설계",
        "출입 통제, 화재 알림, 비상 버튼 등 현장 SOS 이벤트를 유실 없이 저장하는 저장 로직 및 이벤트 파이프라인 구축",
        "코드 리뷰 도입과 백엔드 스터디 리딩으로 팀 코딩 컨벤션 정립, GitLab CI/CD와 Docker 기반 배포 자동화"
      ],
    },
    {
      name: "블루캅 관제 시스템 위치정보 사업자 관리 백오피스",
      dateRange: "2025.01 - 2025.03",
      description: "사내 블루캅 관제 시스템 내 위치정보 사업자 관리 기능 고도화 및 레거시 코드 개선",
      skills: ["Python", "FastAPI", "SQLAlchemy", "Alembic", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS EC2"],
      bulletPoints: [
        "절차형, 단일 파일 위주의 레거시 코드를 FastAPI 기반 레이어드 구조와 기능별 모듈로 나눠, 기능을 고칠 때 영향 범위를 좁힘",
        "위치정보 사업자 관리 및 현장 요원 상태 모니터링용 백오피스 관리자 전용 RESTful API 개발",
        "모바일 단말(iOS/Android) 환경 특성을 고려한 멀티파트 파일 업로드/다운로드 API 구축",
        "GlobalExceptionHandler 도입으로 API마다 달랐던 예외 응답 형식을 하나로 통일"
      ],
    },
    {
      name: "계좌 이체 API (1인 개인 프로젝트)",
      dateRange: "2026.11 - 2026.11",
      description:
          "금융 서비스의 데이터 정합성을 직접 다뤄 보기 위해 만든 계좌 이체 API. 동시성 문제를 테스트로 재현하고 해결 방법을 측정으로 비교",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "Docker", "JUnit"],
      bulletPoints: [
        "1,000원 이체 100건을 동시에 보내면 100건 모두 성공 응답을 받지만 잔액에는 10건만 반영되는 Lost Update를 실제 MySQL 테스트로 재현",
        "비관적 락(SELECT ... FOR UPDATE) 적용 후 A→B와 B→A 동시 이체에서 약 절반이 데드락으로 실패하는 문제 발견",
        "이체 방향과 상관없이 계좌 id가 작은 쪽부터 락을 걸도록 순서를 고정해 양방향 100건 모두 실패 없이 처리",
        "낙관적 락(@Version, 재시도)과 같은 조건으로 비교: 재시도 5번 설정에서 55~56건 실패, 모두 성공시키려면 재시도 800번과 약 2배 시간(1.7초 → 3.3초)이 필요해 이체에는 비관적 락 선택",
        "진행 중: k6 처리량 비교, 같은 요청이 두 번 들어와도 한 번만 이체되는 멱등성 처리"
      ],
    },
    {
      name: "개인 재무 관리 시스템 (1인 개인 프로젝트)",
      dateRange: "2025.09 - 2026.101",
      description:
        "통계 분석 기반 맞춤형 예산 추천과 실시간 지출 모니터링을 제공하는 RESTful API (1人 개인 프로젝트)",
      skills: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "PostgreSQL", "Docker", "JWT", "Redis", "JUnit", "k6"],
      bulletPoints: [
        "통계 분석 기반의 월별 소비 패턴 분석 알고리즘 및 맞춤형 예산 추천 로직 설계 및 구현",
        "요청마다 전체 사용자 예산 10만 건을 집계하던 예산 추천 API를 새벽 배치 사전 집계와 Redis 캐싱으로 바꿔 평균 응답 시간 3,610ms → 18.68ms (k6, 동시 사용자 20명, 약 190배)",
        "Spring Scheduler 기반 일 2회 자동 이메일 리포트 발송",
        "JWT 무상태 인증과 Redis Token Blacklist로 로그아웃한 토큰의 재사용 차단",
        "JUnit 기반 단위 및 통합 테스트 120개 이상 작성"
      ],
    },
  ],
  capabilities: [
    {
      title: "데이터 정합성과 동시성 제어 (계좌 이체 API)",
      bullets: [
        "동시 요청에서 생기는 Lost Update를 테스트로 재현하고, 비관적 락과 락 순서 고정으로 데드락까지 해결",
        "트랜잭션 격리 수준, JPA 영속성 컨텍스트, 락 방식의 차이를 직접 측정하며 이해"
      ]
    },
    {
      title: "측정 기반 성능 개선 (개인 프로젝트)",
      bullets: [
        "k6와 동시성 테스트로 개선 전후를 숫자로 비교하고, 그 결과로 해결 방법을 선택",
        "사전 집계와 Redis 캐싱으로 예산 추천 API 평균 응답 시간 3,610ms → 18.68ms"
      ]
    },
    {
      title: "데이터를 잃지 않는 운영 구조 설계 (HDS 실무)",
      bullets: [
        "현장 SOS 이벤트를 유실 없이 저장하는 이벤트 파이프라인 구축",
        "저장 확인 후 원본을 삭제하는 로그 이관 구조로 운영 DB 부담과 데이터 유실 위험을 함께 해결"
      ]
    },
    {
      title: "구조 개선과 협업 (HDS 실무)",
      bullets: [
        "절차형 레거시 코드를 레이어드 구조와 기능별 모듈로 개편하고, Data Mapper 패턴으로 데이터 변환 로직을 한곳에 모음",
        "Swagger UI와 Notion 기반 API 명세 정리를 주도해 프론트, 앱 파트의 반복 문의 감소",
        "코드 리뷰 도입과 백엔드 기술 스터디 리딩으로 팀 코딩 컨벤션 정립"
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
    }
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