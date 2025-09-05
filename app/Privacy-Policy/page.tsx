import Link from 'next/link';

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <header className="text-center pt-8">
                <h1 className="text-4xl font-bold text-gray-800">Privacy Policy</h1>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Hey there! We know privacy is a big deal, so we’re here to keep things
                    clear and simple. Your trust matters to us, and we’re committed to keeping
                    your data safe and secure.
                </p>
            </header>

            <section className="max-w-3xl mx-auto mt-12 px-4">
                <h2 className="text-2xl font-semibold text-gray-800">
                    1. What Info We Collect
                </h2>
                <p className="text-gray-600 mt-4">
                    We only collect what we need to make your experience awesome. This might
                    include:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Your name and contact details (like email or Telegram handle) when you reach out to us.</li>
                    <li>Basic usage data, like how you navigate our site, to help us improve things.</li>
                    <li>Any info you share when chatting with our community manager (via{' '}
                        <a
                            href="mailto:casualcrave.au@gmail.com"
                            className="underline hover:text-purple-400"
                        >
                            casualcrave.au@gmail.com
                        </a>{' '}
                        or{' '}
                        <a
                            href="https://t.me/JamesGonzalez_CC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-purple-400"
                        >
                            Telegram
                        </a>
                        ).
                    </li>
                </ul>
                <p className="text-gray-600 mt-4">
                    We don’t snoop around for stuff we don’t need, promise!
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8">
                    2. How We Use Your Info
                </h2>
                <p className="text-gray-600 mt-4">
                    Your data helps us keep the platform running smoothly and provide you with
                    a great experience. Here’s what we do with it:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Respond to your questions or support requests (we’re quick, don’t worry!).</li>
                    <li>Improve our site based on how you and others use it.</li>
                    <li>Send you updates or news (only if you opt in, no spam here!).</li>
                </ul>
                <p className="text-gray-600 mt-4">
                    We’ll never sell or share your info with third parties unless you give us
                    the green light or it’s required by law.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8">
                    3. Keeping Your Data Safe
                </h2>
                <p className="text-gray-600 mt-4">
                    Security is our top priority. We’ve got your back with:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Industry-standard encryption for all data, whether it’s in transit (like emails or Telegram chats) or at rest.</li>
                    <li>Secure servers to store your info, protected by the latest tech.</li>
                    <li>Regular audits to make sure everything’s locked down tight.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                    You can chat with our manager via encrypted channels like Telegram or{' '}
                    <a
                        href="mailto:casualcrave.au@gmail.com"
                        className="underline hover:text-purple-400"
                    >
                        casualcrave.au@gmail.com
                    </a>
                    {' '}and know your conversations are private.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8">
                    4. Your Rights
                </h2>
                <p className="text-gray-600 mt-4">
                    You’re in control of your data. Here’s what you can do:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Request a copy of the data we have about you.</li>
                    <li>Ask us to update or delete your info.</li>
                    <li>Opt out of any communications at any time.</li>
                </ul>
                <p className="text-gray-600 mt-4">
                    Just reach out to our community manager at{' '}
                    <a
                        href="mailto:casualcrave.au@gmail.com"
                        className="underline hover:text-purple-400"
                    >
                        casualcrave.au@gmail.com
                    </a>{' '}
                    or on{' '}
                    <a
                        href="https://t.me/JamesGonzalez_CC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-purple-400"
                    >
                        Telegram
                    </a>{' '}
                    to exercise your rights.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8">
                    5. Compliance and Transparency
                </h2>
                <p className="text-gray-600 mt-4">
                    We play by the rules and follow global standards like GDPR to keep things
                    legit. If we ever need to update this policy, we’ll let you know via email
                    or a notice on our site.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-8">
                    6. Got Questions?
                </h2>
                <p className="text-gray-600 mt-4">
                    We’re here to help! If you have any doubts or want to chat about how we
                    keep things secure, contact our community manager:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>
                        Email:{' '}
                        <a
                            href="mailto:casualcrave.au@gmail.com"
                            className="underline hover:text-purple-400"
                        >
                            casualcrave.au@gmail.com
                        </a>
                    </li>
                    <li>
                        Telegram:{' '}
                        <a
                            href="https://t.me/JamesGonzalez_CC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-purple-400"
                        >
                            CC-Manager
                        </a>
                    </li>
                </ul>
                <p className="text-gray-600 mt-4">
                    Thanks for trusting us! We’re all about keeping your experience safe, fun,
                    and worry-free.
                </p>
            </section>

            <footer className="text-center mt-12 pb-8">
                <p className="text-gray-600">
                    Back to{' '}
                    <Link href="/Mngt" className="underline hover:text-purple-400">
                        Community Management
                    </Link>
                </p>
            </footer>
        </main>
    );
}