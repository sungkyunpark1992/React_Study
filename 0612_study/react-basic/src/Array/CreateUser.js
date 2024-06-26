import React from "react";

// input태그 2개(계정,이메일),버튼(추가 처리... )
function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <form>
      <input
        name={"username"}
        placeholder={"계정명"}
        onChange={onChange}
        value={username}
      />
      <input
        type={"email"}
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </form>
  );
}

export default CreateUser;