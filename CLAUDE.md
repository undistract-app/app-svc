# CLAUDE.md

OffDo — 투두리스트 + 포모도로 + 앱 차단을 결합한 macOS 생산성 앱.
전체 기획 배경은 `docs/00. openspec.md` 참고.

## 라우팅 테이블

| 폴더        | 내용                                             |
| ----------- | ------------------------------------------------ |
| `docs/`     | 기획 문서 (제품 기획, 데이터 모델, 정책 등)       |
| `frontend/` | Electron + React 데스크탑 앱                      |
| `backend/`  | Kotlin + Spring Boot REST API 서버                |
| `.context/` | 작업 계획/할 일 등 에이전트 협업용 스크래치 공간   |

## 현재 상태

- 코드는 아직 없음 — `docs/`에 기획서만 존재, `frontend/`·`backend/`는 빈 디렉토리.
- 루트 `.gitignore`, `README.md`, `package.json` 등도 아직 없음.
- 다음 단계는 `.context/plans/untitled.md`의 스캐폴딩 계획을 참고.
