import { useStore } from '@Hooks/useStore';
// Component
import { Service } from './services/Service';

export const Services = () => {
  const { data } = useStore();
  if (!data) return null;
  const services = data?.whatweoffer.services
    .sort((a, b) => (a.order > b.order ? 1 : -1))
    .map(serv => {
      return <Service key={serv.id} data={serv} />;
    });
  return <div className="services">{services}</div>;
};
