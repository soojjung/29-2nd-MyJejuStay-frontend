import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

// 리다이렉트될 화면
const Auth = () => {
  const REST_API_KEY = '753fa32a20866466c9a76c85fadd85f4'; // client_id
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  // const CLIENT_SECRET = 'x5R8UIvydO7ljNNhVXP5K3Wwr6hz4C4e';

  // callback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  // 다시 카카오에게 인가코드로 토큰 요청한다
  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      // client_secret: CLIENT_SECRET,
    });

    try {
      // access token 가져오기
      const res = await axios.post(
        'https://kauth.kakao.com/oauth/token',
        payload
      );

      const access_token = res.data.access_token;
      // console.log('access_token : ', access_token);

      // access token 백엔드에 보내주기
      fetch('http://10.58.7.31:8000/users/kakaologin', {
        // method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: access_token,
        },
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if (data) {
            // alert(data);
            // 돌려받은 유저데이터를 로컬스토리지에 저장.
            try {
              sessionStorage.setItem('token', data.token);
            } catch (err) {
              // console.log(err);
            }

            // 회원가입 화면으로 전환 -> 후에 로그인으로 바꾸기
          } else {
            alert('로그인 실패하였습니다.');
            navigate('/signup');
          }
        });
      // navigate('/app');
    } catch (err) {
      alert(err);
      // console.log(err);
    }
  };

  getToken();

  return <div>로딩중입니다...</div>;
};

export default Auth;
