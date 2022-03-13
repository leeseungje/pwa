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

3. Start Url

- 앱이 시작될 때 로딩 될 페이지 위치 지정
- 설정은 `start_url` 속성
  `mainfest.json`
  ```json
  {
    "start_url": "./"
    // GA 분석이나 기타 목적으로 query string을 뒤에 붙일 수 있다.
  }
  ```

4. Display Type

- 웹앱 화면의 전체적인 모양을 정할 수 있다.
- 웹앱이 모바일 앱의 느낌을 가져갈 수 있도록 결정짓는 속성
- 설정은 `display` 속성
  `mainfest.json`

  ```json
  {
    "display": "standalone"
  }
  ```

  - `standalone`: 상단 URL바 제거하여 네이티브 앱 느낌 제공
  - `browser`: 해당 OS 브라우저에서 웹앱 실행
  - `fullscreen`: 크롬이 아닌 기타 브라우저에서 네이티브 앱 느낌 제공
  - `minimul-ui`: fullscreen과 비슷하나 네비게이션 관련 최소 ui를 재공

5. Theme Color

- theme-color를 사용하면 앱 테마 색상을 정의할 수 있다.
- 홈 화면에서 시작해야 설정한 도메인의 모든 페이지 적용 가능
- 설정은 `theme_color`를 사용 한다.
  `mainfest.json`

  ```json
  {
    "theme_color": "#2196F3"
  }
  ```

6. Display Orientation

- 화면 방향(가로, 세로) 방향을 지정한다.
- 설정은 `orientation` 을 사용 한다.

```json
{
  "orientation": "portrait"
}
```

- `portrait`: 세로 방향
- `landscape`: 가로 방향

7. Web App Install Banner

- PWA가 모바일적인 특징을 가지는 가장 큰 부분의 하나
- 기존 모바일 앱 개발 주기: 구현 > SDK빌드 > 스토어 배포 > 검색 > 앱 다운로드 > 설치 > 사용
- PWA의 개발 주기: 구현 > 사이트 배포 > 검색 > 사용(자동설치)
  - `Install Banner동작 조건`
    1. 웹사이트가 모바일에 설치되어 있지 않아야 함
    2. 사용자가 최소 30초 이상 웹 사이트를 탐색(30초 이상 사용중이면 하단 배너가 실행이 됨)
    3. `start_url`, `short_name`, `name` 설정
    4. 최소 192px 크기의 앱 아이콘 이미지
    5. Service Worker의 fetch 이벤트 구현
    6. `HTTPS`

### Service Worker

- 브라우저와 서버 사이의 미들웨어 역할을 하는 스크립트 파일
- `미들웨어`: 보통 브라우저에서 서버를 요청하는 방식이지만 중간에 매개체가 생긴다 그걸 미들웨어(스크립트 파일)라 한다.
- PWA에서 가장 중요한 역할 Offline Experience와 Mobile & Web Push의 기반 기술

#### Service Worker 특징

1. 브라우저의 백그라운드에서 실행되며 웹 페이지와 별개의 라이프싸이클을 가진다.(영역이 다르다)
   - javascript ui 쓰레드랑 별도로 동작하는 또 다른 쓰레드
2. 네트워크 요청을 가로챌 수 있어 해당 자원에 대한 캐쉬 제공 또는 서버에 자원 요청
   - 프로그래밍 가능한 네트워크 프록시
     `프록시`:중계서버
3. 브라우저 종속적인 생명주기(페이지가 종료 되더라도 서비스 워커는 죽지 않는다.)
4. Web & Mobile Push 수신이 가능하도록 Notification 제공
5. navigator.serviceworker로 접근
6. 기존 Javascript 와의 별개의 자체 스코프를 가진다.
   - 크롬 개발자 도구의 Console과의 별개의 서비스워커 전용 Console 존재
7. Dom에 직접적으로 접근이 불가능
8. 사용하지 않을 때 자체적으로 종료, 필요시에 다시 동작
