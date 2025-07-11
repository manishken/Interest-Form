import React, { useState } from 'react';
import './Interest-form.css';

const InterestForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    costGuess: '',
    spidrPin: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'spidrPin') {
      const formattedValue = value
        .replace(/\D/g, '') 
        .replace(/(\d{4})(?=\d)/g, '$1-')
        .slice(0, 19);
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.costGuess.trim()) {
      newErrors.costGuess = 'Cost guess is required';
    } else if (!/^\d+(\.\d{1,2})?$/.test(formData.costGuess)) {
      newErrors.costGuess = 'Please enter a valid dollar amount';
    }

    if (!formData.spidrPin.trim()) {
      newErrors.spidrPin = 'Spidr PIN is required';
    } else if (formData.spidrPin.replace(/\D/g, '').length !== 16) {
      newErrors.spidrPin = 'PIN must be exactly 16 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form Data:', formData);
    
    setFormData({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    costGuess: '',
    spidrPin: ''
    });
}
  };

//   const reset = () => {
//     console.log('reset')
    
//   }

  return (
    <div className="interest-form-container">
      <div className="interest-form-card">
        <div className="text-center">
          <h2 className="interest-form-title">
            <span>Get Your Air Fryer</span>
          </h2>
        </div>
        
        <form onSubmit={handleSubmit}>
          
          <div className="interest-form-name-grid">
            <div className="interest-form-field">
              <label htmlFor="firstName" className="interest-form-label">
                First Name *
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                value={formData.firstName}
                onChange={handleInputChange}
                className={`interest-form-input ${errors.firstName ? 'error' : ''}`}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="interest-form-error">{errors.firstName}</p>
              )}
            </div>

            <div className="interest-form-field">
              <label htmlFor="lastName" className="interest-form-label">
                Last Name *
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                value={formData.lastName}
                onChange={handleInputChange}
                className={`interest-form-input ${errors.lastName ? 'error' : ''}`}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="interest-form-error">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="interest-form-field">
            <label htmlFor="phoneNumber" className="interest-form-label">
              Phone Number *
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              required
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={`interest-form-input ${errors.phoneNumber ? 'error' : ''}`}
              placeholder="Enter your phone number"
            />
            {errors.phoneNumber && (
              <p className="interest-form-error">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="interest-form-field">
            <label htmlFor="email" className="interest-form-label">
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className={`interest-form-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <p className="interest-form-error">{errors.email}</p>
            )}
          </div>

          <div className="interest-form-field">
            <label htmlFor="costGuess" className="interest-form-label">
              Guess the Air Fryer's Cost *
            </label>
            <div className="interest-form-cost-input">
              <input
                id="costGuess"
                name="costGuess"
                type="text"
                required
                value={formData.costGuess}
                onChange={handleInputChange}
                className={`interest-form-input ${errors.costGuess ? 'error' : ''}`}
                placeholder="0.00"
              />
            </div>
            {errors.costGuess && (
              <p className="interest-form-error">{errors.costGuess}</p>
            )}
          </div>

          {/* Spidr PIN */}
          <div className="interest-form-field">
            <label htmlFor="spidrPin" className="interest-form-label">
              Secret Pin *
            </label>
            <input
              id="spidrPin"
              name="spidrPin"
              type="text"
              required
              value={formData.spidrPin}
              onChange={handleInputChange}
              maxLength={19}
              className={`interest-form-input ${errors.spidrPin ? 'error' : ''}`}
              placeholder="####-####-####-####"
              style={{ letterSpacing: '0.1em' }}
            />
            {errors.spidrPin && (
              <p className="interest-form-error">{errors.spidrPin}</p>
            )}
          </div>



        <div className="interest-form-button-container">
            <button
                type="submit"
                className="interest-form-button"
            >
                Submit
            </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default InterestForm;
