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
            <p className="mt-4 text-xl text-gray-500">  
            
              We are Zood Ai and our address is Qesm El Maadi, Cairo, Egypt telephone +20 108 092 5119 with email contact (“Zood Ai,” “we,” “us,” “our”). Zood Ai is a business name of Alwans For Information Technology LLC. Zood Ai provides the following products and services (“Products”):
            </p>
            <ul className="list-disc list-inside mt-4 text-xl text-gray-500">
              <li>Zood Ai RMS – a cloud-based restaurant management solution (RMS) including the provision of websites and KIOSKs</li>
              <li>Zood Ai Pay – a licensed payment aggregator</li>
            </ul>
            <p className="mt-4 text-xl text-gray-500">
              In providing the Products, Zood Ai will process personal data. This document sets out how Zood Ai processes personal data for both Zood Ai RMS and Zood Ai Pay. This includes personal data collected when you use our website (“Website”) and Products (together, “Services”).
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              WHAT DOES THIS POLICY COVER?
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Zood Ai takes your personal data seriously and processes it in accordance with applicable laws and regulations. Zood Ai acts as the ‘controller’ (i.e., person responsible for deciding how your personal data is processed) and has adopted this privacy policy (“Policy”) to establish and maintain the privacy and security of your personal data. This Policy:
            </p>
            <ul className="list-disc list-inside mt-4 text-xl text-gray-500">
              <li>Sets out the types of personal data we collect about you</li>
              <li>Explains how and why we collect and use your personal data</li>
              <li>Explains how long we keep your personal data</li>
              <li>Explains how we will share your personal data – when, why, and who with</li>
              <li>Explains the different rights and choices you have when it comes to your personal data</li>
              <li>Explains the security measures we apply to protect your personal data</li>
              <li>Explains how we may contact you and how you can contact us</li>
            </ul>
            <p className="mt-4 text-xl text-gray-500">
              Please understand that by accepting this Policy and submitting any personal data to us, you agree that we may collect, use, disclose, and retain such data in accordance with this Privacy Policy, and as permitted or required by law.
            </p>
          </section>
 
 
          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              WHAT PERSONAL DATA DO WE COLLECT ABOUT YOU AND HOW DO WE COLLECT IT?
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We collect the content, communications, and other information you provide when you use our Services, including during registration or communication with us. This includes your name, email address, phone number, name of your business (if relevant), location/country, and payment information (if relevant).
            </p>
            <p className="mt-4 text-xl text-gray-500">
              For Zood Ai Pay, we need to carry out customer due diligence and KYC, which includes collecting ID validation, CR validation, and other onboarding information.
            </p>
            <p className="mt-4 text-xl text-gray-500">
              For Zood Ai RMS, we collect CR information, ID information, VAT registration information, session/meeting recordings, and other relevant data.
            </p>
            <p className="mt-4 text-xl text-gray-500">
              We also collect usage information, device information, and your opinions about our products and services.
            </p>
          </section>

          {/* Continue adding other sections in a similar format */}

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              HOW CAN YOU CONTACT US?
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              If you are unhappy with how we’ve handled your personal data or have further questions, contact us here:
            </p>
            <ul className="list-disc list-inside mt-4 text-xl text-gray-500">
              <li>By email: privacy@zoodai.com</li>
              <li>
                By written notice to:
                <br />
                The Data Protection Office
                <br />
                Qesm El Maadi, Cairo, Egypt 
                              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
