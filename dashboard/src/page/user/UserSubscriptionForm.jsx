import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserSubscriptionForm = ({ subscriptionId, onSuccess }) => {
  const [users, setUsers] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [initialValues, setInitialValues] = useState({
    user: "",
    subscription: "",
    startDate: "",
    endDate: "",
    status: "active",
    paymentInfo: {
      transactionId: "",
      method: "",
      amount: "",
      currency: "NPR",
    },
  });

  // Fetch users and subscriptions for dropdowns
  useEffect(() => {
    axios.get("/api/users").then((res) => setUsers(res.data));
    axios.get("/api/subscriptions").then((res) => setSubscriptions(res.data));

    if (subscriptionId) {
      axios.get(`/api/userSubscriptions/${subscriptionId}`).then((res) => {
        const { user, subscription, startDate, endDate, status, paymentInfo } = res.data;
        setInitialValues({
          user: user._id,
          subscription: subscription._id,
          startDate: startDate ? new Date(startDate).toISOString().split("T")[0] : "",
          endDate: endDate ? new Date(endDate).toISOString().split("T")[0] : "",
          status,
          paymentInfo: {
            transactionId: paymentInfo?.transactionId || "",
            method: paymentInfo?.method || "",
            amount: paymentInfo?.amount || "",
            currency: paymentInfo?.currency || "NPR",
          },
        });
      });
    }
  }, [subscriptionId]);

  const validationSchema = Yup.object({
    user: Yup.string().required("User is required"),
    subscription: Yup.string().required("Subscription is required"),
    startDate: Yup.date().required("Start date is required"),
    endDate: Yup.date().required("End date is required"),
    status: Yup.string().oneOf(["active", "expired", "cancelled"]).required(),
    paymentInfo: Yup.object({
      transactionId: Yup.string().required("Transaction ID is required"),
      method: Yup.string().required("Payment method is required"),
      amount: Yup.number().required("Amount is required").positive("Amount must be positive"),
      currency: Yup.string().required("Currency is required"),
    }),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const apiCall = subscriptionId
      ? axios.put(`/api/userSubscriptions/${subscriptionId}`, values)
      : axios.post("/api/userSubscriptions", values);

    apiCall
      .then(() => {
        setSubmitting(false);
        onSuccess && onSuccess();
      })
      .catch((err) => {
        console.error(err);
        setSubmitting(false);
      });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">{subscriptionId ? "Edit" : "Add"} Subscription</h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* User */}
            <div>
              <label className="block font-medium">User</label>
              <Field as="select" name="user" className="w-full border p-2 rounded">
                <option value="">Select user</option>
                {/* {users?.map((u) => (
                  <option key={u._id} value={u._id}>{u.name}</option>
                ))} */}
              </Field>
              <ErrorMessage name="user" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Subscription */}
            <div>
              <label className="block font-medium">Subscription</label>
              <Field as="select" name="subscription" className="w-full border p-2 rounded">
                <option value="">Select subscription</option>
                {/* {subscriptions.map((s) => (
                  <option key={s._id} value={s._id}>{s.name}</option>
                ))} */}
              </Field>
              <ErrorMessage name="subscription" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Dates */}
            <div>
              <label className="block font-medium">Start Date</label>
              <Field type="date" name="startDate" className="w-full border p-2 rounded" />
              <ErrorMessage name="startDate" component="div" className="text-red-500 text-sm"/>
            </div>
            <div>
              <label className="block font-medium">End Date</label>
              <Field type="date" name="endDate" className="w-full border p-2 rounded" />
              <ErrorMessage name="endDate" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Status */}
            <div>
              <label className="block font-medium">Status</label>
              <Field as="select" name="status" className="w-full border p-2 rounded">
                <option value="active">Active</option>
                <option value="expired">Expired</option>
                <option value="cancelled">Cancelled</option>
              </Field>
              <ErrorMessage name="status" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Payment Info */}
            <div>
              <label className="block font-medium">Transaction ID</label>
              <Field type="text" name="paymentInfo.transactionId" className="w-full border p-2 rounded" />
              <ErrorMessage name="paymentInfo.transactionId" component="div" className="text-red-500 text-sm"/>
            </div>
            <div>
              <label className="block font-medium">Payment Method</label>
              <Field type="text" name="paymentInfo.method" className="w-full border p-2 rounded" />
              <ErrorMessage name="paymentInfo.method" component="div" className="text-red-500 text-sm"/>
            </div>
            <div>
              <label className="block font-medium">Amount</label>
              <Field type="number" name="paymentInfo.amount" className="w-full border p-2 rounded" />
              <ErrorMessage name="paymentInfo.amount" component="div" className="text-red-500 text-sm"/>
            </div>
            <div>
              <label className="block font-medium">Currency</label>
              <Field type="text" name="paymentInfo.currency" className="w-full border p-2 rounded" />
              <ErrorMessage name="paymentInfo.currency" component="div" className="text-red-500 text-sm"/>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              {subscriptionId ? "Update" : "Create"} Subscription
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserSubscriptionForm;
