import ProfileCard from '../../components/ProfileCard';

interface CcMngtPageProps {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}

export default async function CcMngtPage({ params, searchParams }: CcMngtPageProps) {
  // Resolve params and searchParams
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  // Example profile data (replace with actual data fetching logic)
  const profile = {
    name: 'Jane Smith',
    description: 'Chief Community Manager with over 10 years of experience in customer engagement.',
    mngttelegram: 'https://t.me/JamesGonzalez_CC',
    gmail: 'casualcrave.au@gmail..com',
  };

  // Optional: Fetch profile dynamically
  /*
  const profile = await fetchProfile(resolvedParams.id);
  if (!profile) {
    return <div className="text-center text-red-600 mt-8">Error: Profile not found</div>;
  }
  */

  return (
    <main className="min-h-screen bg-gray-100 ">
      <header className="text-center pt-8">
        <h1 className="text-4xl font-bold text-gray-800">Community Management</h1>
        <p className="text-gray-600 mt-2">Meet our dedicated community manager</p>
      </header>
<a
  href="/Profiles"
  className="inline-block mt-8 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
>
  Back To Profile
</a>

      {/* Contact Information */}   
      <section className="text-center mt-12 px-4">
        <h2 className="text-2xl font-semibold text-gray-800">Contact Information</h2>
        <p className="text-gray-600 mt-2">
          Reach out to our manager for any inquiries or support:
        </p>
        <ul className="mt-4 text-gray-700">
          <li className="mb-2">
            <a
              href={`mailto:${profile.gmail}`}
              className="underline hover:text-purple-400"
            >
              Email: {profile.gmail}
            </a>
          </li>
          <li>
            <a
              href={profile.mngttelegram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-purple-400"
            >
              Telegram: @{profile.mngttelegram.split('/').pop()}
            </a>
          </li>
        </ul>
      </section>

      {/* Privacy and Policy Section */}
      <section className="max-w-3xl mx-auto mt-12 px-4 pb-12">
        <h2 className="text-2xl font-semibold text-gray-800">Privacy & Security</h2>
        <p className="text-gray-600 mt-4">
          We are committed to ensuring a secure and trustworthy platform for all our users. 
          Your data is protected with industry-standard encryption, and we adhere to strict 
          privacy policies to safeguard your information.
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-4">
          <li>All communications via Telegram and Gmail are encrypted.</li>
          <li>We do not share your personal information with third parties without consent.</li>
          <li>Our platform complies with GDPR and other relevant data protection regulations.</li>
        </ul>
        <p className="text-gray-600 mt-4">
          For more details, please review our{' '}
          <a href="/Privacy-Policy" className="underline hover:text-purple-400">
            Privacy Policy
          </a>{' '}
          or contact our manager directly.
        </p>
      </section>
    </main>
  );
}