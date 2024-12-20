import React, { useState } from "react";

const HeroSection: React.FC = () => {
    const [loanAmount, setLoanAmount] = useState<number>(10000); // Initial loan amount

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoanAmount(Number(event.target.value));
        updateSliderProgress(Number(event.target.value));
    };

    const updateSliderProgress = (value: number) => {
        const progress = ((value - 100) / (35000 - 100)) * 100;
        document.documentElement.style.setProperty("--slider-progress", `${progress}%`);
    };

    // Ensure the slider progress is updated on initial load
    React.useEffect(() => {
        updateSliderProgress(loanAmount);
    }, [loanAmount]);

    return (
        <section>
            <div className="home-hero">
                <div className="home-hero-container">
                    <div className="home-hero-main">
                        <div className="home-hero-left-container">
                            <div className="home-hero-img-text">
                                <div className="dollar-icon" id="dollar-icon1">
                                    <span>
                                        <img src="./dollar-icon.png" alt="" />
                                    </span>
                                </div>
                                <div className="dollar-icon" id="dollar-icon2">
                                    <span>
                                        <img src="./light-dollar-icon.png" alt="" />
                                    </span>
                                </div>
                                <div className="home-hero-left-text">
                                    <h4>Unlock Your</h4>
                                </div>
                                <div className="home-hero-potential-img">
                                    <span className="home-hero-img">
                                        <img src="./home-banner-img.png" alt="" />
                                    </span>
                                    <span className="home-hero-bg-img">
                                        <img src="./home-banner-bg-img.png" alt="" />
                                    </span>
                                    <div className="explore-loans">
                                        <p>
                                            Explore a World of Loans Tailored <span className="jst-4u">Just for You</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="home-hero-right-text">
                                    <h4>
                                        Financial <span className="potential">Potential</span>
                                    </h4>
                                </div>
                                <div className="dollar-icon" id="dollar-icon3">
                                    <span>
                                        <img src="./light-dollar-icon.png" alt="" />
                                    </span>
                                </div>
                                <div className="dollar-icon" id="dollar-icon4">
                                    <span>
                                        <img src="./dollar-icon.png" alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="home-hero-form-btn">
                            <div className="loan-form">
                                <div className="input-row">
                                    <input type="text" placeholder="First Name" className="input-field" />
                                    <input type="text" placeholder="Last Name" className="input-field" />
                                </div>
                                <div className="input-row">
                                    <input type="email" placeholder="Email" className="input-field" />
                                </div>
                                <div className="slider-section">
                                    <div className="slider-label">
                                        <span>Loan Amount ($100-$35000)*</span>
                                        <span className="loan-amount">${loanAmount}</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="100"
                                        max="35000"
                                        step="10"
                                        value={loanAmount}
                                        onChange={handleSliderChange}
                                        className="slider"
                                    />
                                </div>
                                <div className="checkbox-section">
                                    <div className="facilities-checkbox">
                                        <label className="custom-checkbox" htmlFor="check">
                                            <input type="checkbox" name="check" id="check" />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <label htmlFor="terms">
                                        you agree to our Privacy Policy & Terms, E-consent
                                    </label>
                                </div>
                                <div className="get-strt-btn">
                                    <button className="get-started-button">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
