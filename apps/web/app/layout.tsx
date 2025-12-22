import { cookies } from 'next/headers';
import ClientLayout from './ClientLayout';
import { AbstractIntlMessages } from 'next-intl';

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';

    let messages: AbstractIntlMessages;
    try {
        messages = (await import(`../messages/${locale}.json`)).default;
    } catch (error) {
        // If translation not found, fallback to default (en)
        messages = (await import(`../messages/en.json`)).default;
    }

    return (
        <ClientLayout locale={locale} messages={messages}>
            {children}
        </ClientLayout>
    );
}
