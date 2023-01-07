import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import React, { useState } from 'react';
import Test from './Test';

function App() {
  const [userData, setUserData] = useState<User | null>(null);

  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider를 구글로 설정
    signInWithPopup(auth, provider) // popup을 이용한 signup
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console로 들어온 데이터 표시
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <Test></Test>
      <button onClick={handleGoogleLogin}>Login</button>
      {userData ? userData.displayName : null}
    </div>
  );
}

export default App;
