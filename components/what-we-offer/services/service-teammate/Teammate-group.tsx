import { ServiceTeammate } from './Teammate';
// Types
import { TeammatesGroupType } from '@Types';

export const TeammateGroup = ({ teammates, handler }: TeammatesGroupType<string>) => {
  const teammatesArticles = teammatesArr.map(t => {
    return <ServiceTeammate key={t.id} data={t} />;
  });
  return (
    <div className="service-teammates" style={{ visibility: 'hidden' }}>
      <button
        className="circle-button circle-m teammates__close-button"
        title="close button"
        aria-labelledby="close button"
        onClick={handler}
      ></button>
      <div className="teammate-group">{teammatesArticles}</div>
    </div>
  );
};

const teammatesArr = [
  {
    id: 'dadadadad',
    title: 'Anastasia Korolevskiy',
    proff: 'YouTube blogger / rigger-videogrof',
    description:
      'Professional approach in the sphere of photography and photoshop, I teach a master class for novice photo industry experts. Repeatedly engaged in photo advertising of various goods. Helsinki-Finland',
    avatar: {
      url: 'https://www.datocms-assets.com/71846/1653465203-anastassia_klement.jpg',
      blurUpThumb:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICA8UChYLDhgQDhgVDhEVIhUYIB8lGCIfFiEdHyslGiIqHRUWJT4lKC0vMjIyGSY4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7Ozs7OzsvOzsvOzs7Ozs7Lzs2NTsvNS8vNTs7Ozs7NS81Ly8vNTsvLy8vLy81LzUvL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABAYHAf/EACQQAAEDAgQHAAAAAAAAAAAAAAABAgQDEgURIYEGExQjQVGR/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUA/8QAGxEAAgIDAQAAAAAAAAAAAAAAAQIAAwQRITH/2gAMAwEAAhEDEQA/AJjBX31ELyG3sbGeYC62tr7NBiVU5Gxl1uQSJOIm6wZI8b1UpRHgK8fXPiqrfCpn9AaVA/Wg7awW9i0NvTvRSnhTVWnkdANjVLqUochNCIYzRbLYqO1zAAOsUBo6nR2f/9k=',
    },
  },
  {
    id: '54ad6wdad',
    title: 'Yura Avalainen',
    proff: 'Piloting drone',
    description:
      'I make exclusive aerial videos using a drone as well as a turnkey budget video segment. Helsinki-Finland.',
    avatar: {
      url: 'https://www.datocms-assets.com/71846/1653465203-anastassia_klement.jpg',
      blurUpThumb:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICA8UChYLDhgQDhgVDhEVIhUYIB8lGCIfFiEdHyslGiIqHRUWJT4lKC0vMjIyGSY4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7Ozs7OzsvOzsvOzs7Ozs7Lzs2NTsvNS8vNTs7Ozs7NS81Ly8vNTsvLy8vLy81LzUvL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABAYHAf/EACQQAAEDAgQHAAAAAAAAAAAAAAABAgQDEgURIYEGExQjQVGR/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUA/8QAGxEAAgIDAQAAAAAAAAAAAAAAAQIAAwQRITH/2gAMAwEAAhEDEQA/AJjBX31ELyG3sbGeYC62tr7NBiVU5Gxl1uQSJOIm6wZI8b1UpRHgK8fXPiqrfCpn9AaVA/Wg7awW9i0NvTvRSnhTVWnkdANjVLqUochNCIYzRbLYqO1zAAOsUBo6nR2f/9k=',
    },
  },
  {
    id: '54a45rtwdad',
    title: 'Evgeni Kamardin',
    proff: 'Film director, editor, camera operator',
    description:
      'Every piece of video art is a story - whether it"s a commercial, fictional movie or documentary. With my work I create bright stories made of objects, color, sounds and words. Helsinki-Finland',
    avatar: {
      url: 'https://www.datocms-assets.com/71846/1653465203-anastassia_klement.jpg',
      blurUpThumb:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICA8UChYLDhgQDhgVDhEVIhUYIB8lGCIfFiEdHyslGiIqHRUWJT4lKC0vMjIyGSY4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7Ozs7OzsvOzsvOzs7Ozs7Lzs2NTsvNS8vNTs7Ozs7NS81Ly8vNTsvLy8vLy81LzUvL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABAYHAf/EACQQAAEDAgQHAAAAAAAAAAAAAAABAgQDEgURIYEGExQjQVGR/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUA/8QAGxEAAgIDAQAAAAAAAAAAAAAAAQIAAwQRITH/2gAMAwEAAhEDEQA/AJjBX31ELyG3sbGeYC62tr7NBiVU5Gxl1uQSJOIm6wZI8b1UpRHgK8fXPiqrfCpn9AaVA/Wg7awW9i0NvTvRSnhTVWnkdANjVLqUochNCIYzRbLYqO1zAAOsUBo6nR2f/9k=',
    },
  },
  {
    id: '54agdgdad',
    title: 'Igor Ivanov',
    proff: 'Marketer',
    description:
      'I do it quickly and efficiently, I shoot weddings and public events, as well as real estate. Helsinki-Finland',
    avatar: {
      url: 'https://www.datocms-assets.com/71846/1653465203-anastassia_klement.jpg',
      blurUpThumb:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHBwgHBgoICA8UChYLDhgQDhgVDhEVIhUYIB8lGCIfFiEdHyslGiIqHRUWJT4lKC0vMjIyGSY4PTcwPCsxMi8BCgsLDg0OHBAQHDsoIig7Ozs7OzsvOzsvOzs7Ozs7Lzs2NTsvNS8vNTs7Ozs7NS81Ly8vNTsvLy8vLy81LzUvL//AABEIABgAGAMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAABAYHAf/EACQQAAEDAgQHAAAAAAAAAAAAAAABAgQDEgURIYEGExQjQVGR/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwQBAgUA/8QAGxEAAgIDAQAAAAAAAAAAAAAAAQIAAwQRITH/2gAMAwEAAhEDEQA/AJjBX31ELyG3sbGeYC62tr7NBiVU5Gxl1uQSJOIm6wZI8b1UpRHgK8fXPiqrfCpn9AaVA/Wg7awW9i0NvTvRSnhTVWnkdANjVLqUochNCIYzRbLYqO1zAAOsUBo6nR2f/9k=',
    },
  },
];
