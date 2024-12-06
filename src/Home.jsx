import zNovaLogo from './assets/znova.png';
import Button from './components/Button/Button';

const Home = () => {
  const name = 'zNova';

  return (
    <>
      Hello {name}
      <br/><br/>
      <img src={zNovaLogo} style={{width: '100px'}} />
      <br/><br/>
      <Button />
    </>
  )
}

export default Home;
