import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('app');
  return <h1>{t('welcome')}</h1>;
}