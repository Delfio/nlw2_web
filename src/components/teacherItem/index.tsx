import React from 'react';
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';

// import { Container } from './styles';
import './styles.css';

interface TeacherItemProps {
    name: string;
    matter: string;
    description: string;
    pricePerHour: string;
    imageLink?: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({
  description,
  matter,
  name,
  pricePerHour,
  imageLink,
}) => (
  <article className="teacher-item">
    <header>
      <img
        src={imageLink
            || 'https://avatars2.githubusercontent.com/u/42546922?s=400&u=7e7ee3bc668ac96dab3ed6f5653ff1940413cc7b&v=4'}
        alt={name}
      />
      <div>
        <strong>{name}</strong>
        <span>{matter}</span>
      </div>
    </header>
    <p>{description}</p>

    <footer>
      <p>
        Preço/hora
        <strong>
          {' '}
          R$
          {pricePerHour}
        </strong>
      </p>
      <button>
        <img src={WhatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;
