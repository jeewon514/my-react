import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");  // 기본값 설정

  const handleChange = (event) => {
    setName(event.target.value);
  };

  // 성별 변경 핸들러 (추가 기능)
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`이름: ${name}, 성별: ${gender}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <br />

      <label>
        성별:
        <select value={gender} onChange={handleGenderChange}>
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
      </label>

      <button type="submit">제출</button>
    </form>
  );
}

export default SignUp;