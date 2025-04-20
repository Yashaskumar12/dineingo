import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TableSelection: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  // Table layout configuration
  const floors = {
    ground: Array(8).fill(null).map((_, i) => `G${i + 1}`),
    first: Array(8).fill(null).map((_, i) => `F${i + 1}`),
    second: Array(8).fill(null).map((_, i) => `S${i + 1}`),
    third: Array(8).fill(null).map((_, i) => `T${i + 1}`)
  };

  const handleProceed = () => {
    if (!selectedTable) {
      alert('Please select a table to proceed');
      return;
    }
    // Navigate to the reservation details page with all parameters
    const queryParams = new URLSearchParams(searchParams);
    // Ensure all form data is preserved
    const formData = {
      fullName: searchParams.get('fullName'),
      email: searchParams.get('email'),
      phoneNumber: searchParams.get('phoneNumber'),
      occasion: searchParams.get('occasion'),
      specialRequest: searchParams.get('specialRequest'),
      date: searchParams.get('date'),
      time: searchParams.get('time'),
      guests: searchParams.get('guests'),
      table: selectedTable
    };

    // Send email with reservation details
    sendEmail(formData);

    // Navigate to reservation details page
    navigate(`/restaurant/${id}/reservation?${new URLSearchParams(formData).toString()}`);
  };

  const sendEmail = async (data: any) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          type: 'reservation',
          restaurantId: id
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to send email');
      }
      
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Back Navigation */}
      <div className="mb-8">
        <button 
          onClick={() => navigate(`/restaurant/${id}/preview?${searchParams.toString()}`)}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={20} className="text-gray-700" />
          <span className="text-gray-700 font-medium">Back to Preview</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-6">Select Your Table</h2>
          <p className="text-gray-600 mb-8">Choose a table from our available seating options.</p>

          <div className="space-y-8">
            {/* Ground Floor */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Ground Floor</h3>
              <div className="grid grid-cols-4 gap-4">
                {floors.ground.map((table) => (
                  <button
                    key={table}
                    onClick={() => setSelectedTable(table)}
                    className={`p-4 text-center border rounded-xl transition-colors ${
                      selectedTable === table
                        ? 'bg-emerald-500 text-white border-emerald-500'
                        : 'border-gray-200 hover:border-emerald-500 hover:bg-emerald-50'
                    }`}
                  >
                    Table {table}
                  </button>
                ))}
              </div>
            </div>

            {/* First Floor */}
            <div>
              <h3 className="text-lg font-semibold mb-4">First Floor</h3>
              <div className="grid grid-cols-4 gap-4">
                {floors.first.map((table) => (
                  <button
                    key={table}
                    onClick={() => setSelectedTable(table)}
                    className={`p-4 text-center border rounded-xl transition-colors ${
                      selectedTable === table
                        ? 'bg-emerald-500 text-white border-emerald-500'
                        : 'border-gray-200 hover:border-emerald-500 hover:bg-emerald-50'
                    }`}
                  >
                    Table {table}
                  </button>
                ))}
              </div>
            </div>

            {/* Second Floor */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Second Floor</h3>
              <div className="grid grid-cols-4 gap-4">
                {floors.second.map((table) => (
                  <button
                    key={table}
                    onClick={() => setSelectedTable(table)}
                    className={`p-4 text-center border rounded-xl transition-colors ${
                      selectedTable === table
                        ? 'bg-emerald-500 text-white border-emerald-500'
                        : 'border-gray-200 hover:border-emerald-500 hover:bg-emerald-50'
                    }`}
                  >
                    Table {table}
                  </button>
                ))}
              </div>
            </div>

            {/* Third Floor */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Third Floor</h3>
              <div className="grid grid-cols-4 gap-4">
                {floors.third.map((table) => (
                  <button
                    key={table}
                    onClick={() => setSelectedTable(table)}
                    className={`p-4 text-center border rounded-xl transition-colors ${
                      selectedTable === table
                        ? 'bg-emerald-500 text-white border-emerald-500'
                        : 'border-gray-200 hover:border-emerald-500 hover:bg-emerald-50'
                    }`}
                  >
                    Table {table}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              onClick={handleProceed}
              className={`px-6 py-3 rounded-xl transition-colors ${
                selectedTable
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Proceed to Confirmation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSelection; 