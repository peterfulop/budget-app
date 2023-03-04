import { Content, Languages } from './translate.scema';

export const translate = (text: Content, concat?: string, lang?: Languages) => {
  return text[lang ? lang : Languages.ENG].concat(concat || '');
};
