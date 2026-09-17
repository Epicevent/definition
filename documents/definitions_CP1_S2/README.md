# CP1 / S2 정의와 예시 TeX

definitions_CP1_S2.tex는 입력 파일 없이 컴파일되는 단일 TeX입니다. 받은 원고의 정의 25개와 통합 정의집 161개, 총 186개 정의 항목에 예시를 넣었습니다. 연결 정리 8개와 원고의 Calabi–Yau 정리에도 별도의 예시가 있습니다.

## 컴파일

XeLaTeX 또는 Tectonic을 사용하세요. pdfLaTeX용 파일이 아닙니다.

    xelatex definitions_CP1_S2.tex
    xelatex definitions_CP1_S2.tex

또는

    tectonic definitions_CP1_S2.tex

Overleaf에서는 Compiler를 XeLaTeX으로 선택합니다. Windows에서는 Malgun Gothic을 쓰며, 없으면 Noto Serif CJK KR 또는 kotex의 기본 글꼴을 사용합니다. 첫 실행에는 TeX 패키지가 필요할 수 있습니다.

## 구조

1. 공통 CP1/S2 좌표·계량·곡률·방향 규약
2. 받은 TeX 원고와 각 정의의 예시
3. 고정 태그를 보존한 전체 정의 체계와 각 항목의 선행 정의·예시
4. 연결 정리와 적용 예시

coverage.json은 누락 검사 목록입니다. 원본 파일과 기존 웹 정의 본문은 덮어쓰지 않았습니다.
