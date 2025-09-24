import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SubscriptionForm = ({ onSuccess }) => {
  const initialValues = {
    name: "",
    price: "",
    durationInDays: "",
    features: [""],
    level: "basic",
    isActive: true,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    price: Yup.number().required("Price is required").positive("Price must be positive"),
    durationInDays: Yup.number().required("Duration is required").positive("Must be positive"),
    features: Yup.array().of(Yup.string().required("Feature cannot be empty")),
    level: Yup.string().oneOf(["basic", "premium", "pro"]).required("Level is required"),
    isActive: Yup.boolean(),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post("/api/subscriptions", values)
      .then((res) => {
        setSubmitting(false);
        resetForm();
        onSuccess && onSuccess(res.data);
      })
      .catch((err) => {
        console.error(err);
        setSubmitting(false);
      });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Add Subscription</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, isSubmitting }) => (
          <Form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-medium">Name</label>
              <Field type="text" name="name" className="w-full border p-2 rounded" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Price */}
            <div>
              <label className="block font-medium">Price</label>
              <Field type="number" name="price" className="w-full border p-2 rounded" />
              <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Duration */}
            <div>
              <label className="block font-medium">Duration (days)</label>
              <Field type="number" name="durationInDays" className="w-full border p-2 rounded" />
              <ErrorMessage name="durationInDays" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Features */}
            <div>
              <label className="block font-medium">Features</label>
              <FieldArray name="features">
                {({ push, remove }) => (
                  <div>
                    {values.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 mb-2">
                        <Field
                          type="text"
                          name={`features[${index}]`}
                          className="w-full border p-2 rounded"
                        />
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="bg-red-500 text-white p-1 rounded"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => push("")}
                      className="bg-green-500 text-white p-2 rounded"
                    >
                      Add Feature
                    </button>
                  </div>
                )}
              </FieldArray>
              <ErrorMessage name="features" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Level */}
            <div>
              <label className="block font-medium">Level</label>
              <Field as="select" name="level" className="w-full border p-2 rounded">
                <option value="basic">Basic</option>
                <option value="premium">Premium</option>
                <option value="pro">Pro</option>
              </Field>
              <ErrorMessage name="level" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Active */}
            <div className="flex items-center space-x-2">
              <Field type="checkbox" name="isActive" />
              <label>Is Active</label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Add Subscription
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubscriptionForm;
