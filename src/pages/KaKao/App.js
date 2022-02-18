import React, { useEffect } from 'react';
// import Auth from './Auth';

// 피어리뷰때 할 설명 --
// 맨처음에 카카오 developers에 들어가서 REST API key와 Admin key, Redirect URI를 받아온다.
// App.js파일에 변수를 만들어 값들을 담아놓고, KAKAO_AUTH_URL에 필요한 값들을 합친다.
// Router에 App 경로를 만들고, KAKAO_AUTH_URL로 들어가는 링크를 리턴하게 한다.
// npm start를 해서 해당 링크로 들어가 카카오 로그인을 한다.
// 카카오와 정상적으로 통신을 하면(REST_API_KEY가 맞으면), 카카오에게 queryStringBody를 보내고,
// 설정된 REDIRECT_URI주소로 카카오에게 인가코드를 받게 된다 (Router에 "/oauth/kakao/callback"를 추가하고 Auth가 실행되게 한다).

// 개발자도구 - Network - Fetch/XHR
function App() {
  const REST_API_KEY = '753fa32a20866466c9a76c85fadd85f4';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    const authorizeCodeFromKakao = window.location.search.split('=')[1];
    // 현재 url에서는 '='이 없으니 undefined라고 뜬다
    // 로그인을 하면 authorizeCodeFromKakao 나온다

    if (authorizeCodeFromKakao !== undefined) {
      // console.log(`authorizeCodeFromKakao : ${authorizeCodeFromKakao}`);

      const body = {
        grant_type: 'authorization_code',
        client_id: process.env.REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code: authorizeCodeFromKakao,
      };

      const queryStringBody = Object.keys(body)
        .map(k => encodeURIComponent(k) + '=' + encodeURI(body[k]))
        .join('&');

      fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body: queryStringBody,
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
        });
    }
    // authorizeCodeFromKakao가 undefined 일때 - 맨처음 App 실행할때
    else {
      // console.log('No AuthorizeCodeFromKakao', authorizeCodeFromKakao);
    }
  }, []);

  return (
    <div className="App">
      <h1>
        <a href={KAKAO_AUTH_URL}>카카오 로그인하기 : KaKao Login</a>
      </h1>
    </div>
  );
}

export default App;
