import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export default getRequestConfig(async ({locale}) => {
  if (!locale) {
    notFound();
  }

  try {
    return {
      messages: (await import(`./messages/${locale}.json`)).default,
      locale
    };
  } catch (error) {
    notFound();
  }
}); 