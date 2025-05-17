import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ShieldCheck,
  UserCheck,
  Lock,
  AlertTriangle,
  Globe2,
  Database,
  FolderOpen,
} from "lucide-react";
import Layout from '@/components/Layout';

const PrivacyPolicy = () => {
  const containerStyle = {
    width: "100%",
    maxWidth: "1320px",
    margin: "0 auto",
    padding: "30px 25px",
    backgroundColor: "#fff",
    borderRadius: "16px",
    boxShadow: "0 6px 24px rgba(0, 0, 0, 0.08)",
    fontFamily: "'Glacial Indifference', sans-serif",
  };

  const headerStyle = {
    fontSize: "34px",
    fontWeight: "700",
    textAlign: "center",
    borderBottom: "2px solid #eee",
    paddingBottom: "12px",
    marginBottom: "25px",
  };

  const sectionHeaderStyle = {
    fontSize: "19px",
    fontWeight: "600",
    marginTop: "22px",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    color: "#0074d9",
    gap: "8px",
  };

  const paragraphStyle = {
    fontSize: "15.5px",
    lineHeight: "1.7",
    color: "#333",
    marginBottom: "12px",
  };

  return (
    <Layout>
    <div
      style={{
        backgroundColor: "#f0f2f5",
        padding: "40px 15px",
        fontFamily: "'Glacial Indifference', sans-serif",
      }}
    >
      <div style={containerStyle}>
        <h1 style={headerStyle}>
          <span style={{ color: "#000" }}>Privacy</span>{" "}
          <span style={{ color: "#0074d9" }}>Policy</span>
        </h1>

        <h2 style={sectionHeaderStyle}>
          <Globe2 size={18} /> General
        </h2>
        <p style={paragraphStyle}>
          This Privacy Policy outlines how we collect, use, disclose, and protect your personal information. By accessing or using our services, you agree to the
          terms of this policy. We reserve the right to revise it periodically, with immediate effect upon posting updates.
        </p>

        <h2 style={sectionHeaderStyle}>
          <UserCheck size={18} /> Collection of Personal and Other Information
        </h2>
        <p style={paragraphStyle}>
          We collect a variety of personal data including name, email, phone number, PAN, Aadhaar, employment details, income, and credit score. Technical information
          such as device type, IP address, and browser data is also captured.
        </p>
        <p style={paragraphStyle}>
          Voluntary interactions such as surveys, feedback forms, or uploads are stored for improving personalization and service quality. Some sections may require
          user registration, while others can be accessed anonymously.
        </p>

        <h2 style={sectionHeaderStyle}>
          <Database size={18} /> Cookies
        </h2>
        <p style={paragraphStyle}>
          Cookies are small data files that enhance your experience by saving login states and preferences. For instance, selecting “Remember Me” saves your session for
          future access. You can manage or disable cookies in your browser, but it may affect website functionality.
        </p>

        <h2 style={sectionHeaderStyle}>
          <FolderOpen size={18} /> Sharing of Information
        </h2>
        <p style={paragraphStyle}>
          We may share data with financial institutions, credit bureaus, or partners to fulfill service requests. Sharing is governed by contracts ensuring data protection.
          We may also share info in response to legal or regulatory requirements.
        </p>
        <p style={paragraphStyle}>
          During corporate transitions like mergers or acquisitions, user data may be transferred as a business asset while preserving privacy rights.
        </p>

        <h2 style={sectionHeaderStyle}>
          <ShieldCheck size={18} /> Security
        </h2>
        <p style={paragraphStyle}>
          We implement strong security measures including SSL encryption and secure servers. Payment details are handled through PCI-DSS compliant gateways. While we ensure
          top-level protection, 100% security over the internet can't be guaranteed.
        </p>
        <p style={paragraphStyle}>
          We recommend safe practices like avoiding sharing OTPs or confidential info on unverified platforms.
        </p>

        <h2 style={sectionHeaderStyle}>
          <Lock size={18} /> Third-Party Ads / Promotions
        </h2>
        <p style={paragraphStyle}>
          Our platform may contain advertisements from third-party partners. They may collect user behavior data independently and follow separate privacy practices. We
          encourage users to read their policies before interacting.
        </p>

        <h2 style={sectionHeaderStyle}>
          <UserCheck size={18} /> User Consent
        </h2>
        <p style={paragraphStyle}>
          By using our services, uploading data, or filling out forms, you give us consent to collect and use your information as per this policy. If you disagree, we advise
          you to stop using our services immediately.
        </p>

        <h2 style={sectionHeaderStyle}>
          <AlertTriangle size={18} /> Grievance Officer
        </h2>
        <p style={paragraphStyle}>
       If you have any concerns regarding your data, please reach out to our support team. We aim to respond and resolve your issues promptly.
        </p>

        <h2 style={sectionHeaderStyle}>
          <Lock size={18} /> Dispute Resolution & Jurisdiction
        </h2>
        <p style={paragraphStyle}>
          In case of disputes, efforts will be made to resolve issues via mediation. Failing that, arbitration will be held in Delhi, India. This Privacy Policy is governed
          by Indian law, and legal proceedings shall fall under Delhi jurisdiction.
        </p>
      </div>
    </div>
    </Layout>
  );
};

export default PrivacyPolicy;
