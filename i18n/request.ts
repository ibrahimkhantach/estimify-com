import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async () => {
    // For now, we'll use a simple approach with localStorage on client
    // Default to English
    const locale = 'en';

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
