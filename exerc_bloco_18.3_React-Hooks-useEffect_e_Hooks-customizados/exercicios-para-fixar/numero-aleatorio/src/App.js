import { useEffect, useState } from 'react';

const App = () => {

  const [state, setState] = useState({
    acerto: ''
  });

  // useEffect(() => {
  //   const random = setTimeout(() => {

  //     const randomNumber = (Math.random() * (100 - 1) + 1).toFixed(0);

  //     if (randomNumber % 3 || randomNumber % 5 === 0) {
  //       setState({
  //         acerto: `acerto = ${randomNumber}`
  //       })
  //     } else {
  //       setState({
  //         acerto: `not acerto = ${randomNumber}`
  //       })
  //     }
  //   }, 2000);

  // }, [state])
  const randomNumber = (Math.random() * (100 - 1) + 1).toFixed(0);

  const number = () => {

    if (randomNumber % 3 || randomNumber % 5 === 0) {
      setState({
        acerto: `acerto = ${randomNumber}`
      })
    } else {
      setState({
        acerto: `not acerto = ${randomNumber}`
      })
    }

    return randomNumber;
  }

  useEffect(() => {

    setInterval(number, 2000)

  }, [state])

  return (
    <div>
      <h1>{ state.acerto }</h1>
    </div>
  );
}

export default App;
