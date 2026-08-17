# OffDo

투두리스트 + 포모도로 + 앱 차단을 결합한 macOS 생산성 앱.

- `frontend/` — Electron + React + TypeScript 데스크탑 앱
- `backend/` — Kotlin + Spring Boot REST API 서버
- `docs/` — 기획 문서 (전체 배경은 `docs/00. openspec.md` 참고)

## 사전 준비

툴 버전은 [mise](https://mise.jdx.dev)로 관리합니다. 루트에서 한 번 실행하면 됩니다.

```bash
mise install
```

설치되는 버전 (`.mise.toml`):

- Node 26.7.0
- Java (Temurin) 21
- Gradle 9.7.0

mise를 쓰지 않는다면 위 버전을 직접 맞춰 주세요.

## 프론트엔드 (Electron 앱)

패키지 매니저는 **pnpm**을 사용합니다.

```bash
cd frontend
pnpm install      # 의존성 설치
pnpm dev          # 개발 모드 실행
```

빌드:

```bash
pnpm build:mac    # macOS 패키지 빌드
pnpm typecheck    # 타입 체크
pnpm lint         # 린트
```

## 백엔드 (Spring Boot 서버)

```bash
cd backend
./gradlew bootRun    # 서버 실행
./gradlew build      # 빌드
./gradlew test       # 테스트
```

## 일반적인 개발 흐름

1. `mise install`로 툴 버전을 맞춘다.
2. `backend`에서 `./gradlew bootRun`으로 API 서버를 띄운다.
3. `frontend`에서 `pnpm dev`로 데스크탑 앱을 실행한다.
