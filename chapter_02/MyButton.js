// 기본적인 react 버튼 컴포넌트
function MyButton() {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    {'onClick': () => setIsClicked(true)},
    isClicked ? 'Clicked!' : 'Click here!'
  )
}
  const domContainer = document.querySelector('#root');
  const root = ReactDOM.createRoot(domContainer);
  root.render(React.createElement(MyButton));
