import { useEffect, useState } from 'react';

export function useRecaptcha() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        setIsReady(true);
        return;
      }

      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;
      script.onload = () => setIsReady(true);
      document.head.appendChild(script);
    };

    loadRecaptcha();
  }, []);

  const getToken = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (!window.grecaptcha) {
        reject('reCAPTCHA not loaded');
        return;
      }

      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, {
            action: 'submit'
          })
          .then(resolve)
          .catch(reject);
      });
    });
  };

  return { isReady, getToken };
}

declare global {
  interface Window {
    grecaptcha: any;
  }
}
