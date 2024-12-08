import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button className="flex items-center gap-1" onClick={() => navigate(-1)}>
          <div className="w-5 h-5 font-medium cursor-pointer hover:bg-blue-400 rounded-full flex items-center justify-center">
            <span>&#8592;</span>
          </div>
          <span>Back</span>
        </button>
        <div className="lg:text-center">
          <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy
          </h1>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              WHO WE ARE AND WHAT WE DO
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We are Zood Ai and our address is Imam Saud Bin Faisal Rd, Riyadh, 13515, 2nd Floor, Kingdom of Saudi Arabia telephone 800 1000 119 with email contact (“Zood Ai,” “we,” “us,” “our”). Zood Ai is a business name of Alwans For Information Technology LLC. Zood Ai provides the following products and services (“Products”):
            </p>
            <ul className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto list-disc list-inside">
              <li>
                Zood Ai RMS – a cloud-based restaurant management solution (RMS) including the provision of websites and KIOSKs.
              </li>
              <li>
                Zood Ai Pay – a licensed payment aggregator.
              </li>
            </ul>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              In providing the Products, Zood Ai will process personal data. This document sets out how Zood Ai processes personal data for both Zood Ai RMS and Zood Ai Pay. This includes personal data collected when you use our website (“Website”) and Products (together, “Services”).
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              DATA WE COLLECT
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Zood Ai collects personal data that you provide directly to us when using our Services, such as during registration, subscription, and interaction with customer support. This may include your name, email address, phone number, payment details, and other necessary information.
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              HOW WE USE YOUR DATA
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Zood Ai uses your personal data to deliver our Services, process transactions, provide customer support, improve our products, and comply with legal obligations. We may also use your data for marketing purposes if you provide explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              SHARING YOUR DATA
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We may share your data with trusted third parties that help us provide our Services, such as payment processors, cloud storage providers, and analytics services. We ensure that these parties comply with strict data protection requirements.
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              YOUR RIGHTS
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              You have the right to access, correct, or delete your personal data. Additionally, you can object to or restrict the processing of your data under certain circumstances. To exercise these rights, contact us at support@zoodai.com.
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              CHANGES TO THIS POLICY
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Zood Ai may update this Privacy Policy from time to time. We will notify you of significant changes through email or by placing a notice on our Website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
