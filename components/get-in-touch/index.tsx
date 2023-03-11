import Image from 'next/image';
import { useStore } from '@Hooks/useStore';
// Component
// import { Illustration } from './GetInTouchSVG';
import { Contacts } from './Contacts';
const GetInTouch = () => {
  const { data, darkTheme } = useStore();
  const switchTheme = darkTheme ? 'dark' : 'light';

  if (!data) return null;
  const {
    getintouch: { description, title },
  } = data;
  return (
    <section id="get-in-touch" className="get-in-touch">
      <header className="section-header">
        <h1 className="section-title">{title}</h1>
        <p className="description-section">{description}</p>
      </header>
      <Contacts />
      <Image src={`/images/contact ${switchTheme}.svg`} alt="Contact with us" width={0} height={0} className="illustration" />
    </section>
  );
};

export default GetInTouch;
