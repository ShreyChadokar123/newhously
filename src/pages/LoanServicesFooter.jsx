import React from "react";
import { Link } from "react-router-dom";
import { 
  BsHouseDoorFill, 
  BsBuildingFill, 
  BsArrowLeftRight, 
  BsBriefcaseFill 
} from "react-icons/bs";
import Layout from '@/components/Layout';

const services = [
  {
    title: "Home Loan",
    description: "Affordable home loans with attractive interest rates and flexible repayment options.",
    icon: <BsHouseDoorFill />,
    route: "/HomeLoan",
  },
  {
    title: "Loan Against Property",
    description: "Unlock the value of your property with our hassle-free loan against property services.",
    icon: <BsBuildingFill />,
    route: "/loanagainstproperty",
  },
  {
    title: "Balance Transfer",
    description: "Transfer your existing loan to us for lower EMIs and better terms.",
    icon: <BsArrowLeftRight />,
    route: "/BalanceTranfer",
  },
  {
    title: "Business Loan",
    description: "Fuel your business growth with quick and easy business loans tailored to your needs.",
    icon: <BsBriefcaseFill />,
    route: "/business-loan",
  },
];

const LoanServicesFooter = () => {
  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "16px",
    lineHeight: "1.4",
    fontFamily: "'Glacial Indifference', sans-serif",
  };

  const gradientTextStyle = {
    background: "linear-gradient(to right, #0074d9, #66b3ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "auto",
    padding: "40px 20px",
    fontFamily: "'Glacial Indifference', sans-serif",
  };

  const descriptionStyle = {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "16px",
    color: "#222",
  };

  const cardsContainer = {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
  };

  const cardStyle = {
    backgroundColor: "white",
    width: "260px",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    cursor: "pointer",
    textDecoration: "none",
    color: "#222",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "all 0.3s ease",
  };

  const iconStyle = {
    fontSize: "40px",
    color: "#0074d9",
    marginBottom: "15px",
  };

  const cardTitle = {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "10px",
  };

  const cardDesc = {
    fontSize: "14px",
    textAlign: "center",
  };

  return (
    <Layout>
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        <span style={{ color: "black" }}>Our Loan </span>
        <span style={gradientTextStyle}> Services</span>
      </h2>
      <p style={descriptionStyle}>
        Explore our range of loan products designed to meet your financial needs with the best terms in the market.
      </p>

      <div style={cardsContainer}>
        {services.map(({ title, description, icon, route }, index) => (
          <Link
            to={route}
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 25px rgba(0, 116, 217, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ ...iconStyle }}>{icon}</div>
            <h3 style={cardTitle}>{title}</h3>
            <p style={cardDesc}>{description}</p>
          </Link>
        ))}
      </div>
    </div>
    </Layout>
  );
};

export default LoanServicesFooter;
