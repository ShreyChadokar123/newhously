import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '@/components/Layout';

const TermsAndConditions = () => {
  const paragraphStyle = {
    fontSize: '15.5px',
    fontWeight: 400,
    lineHeight: '1.7',
    textAlign: 'justify',
    color: '#333',
  };

  const sectionHeaderStyle = {
    fontSize: '19px',
    fontWeight: 600,
    color: '#0074d9',
    marginBottom: '12px',
  };

  const containerStyle = {
    fontFamily: "'Glacial Indifference', sans-serif",
    backgroundColor: '#f8f9fa',
    padding: '2rem',
  };

  const headingStyle = {
    fontSize: '34px',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: '30px',
  };

  return (
     <Layout>
    <div style={containerStyle}>
      <div className="container shadow rounded p-4" style={{ backgroundColor: 'white' }}>
        <h2 style={headingStyle}>
          <span style={{ color: '#000' }}>Terms and </span>
          <span style={{ color: '#0074d9' }}>Conditions</span>
        </h2>

        <section className="mb-4">
          <h5 style={sectionHeaderStyle}>1. Introduction</h5>
          <p style={paragraphStyle}>
            Welcome to HouslyFintech, your trusted destination for smart financial solutions.
            By using our website, tools, or services, you acknowledge that you’ve read, understood,
            and agreed to comply with our terms. These terms are designed to protect both our
            interests and yours, ensuring a transparent and seamless experience.
          </p>
        </section>

        <section className="mb-4">
          <h5 style={sectionHeaderStyle}>2. Services Offered</h5>
          <p style={paragraphStyle}>
            At HouslyFintech, we bridge the gap between financial institutions and users by
            providing innovative digital solutions. Whether you're comparing loans, seeking
            expert financial insights, or getting referred to reputed lenders, our tools are
            tailored to empower your financial journey with accuracy and ease.
          </p>
        </section>

        <section className="mb-4">
          <h5 style={sectionHeaderStyle}>3. User Responsibilities</h5>
          <ul style={{ ...paragraphStyle, paddingLeft: '20px' }}>
            <li>Provide accurate and truthful information to help us serve you better.</li>
            <li>Refrain from using the website for any unlawful or malicious purposes.</li>
            <li>Maintain confidentiality and security of your login credentials at all times.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h5 style={sectionHeaderStyle}>4. Intellectual Property</h5>
          <p style={paragraphStyle}>
            All materials featured on HouslyFintech, including brand elements, visuals,
            written content, and proprietary technologies, are legally protected. These are
            solely owned by HouslyFintech and may not be copied, redistributed, or modified
            without express permission. Legal actions may be pursued in case of violations.
          </p>
        </section>

        <section className="mb-4">
          <h5 style={sectionHeaderStyle}>5. Third-Party Links</h5>
          <p style={paragraphStyle}>
            For added convenience, we may provide links to external websites or partners.
            However, we do not monitor or endorse these third-party sites. Users are advised
            to independently verify the credibility of such sites and are solely responsible
            for any risks or consequences resulting from their use.
          </p>
        </section>

        <section className="mb-4">
          <h5 style={sectionHeaderStyle}>6. Limitation of Liability</h5>
          <p style={paragraphStyle}>
            While we strive for excellence and accuracy in our services, HouslyFintech is
            not liable for unforeseen errors, service interruptions, or damages arising from
            platform use. Financial decisions made using our platform should be double-checked
            with certified professionals before implementation.
          </p>
        </section>

        <section className="mb-4">
          <h5 style={sectionHeaderStyle}>7. Changes to Terms</h5>
          <p style={paragraphStyle}>
            We reserve the right to modify these terms without prior notice. Any updates will
            be reflected on this page and will take effect immediately upon posting. We encourage
            users to revisit this section regularly to stay informed of any changes.
          </p>
        </section>

        <section className="mb-4">
          <h5 style={sectionHeaderStyle}>8. Governing Law</h5>
          <p style={paragraphStyle}>
            These Terms and Conditions are governed by the laws of the Republic of India. All
            disputes or legal matters shall be subject to the jurisdiction of the appropriate
            courts where HouslyFintech is registered.
          </p>
        </section>

        <section className="mb-4">
          <h5 style={sectionHeaderStyle}>9. Contact Information</h5>
          <p style={paragraphStyle}>
            Your feedback, queries, or legal concerns are important to us. For any assistance,
            feel free to contact our support team at{' '}
            <a href="mailto:support@houslyfintech.com" style={{ color: '#0074d9' }}>
              support@houslyfintech.com
            </a>. We are committed to offering timely and helpful responses.
          </p>
        </section>
      </div>
    </div>
    </Layout>
  );
};

export default TermsAndConditions;
