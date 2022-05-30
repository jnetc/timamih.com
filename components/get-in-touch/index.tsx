import { useStore } from '@Hooks/useStore';
// Component
import { Illustration } from './GetInTouchSVG';
import { Contacts } from './Contacts';
const GetInTouch = () => {
  const { data } = useStore();
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
      <Illustration />
    </section>
  );
};

export default GetInTouch;
