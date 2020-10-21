import React, { useEffect, useState } from "react";

const List = () => {
  const [noticeList, setNoticeList] = useState([]);

  useEffect(() => {
    mo();
  }, []);

  function mo() {
    fetch("http://10.100.102.36:8000/post").then().then();
  }

  return <div></div>;
};

export default List;
