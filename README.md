# 코딩리스트


---

# 설정 방법 안내

## 1. 터미널 환경 설정
1. 터미널 내장 IDE 사용할 경우
    - 내장 터미널 사용 (ex. VS code)

2. 별도의 IDE 사용할 경우
    - git bash 설치
        - git bash 설치파일 다운로드 [64-bit Git for Windows Setup](https://github.com/git-for-windows/git/releases/download/v2.21.0.windows.1/Git-2.21.0-64-bit.exe)
        - 설치 후 마우스 우클릭 -> 'Git Bash here' 클릭하면 터미널 실행 됨

---

## 2. node.js 환경 설정
1. node 버전 관리를 위해 nvm 설치
    - [nvm 다운로드](https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip)

2. node.js 특정버전 설치 및 사용
    - 터미널 실행
    - 터미널$ nvm install v10.15.3  (본 프로젝트 환경은 node버전 10.15.3)
    - 터미널$ nvm use v10.15.3   (node 10.15.3 버전 사용하기)
    - 이런식으로 버전별 node를 설치 후 선택하여 사용 가능
    - nvm ls   (설치된 node 버전 모두 보기)
    - nvm use vX.X.X   (특정 node 버전 사용하기)

---

## 3. git clone
1. 작업할 폴더에서 터미널 실행 후
    - git clone https://gitlab.com/sseung/sample.git

2. 퍼미션 문제 발생할 경우
    - 터미널에서 다음을 실행 (참고 https://zeddios.tistory.com/120)
        - ssh-keygen -t rsa -C "자기 gitlab 이메일 아이디" (ex. ssh-keygen -t rsa -C "dptmejf34@gmail.com")
        - 'enter file in which to save the key....'라고 나오면 엔터
        - 'enter passphrase....'라고 나오면 자기만의 비번 입력하거나 엔터 (엔터치면 비번 없이 진행)
        - 'enter same passphrase again' 나오면 위에 입력했던 비번 똑같이 한번 더 입력
        - c:/Users/xxxx/.ssh/ 경로로 이동
        - id_rsa.pub 파일을 에디터로 열고 내용 복사
        - gitlab 로그인 > clone하려는 저장소로 이동 > settings > repository > deploy Keys (expand 클릭)
        - Title에 자기마음대로 타이틀 입력
        - Key에 id_rsa.pub에서 복사한 내용 붙여넣기
        - Write access allowed 에 체크
        - Add key 클릭
        - 등록 완료되면 git clone 진행 (반드시 ssh 링크로 클론)

3. git 공부하기
    - https://milooy.wordpress.com/2017/06/21/working-together-with-github-tutorial/
    - https://backlog.com/git-tutorial/kr/
    - https://git-scm.com/book/ko/v1/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0

---

## 4. gulp 및 프로젝트 환경 세팅
1. gulp 전역 설치
    - npm install -g gulp

2. 패키지 모듈 설치
    - npm install

3. 작업시작
    - gulp
        - 자동으로 빌드 된 후 http://localhost:3000 자동 실행
        - 파실 수정시 자동으로 새로고침 됨

4. 작업 완료 후 산출물 생성
    - gulp build
        - ./dist/ 폴더에 산출물 생성

---

## 5. 폴더 구조

- markup (기본작업폴더)
    - assets
        - fonts   (폰트파일)
        - img
            - m (Mobile용 이미지)
        - js (기본 js)
            - lib   (js 라이브러리)
        - css (라이브러리 및 기본 스타일시트)
            - import   (기본세팅용 scss)
    - html (HTML)
        - include (인클루드용 html)

---

## 6. html include
- 인클루드 할 파일을 '_파일명.html' 형태로 생성
- 인클루드 할 위치에 아래의 코드 삽입
```
<!--#include file="_파일명.html"-->
```

---

## 7. fonts 설정
- font-family:"Noto Sans KR"
    - Thin : font-weight:100
    - Light : font-weight:300
    - DemiLight : font-weight:350
    - Regular : font-weight:400
    - Medium : font-weight:500
    - Bold : font-weight:700
    - Black : font-weight: 900

---