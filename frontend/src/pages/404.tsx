import { useNavigate } from 'react-router-dom';
import { NotFound } from '../components/pages-styled-components/not-found.styled';
import { translate } from '../translate/translate';
import { TEXT } from '../translate/translate-objects';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <NotFound>
      <h2>{translate(TEXT.pages.notFound.labels.title)}</h2>
      <h4>{translate(TEXT.pages.notFound.labels.content)}</h4>
      <button onClick={() => navigate('/')}>
        {translate(TEXT.pages.home.name)}
      </button>
    </NotFound>
  );
};
