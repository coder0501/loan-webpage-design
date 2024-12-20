import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works-section">
      <div className="left-icon1">
        <img src="./left-icon1.png" alt="left-icon" />
      </div>
      <div className="how-it-works">
        <div className="how-it-works-container">
          <div className="how-it-works-main">
            <div className="left-section">
              <div>
                <h1>How does it works?</h1>
                <p>Your Guide to Getting a Loan</p>
              </div>
              <hr />
              <div className="description">
                <p>
                  Welcome to Website name, where securing the financial assistance you
                  need is simpler than ever. Whether you're looking to fund a new
                  project, consolidate debt, or cover unexpected expenses, our
                  streamlined process ensures quick and hassle-free access to the funds
                  you require. Here's how it works:
                </p>
              </div>
              <div className="get-started-btn">
                <button >Get Started</button>
              </div>
            </div>
            <div className="right-section">
              <div className="card">
                <div className="card-icon">
                  <img src="./form-icon.png" alt="" />
                </div>
                <div className="card-heading">
                  <h3>Fill out the online form</h3>
                </div>
                <div className="card-description">
                  <p>
                    Complete an online form on any device. We provide a quick, easy, and
                    confidential form.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-icon">
                  <img src="./get-money-icon.png" alt="" />
                </div>
                <div className="card-heading">
                  <h3>Get the money instantly</h3>
                </div>
                <p>
                  After getting approved, you may receive money deposited into your
                  bank account.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <img src="./approved-icon.png" alt="" />
                </div>
                <div className="card-heading">
                  <h3>Get it approved</h3>
                </div>
                <p>
                  The lenders in our network will review and may approve your loan
                  request.
                </p>
              </div>
              <div className="card">
                <div className="card-icon">
                  <img src="./payback-loan-icon.png" alt="" />
                </div>
                <div className="card-heading">
                  <h3>Payback the loan</h3>
                </div>
                <p>
                  You will need to pay back the amount within given days as mentioned
                  by the lender.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
