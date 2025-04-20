import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Clock, Users, Check, Info } from 'lucide-react';
import { getMockRestaurantById } from '../services/restaurantService';
import type { Restaurant } from '../types';

const ReservationDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [isConfirming, setIsConfirming] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const restaurantData = await getMockRestaurantById(id);
        setRestaurant(restaurantData);
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const handleConfirmReservation = async () => {
    setIsConfirming(true);
    try {
      // Simulate a successful reservation
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowSuccess(true);
      
      // Navigate to success page after showing success animation
      setTimeout(() => {
        navigate('/dashboard', { 
          state: { 
            reservationSuccess: true,
            restaurantName: restaurant?.name
          }
        });
      }, 2000);
    } catch (error) {
      console.error('Failed to confirm reservation:', error);
      setIsConfirming(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 transform transition-all animate-bounce-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Reservation Confirmed!</h3>
              <p className="text-gray-600">Your table has been reserved successfully.</p>
            </div>
          </div>
        </div>
      )}

      {/* Back Navigation */}
      <div className="absolute top-4 left-4 z-30">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm hover:bg-white transition-all duration-300 hover:shadow-md"
        >
          <ArrowLeft size={20} className="text-gray-700" />
          <span className="text-gray-700 font-medium">Back</span>
        </button>
      </div>

      <div className="max-w-3xl mx-auto pt-20 px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">Confirm Your Reservation</h1>
            <p className="text-emerald-100">Please review your reservation details before confirming.</p>
          </div>

          {/* Restaurant Info */}
          <div className="p-8">
            <div className="flex items-start gap-6 mb-8 p-4 bg-gray-50 rounded-xl">
              <img 
                src={restaurant?.image} 
                alt={restaurant?.name}
                className="w-24 h-24 rounded-xl object-cover shadow-md"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{restaurant?.name}</h2>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={16} className="text-emerald-500" />
                  <span>{restaurant?.location.city}, {restaurant?.location.state}</span>
                </div>
              </div>
            </div>

            {/* Reservation Details */}
            <div className="border-t border-b border-gray-200 py-8 mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-500" />
                Reservation Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{searchParams.get('date')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">{searchParams.get('time')}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-sm text-gray-500">Number of Guests</p>
                    <p className="font-medium">{searchParams.get('guests')} {Number(searchParams.get('guests')) === 1 ? 'Guest' : 'Guests'}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <div>
                    <p className="text-sm text-gray-500">Table</p>
                    <p className="font-medium">Table {searchParams.get('table')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guest Details */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-500" />
                Guest Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="font-medium">{searchParams.get('fullName')}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{searchParams.get('email')}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="font-medium">{searchParams.get('phoneNumber')}</p>
                </div>
                {searchParams.get('occasion') && (
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Occasion</p>
                    <p className="font-medium capitalize">{searchParams.get('occasion')}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Special Requests */}
            {searchParams.get('specialRequest') && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5 text-emerald-500" />
                  Special Requests
                </h3>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-gray-600">{searchParams.get('specialRequest')}</p>
                </div>
              </div>
            )}

            {/* Confirmation Button */}
            <div className="flex justify-end">
              <button
                onClick={handleConfirmReservation}
                disabled={isConfirming}
                className={`px-8 py-3 rounded-xl transition-all duration-300 transform ${
                  isConfirming 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-emerald-500 text-white hover:bg-emerald-600 hover:scale-105 hover:shadow-lg'
                }`}
              >
                {isConfirming ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Confirming...</span>
                  </div>
                ) : (
                  'Confirm Reservation'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationDetailsPage; 