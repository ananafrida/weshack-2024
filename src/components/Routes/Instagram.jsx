import { useEffect } from 'react';

function Instagram() {
  useEffect(() => {
    window.location.href = 'https://www.instagram.com/code_wes/';
  }, []);
  return <div></div>;
}

export default Instagram;
