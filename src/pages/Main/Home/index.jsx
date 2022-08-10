import * as H from './styles';
import Filter from '../components/Filter';
import Logo from '../../../assets/Logo.svg';
import IconAvatar from '../../../assets/IconAvatar.svg';
import IconExit from '../../../assets/IconExit.svg';

function Home() {
  return (
    <H.Container>
      <div className='logo-user'>
        <div className='logo'>
          <img src={Logo} />
        </div>
        <div className='user'>
          <img src={IconAvatar} />
          <span>Matheus</span>
          <img src={IconExit} />
        </div>
      </div>
      <div className='home'>
        <Filter />
      </div>
    </H.Container>
  );
}

export default Home;
