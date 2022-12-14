

- ### 빌드 방법 명시
  - server : npm run dev
  - client : npm start
- ### 프로젝트 설명
  - 우선 express.js로 웹서버를 만들어놓고, 클라이언트에서 Form이 submit되면 데이터는 dispatch에 담아
  -  비동기 처리를 위해 생성해놓은 createAsyncThunk안의 shoppingAge함수를 호출합니다.
  - 데이터는 shoppingAge함수에 인자로 넣어줍니다.
  - /age로 post 요청시, 서버에서 naver datalab 데이터(https://openapi.naver.com/v1/datalab/shopping/category/keyword/age)를 가져오도록 만들었습니다. <br />
  - 그렇게 생성한 데이터는 **chart reducers**로 보내고, 데이터를 가공하여 state에 저장합니다.
  - chart 컴포넌트에서 useSelector를 사용해, state를 가져와서 line chart의 props으로 넣어줍니다.

### CORS 이슈 해결방법
- client에서, npm i http-proxy-middleware를 설치하여, setupProxy파일을 만들고, /v1으로 시작하는 모든 서버 URL을 target에 명시된 URL로 호출되도록 만들었습니다. 
- server에서, npm i cors를 설치하여, 모든 도메인에서 제한 없이 해당 서버에 요청을 보내고 응답을 받을 수 있도록 만들었습니다.

- ### 선택 구현 사항 체크 <br />
  - [o]  Antd를 활용하여 화면을 꾸민다 (디자인은 자유)  <br />
  - [o]  Redux-Persist를 활용하여 새로고침 시, 연령별 트렌드 조회의 파라미터가 유지되도록 구성한다  <br />
  - [o]  Custom Hook에서 비즈니스 로직, 상태관리, 비동기처리를 따로 처리한다.  <br />
