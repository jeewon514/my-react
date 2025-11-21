import React from "react";
import Book from "./Library";   // 라이브러리 라는 컴포넌트 만듦

// 총 3개의 Book 컴포넌트를 렌더링
function Library(props) {
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPages={300} />
      <Book name="처음 만난 AWS" numOfPages={400} />
      <Book name="처음 만난 리액트" numOfPages={500} />
    </div>
  );
}

export default Library;