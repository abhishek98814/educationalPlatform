import { useEffect, useState } from "react";
import axios from "axios";

export default function MySubscriptionsPage() {
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No token");

        const res = await axios.get("http://localhost:8080/api/my-subscription", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.data?.subscription) {
          setSubscription(res.data.subscription);
        } else {
          // fallback if API response is empty
          setSubscription({
            planName: "Basic Plan",
            status: "Active",
            startDate: "2025-09-01",
            endDate: "2026-09-01",
            price: 49,
          });
        }
      } catch (err) {
        console.error("Error fetching subscription:", err);

        // fallback to dummy data if API fails
        setSubscription({
          planName: "Pro Plan",
          status: "Trial",
          startDate: "2025-09-15",
          endDate: "2025-10-15",
          price: 0,
        });
      }
    };

    fetchSubscription();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Subscription</h1>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </header>

        {/* Subscription Info */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          {subscription ? (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Current Plan: {subscription.planName}
              </h2>
              <p className="text-gray-600">Status: {subscription.status}</p>
              <p className="text-gray-600">
                Start Date: {new Date(subscription.startDate).toDateString()}
              </p>
              <p className="text-gray-600">
                End Date: {new Date(subscription.endDate).toDateString()}
              </p>
              <p className="text-gray-600">Price: ${subscription.price}</p>
            </>
          ) : (
            <p className="text-gray-500">No active subscription found.</p>
          )}
        </div>
      </main>
    </div>
  );
}


// Wanna mention some advance course some normal course some medium
// course some AI course some mathmatcl course
// on which i wanna give some info on free so after login they can see that
// some form off course in
// some course as demo but user shouldnt have to feel they feel like 
//  i am providing so i can go through business idea too 
//  I am coder and wanna create some platform where i can BUILD LIKE THIS
// I wanna build like if that guys not accept then i will make the projet myselg