import { LittleTitle } from './components/LittleTitle';
import { LittleImage } from './components/LittleImage';
import { LittleWrapper } from './layout/LittleWrapper';

import "./styles/global.css";
import { LittleFooter } from './components/LittleFooter';

const LittleApp = () => {
  return (
    <LittleWrapper>
      <LittleTitle />
      <LittleImage image={"blue1"} />
      <LittleFooter />
    </LittleWrapper>
  );
}

export default LittleApp;
