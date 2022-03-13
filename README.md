# PWA 시작하기

인프런 PWA 시작하기 수업을 위한 비공개 리포지토리입니다.

## 다루는 내용

### Progressive Web Apps

### Web App Manifest

#### Web App Manifest 주요 구정 정보

1. App Icon

- 해당 웹 사이트가 모바일 화면에서 표시될 아이콘 이미지 지정
  `manifest.json`
  ```json
  {
    "icons": [
      {
        "src": "images/icons/192x.png",
        "type": "image/png",
        "sizes": "192x192"
      },
      {
        "src": "images/icons/512x.png",
        "type": "image/png",
        "sizes": "512x512"
      }
    ]
  }
  ```
  - `src`: 로딩할 이미지 파일 경로
  - `type`: 로딩할 이미지 타입
  - `sizes`: 로딩할 이미지 크기

2. Launch Image - Splash Screen

- 웹앱이 시작될 때 거치는 시작 화면 설정
- 모바일 앱의 시작과 동일한 느낌을 가져감
- 아이콘+이름+배경색 화면을 자동으로 꾸려주게 된다
- 배경색 설정은 `background_color` 속성
  `mainfest.json`
  ```json
  {
    "background_color": "#FDFDFD"
  }
  ```
  - 아이콘은 icon에 지정한 이미지중 192px에 가장 가까운 크기로 지정
  - 그러므로 192px크기의 이미지는 꼭 지정해야 한다.

### Service Worker
