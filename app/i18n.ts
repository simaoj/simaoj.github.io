import { getRequestConfig } from 'next-intl/server';
import pt from '@/messages/pt.json';
import en from '@/messages/en.json';

export default getRequestConfig(async ({ locale }: any) => {
  const messages = locale === 'en' ? en : pt;
  
  return {
    locale: locale || 'pt',
    messages,
  };
});
