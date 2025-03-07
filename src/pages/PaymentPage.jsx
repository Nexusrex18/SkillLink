import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CreditCard, Lock, Calendar, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
  // Booking data would be passed from the booking form via location state
  // Fallback to demo data if not provided
  const bookingData = location.state?.booking || {
    professionalName: "John Doe",
    service: "Painter",
    date: "2025-03-15",
    time: "Morning (8AM - 12PM)",
    address: "123 Main St, Anytown",
    details: "Living room and hallway painting",
    rate: "$30/hr",
    estimatedHours: 6,
  };
  
  const calculateSubtotal = () => {
    const hourlyRate = parseInt(bookingData.rate?.replace(/\D/g, '')) || 30;
    return hourlyRate * bookingData.estimatedHours;
  };
  
  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const serviceFee = Math.round(subtotal * 0.05);
    return subtotal + serviceFee;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = {};
    const cardNumber = e.target.cardNumber?.value;
    const expiryDate = e.target.expiryDate?.value;
    const cvv = e.target.cvv?.value;
    const name = e.target.cardholderName?.value;
    
    if (!cardNumber || cardNumber.length < 15) {
      errors.cardNumber = "Valid card number is required";
    }
    
    if (!expiryDate) {
      errors.expiryDate = "Expiry date is required";
    }
    
    if (!cvv || cvv.length < 3) {
      errors.cvv = "CVV is required";
    }
    
    if (!name) {
      errors.name = "Cardholder name is required";
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    // Process payment
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 2000);
  };
  
  const handleBackToBooking = () => {
    // Navigate back to booking form
    navigate(-1);
  };
  
  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="text-center py-8">
          <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Your appointment with {bookingData.professionalName} has been scheduled.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
            <h2 className="font-semibold text-lg mb-4 border-b pb-2">Booking Details</h2>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-gray-500 text-sm">Service</p>
                <p className="font-medium">{bookingData.service}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Professional</p>
                <p className="font-medium">{bookingData.professionalName}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Date & Time</p>
                <p className="font-medium">{new Date(bookingData.date).toLocaleDateString()} - {bookingData.time}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p className="font-medium">{bookingData.address}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-500 text-sm">Service Details</p>
                <p className="font-medium">{bookingData.details}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Total Paid</p>
                <p className="font-medium text-green-600">${calculateTotal()}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Booking ID</p>
                <p className="font-medium">BK-{Math.floor(100000 + Math.random() * 900000)}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services" className="px-6 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Browse More Services
            </Link>
            <Link to="/bookings" className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              View My Bookings
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-2xl mx-auto p-4">
      <button 
        onClick={handleBackToBooking}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-1" /> Back to Booking
      </button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Payment Details</h1>
          <p className="opacity-90">Complete your booking with {bookingData.professionalName}</p>
        </div>
        
        <div className="p-6">
          {/* Booking Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h2 className="font-semibold mb-3">Booking Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Service:</span>
                <span className="font-medium">{bookingData.service}</span>
              </div>
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span className="font-medium">{new Date(bookingData.date).toLocaleDateString()} - {bookingData.time}</span>
              </div>
              <div className="flex justify-between">
                <span>Professional:</span>
                <span className="font-medium">{bookingData.professionalName}</span>
              </div>
              <div className="flex justify-between">
                <span>Rate:</span>
                <span className="font-medium">{bookingData.rate}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Hours:</span>
                <span className="font-medium">{bookingData.estimatedHours}</span>
              </div>
              <div className="border-t my-2 pt-2 flex justify-between">
                <span>Subtotal:</span>
                <span className="font-medium">${calculateSubtotal()}</span>
              </div>
              <div className="flex justify-between">
                <span>Service Fee (5%):</span>
                <span className="font-medium">${Math.round(calculateSubtotal() * 0.05)}</span>
              </div>
              <div className="border-t my-2 pt-2 flex justify-between font-semibold">
                <span>Total:</span>
                <span className="text-green-600">${calculateTotal()}</span>
              </div>
            </div>
          </div>
          
          {/* Payment Method Selection */}
          <div className="mb-6">
            <h2 className="font-semibold mb-3">Payment Method</h2>
            <div className="flex gap-4 mb-4">
              <button
                className={`flex-1 border rounded-md p-3 flex flex-col items-center ${
                  paymentMethod === 'credit' ? 'border-green-500 bg-green-50' : 'border-gray-200'
                }`}
                onClick={() => setPaymentMethod('credit')}
              >
                <CreditCard className={`w-6 h-6 mb-1 ${paymentMethod === 'credit' ? 'text-green-600' : 'text-gray-500'}`} />
                <span className={paymentMethod === 'credit' ? 'text-green-600' : 'text-gray-700'}>Credit Card</span>
              </button>
              <button
                className={`flex-1 border rounded-md p-3 flex flex-col items-center ${
                  paymentMethod === 'paypal' ? 'border-green-500 bg-green-50' : 'border-gray-200'
                }`}
                onClick={() => setPaymentMethod('paypal')}
              >
                <span className={`text-xl mb-1 ${paymentMethod === 'paypal' ? 'text-green-600' : 'text-gray-500'}`}>P</span>
                <span className={paymentMethod === 'paypal' ? 'text-green-600' : 'text-gray-700'}>PayPal</span>
              </button>
            </div>
          </div>
          
          {/* Payment Form */}
          <form onSubmit={handleSubmit}>
            {paymentMethod === 'credit' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Card Number</label>
                  <div className={`border ${formErrors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded-md overflow-hidden flex items-center`}>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      className="flex-1 p-2 focus:outline-none"
                    />
                    <span className="px-3 text-gray-400">
                      <CreditCard className="w-5 h-5" />
                    </span>
                  </div>
                  {formErrors.cardNumber && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.cardNumber}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      className={`w-full p-2 border ${formErrors.expiryDate ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {formErrors.expiryDate && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.expiryDate}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                      className={`w-full p-2 border ${formErrors.cvv ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {formErrors.cvv && (
                      <p className="text-red-500 text-xs mt-1">{formErrors.cvv}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardholderName"
                    placeholder="John Smith"
                    className={`w-full p-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                  )}
                </div>
              </div>
            )}
            
            {paymentMethod === 'paypal' && (
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-gray-700 mb-2">You'll be redirected to PayPal to complete your payment.</p>
                <p className="text-sm text-gray-500">Total amount: ${calculateTotal()}</p>
              </div>
            )}
            
            <div className="flex items-center mt-6 mb-4">
              <Lock className="w-4 h-4 text-gray-500 mr-2" />
              <span className="text-sm text-gray-600">Your payment information is secure and encrypted</span>
            </div>
            
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <span className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full"></span>
                  Processing...
                </>
              ) : (
                `Pay $${calculateTotal()} Now`
              )}
            </button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4 text-center">
            By confirming your booking, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;