import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '@/components/Layout';

const Disclaimer = () => {
  return (
    <Layout>
    <div
      className="container py-5 px-3"
      style={{
        fontFamily: "'Glacial Indifference', sans-serif",
        color: "#333",
      }}
    >
      <div className="text-center mb-4">
        <h2 className="fw-bold" style={{ color: "#0074d9" }}>Disclaimer</h2>
        <hr
          style={{
            width: "60px",
            borderTop: "3px solid #0074d9",
            margin: "0 auto",
          }}
        />
      </div>

      <div
        className="bg-light shadow-sm rounded p-4"
        style={{
          borderLeft: "5px solid #ffd700",
          backgroundColor: "#fdfdfd",
          fontFamily: "'Glacial Indifference', sans-serif",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.7",
            textAlign: "justify",
          }}
        >
          The information, software, products, and services included on or available through the HouslyFintech website may contain inaccuracies or typographical errors. Periodic changes are made to the website and its content. HouslyFintech and/or its partners reserve the right to make improvements and/or changes at any time without prior notice. Any advice received via this website should not be relied upon for personal, medical, legal, or financial decisions. Users are strongly advised to consult an appropriate professional for specific advice suited to their individual circumstances.
          <br /><br />
          HouslyFintech and its affiliates make no representations about the suitability, reliability, availability, timeliness, or accuracy of the information, software, products, services, and related graphics found on this website. All such materials are provided “as is” without warranty of any kind. HouslyFintech hereby disclaims all warranties and conditions, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.
          <br /><br />
          This website may contain links to third-party websites which are provided solely for user convenience. HouslyFintech does not endorse or take responsibility for the content, accuracy, or policies of any linked websites. The inclusion of any link does not imply endorsement by HouslyFintech, and use of any linked website is at the user’s own risk.
          <br /><br />
          You specifically agree that HouslyFintech shall not be liable for any unauthorized access to or alteration of your transmissions or data, or any material or data sent or received, or not sent or received. HouslyFintech is also not responsible for any offensive, illegal, or defamatory content transmitted by third parties.
          <br /><br />
          In no event shall HouslyFintech or its affiliates be liable for any direct, indirect, incidental, special, or consequential damages, including but not limited to loss of data, profits, or business opportunities arising out of or in connection with the use or performance of this website, whether based on contract, tort, negligence, or otherwise.
          <br /><br />
          HouslyFintech does not endorse any advertiser content shown on its platform. Users should independently verify all information before making any decisions. HouslyFintech is not responsible for any losses arising from reliance on content, including advertisements.
          <br /><br />
          This agreement shall be governed by the laws of the Republic of India, and you agree to submit to the exclusive jurisdiction of courts in Mumbai, Maharashtra, India, for any disputes arising from or related to the use of this website. You agree to indemnify and hold HouslyFintech, its employees, partners, and affiliates harmless from any claims arising from your use of the site.
          <br /><br />
          HouslyFintech reserves the right to disclose any information if legally required or necessary to protect its rights or comply with legal obligations. If any part of this disclaimer is held invalid or unenforceable, the remaining provisions will continue in full force and effect. This disclaimer constitutes the entire agreement between the user and HouslyFintech and supersedes any prior agreements or communications.
          <br /><br />
          HouslyFintech is not liable for any actions, errors, or omissions of its partners, employees, or associates. Users are encouraged to exercise discretion and judgment before relying on any information or service offered on the website.
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default Disclaimer;