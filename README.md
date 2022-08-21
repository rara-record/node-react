

## 아이겐코리아 온라인 테스트 지원자 김보라

- 지원자 이름 : 김보라
- 빌드 방법 명시
- 프로젝트 설명

  > 우선 express.js로 웹서버를 만들어놓고,<br />
  > 클라이언트에서 Form이 submit되면, 데이터는 dispatch에 담아, createAsyncThunk를 사용하여 비동기 처리를 합니다.<br />
  > 데이터는 생성해 놓은 shoppingAge라는 함수에, 인자로 넣어 /age로 post 요청시, 서버에서 naver datalab 데이터(https://openapi.naver.com/v1/datalab/shopping/category/keyword/age)를 가져오도록 만들었습니다. <br />

  - 상태관리는 redux-toolkit, 차트는 Chart.js를 썼습니다.

- 선택 구현 사항 체크 <br />
[o]  Antd를 활용하여 화면을 꾸민다 (디자인은 자유)  <br />
[o]  Redux-Persist를 활용하여 새로고침 시, 연령별 트렌드 조회의 파라미터가 유지되도록 구성한다  <br />
[o]  Custom Hook에서 비즈니스 로직, 상태관리, 비동기처리를 따로 처리한다.  <br />
