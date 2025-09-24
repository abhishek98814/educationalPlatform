import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const VideoForm = ({ onSuccess }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get("/api/courses").then((res) => setCourses(res.data));
  }, []);

  const initialValues = {
    title: "",
    description: "",
    url: "",
    duration: "",
    courseId: "",
    subscriptionLevelRequired: 1,
    order: 1,
    isFreePreview: false,
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    url: Yup.string().url("Must be a valid URL").required("URL is required"),
    duration: Yup.number().required("Duration is required").positive("Must be positive"),
    courseId: Yup.string().required("Course is required"),
    subscriptionLevelRequired: Yup.number().min(1).required(),
    order: Yup.number().min(1).required(),
    isFreePreview: Yup.boolean(),
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    axios
      .post("/api/videos", values)
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
      <h2 className="text-xl font-bold mb-4">Add Video</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Title */}
            <div>
              <label className="block font-medium">Title</label>
              <Field type="text" name="title" className="w-full border p-2 rounded" />
              <ErrorMessage name="title" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium">Description</label>
              <Field as="textarea" name="description" className="w-full border p-2 rounded" />
              <ErrorMessage name="description" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* URL */}
            <div>
              <label className="block font-medium">Video URL</label>
              <Field type="text" name="url" className="w-full border p-2 rounded" />
              <ErrorMessage name="url" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Duration */}
            <div>
              <label className="block font-medium">Duration (minutes)</label>
              <Field type="number" name="duration" className="w-full border p-2 rounded" />
              <ErrorMessage name="duration" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Course */}
            <div>
              <label className="block font-medium">Course</label>
              <Field as="select" name="courseId" className="w-full border p-2 rounded">
                <option value="">Select a course</option>
                {/* {courses.map((course) => (
                  <option key={course._id} value={course._id}>{course.title}</option>
                ))} */}
              </Field>
              <ErrorMessage name="courseId" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Subscription Level */}
            <div>
              <label className="block font-medium">Subscription Level Required</label>
              <Field type="number" name="subscriptionLevelRequired" className="w-full border p-2 rounded" min={1}/>
              <ErrorMessage name="subscriptionLevelRequired" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Order */}
            <div>
              <label className="block font-medium">Order</label>
              <Field type="number" name="order" className="w-full border p-2 rounded" min={1}/>
              <ErrorMessage name="order" component="div" className="text-red-500 text-sm"/>
            </div>

            {/* Free Preview */}
            <div className="flex items-center space-x-2">
              <Field type="checkbox" name="isFreePreview" />
              <label>Is Free Preview</label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Add Video
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default VideoForm;
