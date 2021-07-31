# my-todolist
## JavaScript, CSS, HTML를 사용한 Chrome WEB Todo List 클론코딩
<br>

background.js + quotes.js
- 행렬을 통해 랜덤 백그라운드, 송출 문구 지정
- Math.random, Math.floor 기능을 사용한 행렬 순번 randomize

clock.js
- Date 객체를 사용하여 날짜, 시간 정보 표현
- SetInteval: 일정 주기로 함수가 실행되도록 타이머 설정

login.js
- submit event가 발생할 시, Localstorage에 유저 정보 저장
- 유저 정보 저장 유무에 따라 기존의 form을 hidden, greeting message를 삽입하여 나타나게 함.

todo.js
- 유저로부터 submit된 value를 localstorage에 string화된 객체(id와 todo)배열로 저장
- 선택한 list를 삭제하기 위해 id를 이용함
- localstorage에 저장된 정보의 유무로 li 표현
- li의 추가 밒 삭제 기능

weather.js
- openweatehrmap의 API를 사용하여 실시간 위치, 날씨, 기온 정보를 표현
- 함수를 사용하여 온도에 따라 대표 아이콘이 변경되게 설정

<br>

계획
- 로그아웃 버튼 추가
- 로그인 기능을 통해 본인의 todo-list만 접근가능하게 변경
![0731_todolist](https://user-images.githubusercontent.com/82889580/127730702-120c67fd-b6f1-4654-a0f6-19d14d8f85a6.gif)
