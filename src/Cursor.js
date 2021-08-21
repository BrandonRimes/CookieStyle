function Cursor(props) {

  window.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.top = `${-100 + (e.pageY / 15)}vw`;
    cursor.style.left = `${-100 + (e.pageX / 15)}vw`;
  });

  return <div id='cursor'></div>;
}

export default Cursor;
