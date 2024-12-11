import { useNavigate } from "react-router-dom";
const TermsAndConditions = () => {
   const navigate = useNavigate();
    return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> 
        <button className="flex items-center gap-1" onClick={()=>navigate(-1)}> 
             <div className="w-5 h-5 font-medium   cursor-pointer hover:bg-blue-400 rounded-full flex items-center justify-center"> 
             <span>&#8592;</span> 
             </div>       
              <span>Back</span>
        </button>
        <div className="lg:text-center">
          <h1 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Terms and Conditions</h1>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Overview</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The following Terms and Conditions are a legal agreement between you, otherwise known as Zood Ai, 
              the user (“you,” “your”) and Zood Ai, 
              which includes [insert all sister companies/subsidiaries] (“Zood Ai,” “we,” “us,” “our”), in order 
              to govern your use of Zood Ai’s services, including mobile applications, websites, software, 
              hardware, and other products and services (collectively, the “Services”).
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              By signing up and creating a Zood Ai account, visiting our website and/or subscribing to one of our services, 
              you therefore agree to be bound by the following Terms and Conditions, including additional rules, regulations, 
              and policies referenced herein. These Terms and Conditions apply to all users of the website, including, without 
              limitation, users who are browsers, vendors, customers, merchants, and/or contributors of content.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Please read these Terms and Conditions carefully before accessing or using our website. If you do not agree 
              to all the Terms and Conditions of this agreement, then you may not access the website or use any services.
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Account Registration</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Zood Ai offers a cloud-based management system to enable restaurants, coffee shops, food trucks, retail shops 
              (Customers) to manage, assess, track, optimize, and scale their business operations and meet their needs accordingly. 
              You must open an account with us (a “Zood Ai Account”) to use the Services. During registration, we will ask you for 
              information, which may include but is not limited to, your name and other personal information. You must provide 
              accurate and complete information in response to our questions, and you must keep that information up-to-date.
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Account Cancellation & Data Protection</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Zood Ai reserves the right to cancel or terminate any Zood Ai account in violation of the Terms and Conditions 
              as well as Privacy Policies of this agreement; in which case Zood Ai also reserves the right to hold on to any 
              personal information belonging to the customer in question in its database, for a period of one month starting 
              from the cancellation date.
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Confidentiality</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Only you have the right to access and use your account. You are responsible for ensuring that your login information 
              remains confidential at all times. Zood Ai will assume that in case your login information is used to access the 
              Services by a user other than yourself, the latter has the legal authority to use such credentials. If you become 
              aware of an unauthorized login from an unknown user, you agree to notify Zood Ai immediately by email at support@zoodai.com.
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Data Privacy & Security</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              The privacy and security of your personal information is important to us. Zood Ai’s Privacy Policy describes 
              and defines the types of personal information we collect about you, and the means in which we use them, in 
              compliance with International Comparative Law. We encourage you to read the Privacy Policy carefully, as it 
              forms a binding part of these Terms and Conditions and contains important information about your rights.
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Closing Your Account</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              You may close your Zood Ai account at any time and without cost, but you will remain liable for any outstanding 
              Purchases as well as any fees or other charges incurred. Zood Ai will not issue refunds for amounts previously 
              incurred through our Services once you close your account.
            </p>
          </section>

          <section>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Disclaimer</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              To the maximum extent permitted by applicable international comparative law, we exclude all representations, warranties, 
              and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto list-disc list-inside">
              <li>Limit or exclude our or your liability for death or personal injury;</li>
              <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>Limit any of our or your liabilities in any way that is not permitted under applicable international comparative law;</li>
              <li>Exclude any of our or your liabilities that may not be excluded under applicable international comparative law.</li>
            </ul>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              As long as the website and the information and services on it are provided free of charge, we will not be liable for any 
              loss or damage of any nature.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
