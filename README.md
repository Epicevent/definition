# Definition · 수학 정의 체계

[정의 탐색 페이지](https://epicevent.github.io/definition/) · [계산 공부: study metric](https://epicevent.github.io/study-metric/)

기존 통합 정의 149개와 보충 정의 12개를 분야별로 분류하고, 고정 태그와 직접 선행·후속 정의로 연결한 학습 도구입니다. 기본 목표는 정준선다발의 Chern 곡률입니다.

## 사용

- 휴대전화나 PC의 브라우저에서 페이지를 엽니다.
- 목표 정의의 선행 링크를 따라가거나, 5장 회상 묶음을 시작합니다.
- 한국어·영어·태그로 검색합니다. 정의와 연결 정리는 별도입니다.
- 정의 펼침과 자기평가, 다음 카드 이동은 분리되어 있습니다.

## 저장

학습 목표·현재 위치·펼침·자기평가·회상 묶음은 브라우저 localStorage의 definition-atlas-v1 키에 저장합니다. 진도를 서버에 전송하지 않으며 로그인은 없습니다. 기기와 브라우저마다 상태가 다릅니다. 내보내기로 JSON 사본을 받을 수 있습니다. 불러오기는 아직 지원하지 않습니다.

## 수정·빌드

Node.js로 npm run build를 실행합니다. npm install은 필요 없습니다. KaTeX와 글꼴은 vendor에 포함되어 빌드와 HTML 열람에 외부 CDN이 필요 없습니다.

- data/source-definitions.json: 기존 149개 정의의 본문
- tools/definition-atlas-model.cjs: 분류·선행 연결·보충 정의
- tools/definition-atlas-app.js: 검색·회상·저장 동작
- tools/definition-atlas.css: 화면 스타일
- tools/build-definition-atlas.cjs: HTML·Markdown·데이터 생성
- definitions.json, 정의체계.md, index.html: 생성 결과

빌드는 정의 태그의 중복·누락, 선행 링크의 누락·순환, 기존 본문의 보존, 수식 렌더링을 검사합니다. main 브랜치 루트를 GitHub Pages로 발행합니다.

## 구성 참고와 제3자 라이선스

[Stacks Project 목차](https://stacks.math.columbia.edu/browse)와 [고정 태그](https://stacks.math.columbia.edu/tags) 방식을 참고했습니다. 이 자료의 태그는 자체 태그입니다. KaTeX의 라이선스는 vendor/LICENSE-KaTeX.txt에 수록했습니다.
