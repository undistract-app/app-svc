# native-helper

`NSWorkspace` 앱 활성화 알림을 구독해 감지된 앱의 `bundleId`를 JSON 라인으로 stdout에 emit하는 Swift CLI 헬퍼 (기획서 6절 참고).

현재는 스텁 상태 — 실제 감지 로직 미구현, Electron 메인 프로세스에도 아직 연결되지 않음.

```bash
swift build
swift run NativeHelper
```
