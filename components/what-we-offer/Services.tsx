import { useStore } from '@Hooks/useStore';
// Component
import { Service } from './services/Service';

export const Services = () => {
  const { data } = useStore();
  const services = data?.whatweoffer.services.map(serv => {
    return <Service key={serv.id} data={serv} />;
  });
  return <div className="services">{services}</div>;
};
