import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ userId, onSuccess }) => {
  const [courses, setCourses] = useState([]);
  const [initialValues, setInitialValues] = useState({
    userName: "",
    userEmail: "",
    userRole: "student",
    userSubscriptionType: "free",
    userPassword: "",
    userCourses: [],
    isActive: true,
    lastLogin: "",
  });

  // Fetch available courses
  useEffect(() => {
    axios.get("/api/courses").then((res) => setCourses(res.data));

    // If editing existing user
    if (userId) {
      axios.get(`/api/users/${userId}`).then((res) => {
        const {
          userName,
          userEmail,
          userRole,
          userSubscriptionType,
          userCourses,
          isActive,
          lastLogin,
        } = res.data;

        setInitialValues({
          userName,
          userEmail,
          userRole,
          userSubscriptionType,
          userPassword: "",
          userCourses: userCourses.map(c => c._id),
          isActive,
          lastLogin: lastLogin ? new Date(lastLogin).toISOString().split("T")[0] : "",
        });
      });
    }
  }, [userId]);

  const validationSchema = Yup.object({
    userName: Yup.string().required("Name is required"),
    userEmail: Yup.string().email("Invalid email").required("Email is required"),
    userRole: Yup.string().oneOf(["admin", "instructor", "student"]).required(),
    userSubscriptionType: Yup.string().oneOf(["free", "premium", "pro"]).required(),
    userPassword: userId
      ? Yup.string() // password optional for edit
      : Yup.string().required("Password is required"),
    userCourses: Yup.array().of(Yup.string()),
    isActive: Yup.boolean(),
    lastLogin: Yup.date().nullable(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    const apiCall = userId
      ? axios.put(`/api/users/${userId}`, values)
      : axios.post("/api/users", values);

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
      <h2 className="text-xl font-bold mb-4">{userId ? "Edit" : "Add"} User</h2>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block font-medium">Name</label>
              <Field type="text" name="userName" className="w-full border p-2 rounded" />
              <ErrorMessage name="userName" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium">Email</label>
              <Field type="email" name="userEmail" className="w-full border p-2 rounded" />
              <ErrorMessage name="userEmail" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Role */}
            <div>
              <label className="block font-medium">Role</label>
              <Field as="select" name="userRole" className="w-full border p-2 rounded">
                <option value="admin">Admin</option>
                <option value="instructor">Instructor</option>
                <option value="student">Student</option>
              </Field>
              <ErrorMessage name="userRole" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Subscription Type */}
            <div>
              <label className="block font-medium">Subscription Type</label>
              <Field as="select" name="userSubscriptionType" className="w-full border p-2 rounded">
                <option value="free">Free</option>
                <option value="premium">Premium</option>
                <option value="pro">Pro</option>
              </Field>
              <ErrorMessage name="userSubscriptionType" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Password */}
            <div>
              <label className="block font-medium">Password</label>
              <Field type="password" name="userPassword" className="w-full border p-2 rounded" />
              <ErrorMessage name="userPassword" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Courses */}
            <div>
              <label className="block font-medium">Courses</label>
              <Field as="select" name="userCourses" multiple className="w-full border p-2 rounded">
                {/* {courses.map((c) => (
                  <option key={c._id} value={c._id}>{c.title}</option>
                ))} */}
              </Field>
              <ErrorMessage name="userCourses" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Active */}
            <div className="flex items-center space-x-2">
              <Field type="checkbox" name="isActive" className="form-checkbox" />
              <label>Is Active</label>
            </div>

            {/* Last Login */}
            <div>
              <label className="block font-medium">Last Login</label>
              <Field type="date" name="lastLogin" className="w-full border p-2 rounded" />
              <ErrorMessage name="lastLogin" component="div" className="text-red-500 text-sm"/>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              {userId ? "Update" : "Create"} User
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
