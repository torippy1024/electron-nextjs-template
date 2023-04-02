import {AiFillCalculator, AiFillGithub} from 'react-icons/ai';
import ExternalLink from '../common/ExternalLink';
import {COMMON_INFO} from '../../const';

const Footer = () => {
  return (
    <footer className='footer p-4 bg-neutral text-neutral-content flex items-center justify-between'>
      <div className='items-center grid-flow-col'>
        <AiFillCalculator size={32} />
        <p>©torippy 2022</p>
      </div>
      <div className='grid-flow-col gap-4'>
        <ExternalLink href={COMMON_INFO.GITHUB_URL}>
          <AiFillGithub size={24} />
        </ExternalLink>
      </div>
    </footer>
  );
};

export default Footer;
