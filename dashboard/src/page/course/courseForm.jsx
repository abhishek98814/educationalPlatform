import React, { useState } from "react";
import axios from "axios";

const CourseForm = ({ initialData, onSuccess, onClose }) => {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    category: initialData?.category || "",
    instructor: initialData?.instructor || "",
    price: initialData?.price || 0,
    isPublished: initialData?.isPublished || false,
    lessons:
      initialData?.lessons?.length > 0
        ? initialData.lessons
        : [{ title: "", videoUrl: "", content: "", duration: "" }],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e, index, field) => {
    const { name, value, type, checked } = e.target;

    if (field === "lessons") {
      const updatedLessons = [...formData.lessons];
      updatedLessons[index][name] = type === "number" ? Number(value) : value;
      setFormData({ ...formData, lessons: updatedLessons });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addLesson = () => {
    setFormData({
      ...formData,
      lessons: [...formData.lessons, { title: "", videoUrl: "", content: "", duration: "" }],
    });
  };

  const removeLesson = (index) => {
    const updatedLessons = [...formData.lessons];
    updatedLessons.splice(index, 1);
    setFormData({ ...formData, lessons: updatedLessons });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = "Title is required";
    if (!formData.description) newErrors.description = "Description is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.instructor) newErrors.instructor = "Instructor ID is required";
    if (formData.price < 0) newErrors.price = "Price must be positive";

    formData.lessons.forEach((lesson, i) => {
      if (!lesson.title) {
        newErrors[`lessonTitle${i}`] = "Lesson title is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      let res;
      if (initialData?._id) {
        // Update course
        res = await axios.put(`http://localhost:8080/api/v1/courses/${initialData._id}`, formData);
      } else {
        // Create course
        res = await axios.post("http://localhost:8080/api/v1/courses", formData);
      }
      console.log("Response:", res.data);
      onSuccess?.(res.data.course);
      onClose?.();
    } catch (err) {
      console.error("Error saving course:", err.response || err);
      alert("Error saving course. Check console for details.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        {initialData ? "Edit Course" : "Create Course"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            name="title"
            className="mt-1 w-full p-2 border rounded-lg"
            value={formData.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            name="description"
            className="mt-1 w-full p-2 border rounded-lg"
            rows="3"
            value={formData.description}
            onChange={handleChange}
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium">Category</label>
          <input
            type="text"
            name="category"
            className="mt-1 w-full p-2 border rounded-lg"
            value={formData.category}
            onChange={handleChange}
          />
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
        </div>

        {/* Instructor */}
        <div>
          <label className="block text-sm font-medium">Instructor ID</label>
          <input
            type="text"
            name="instructor"
            className="mt-1 w-full p-2 border rounded-lg"
            value={formData.instructor}
            onChange={handleChange}
          />
          {errors.instructor && <p className="text-red-500 text-sm">{errors.instructor}</p>}
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            name="price"
            className="mt-1 w-full p-2 border rounded-lg"
            value={formData.price}
            onChange={handleChange}
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
        </div>

        {/* Lessons */}
        <div>
          <label className="block text-sm font-medium mb-2">Lessons</label>
          {formData.lessons.map((lesson, index) => (
            <div key={index} className="p-4 border rounded-lg bg-gray-50 space-y-2">
              <input
                type="text"
                placeholder="Lesson Title"
                name="title"
                className="w-full p-2 border rounded-lg"
                value={lesson.title}
                onChange={(e) => handleChange(e, index, "lessons")}
              />
              {errors[`lessonTitle${index}`] && (
                <p className="text-red-500 text-sm">{errors[`lessonTitle${index}`]}</p>
              )}
              <input
                type="text"
                placeholder="Video URL"
                name="videoUrl"
                className="w-full p-2 border rounded-lg"
                value={lesson.videoUrl}
                onChange={(e) => handleChange(e, index, "lessons")}
              />
              <textarea
                placeholder="Content"
                name="content"
                className="w-full p-2 border rounded-lg"
                rows="2"
                value={lesson.content}
                onChange={(e) => handleChange(e, index, "lessons")}
              />
              <input
                type="number"
                placeholder="Duration (minutes)"
                name="duration"
                className="w-full p-2 border rounded-lg"
                value={lesson.duration}
                onChange={(e) => handleChange(e, index, "lessons")}
              />
              <button
                type="button"
                className="px-3 py-1 bg-red-500 text-white rounded-lg"
                onClick={() => removeLesson(index)}
              >
                Remove Lesson
              </button>
            </div>
          ))}
          <button
            type="button"
            className="px-4 py-2 bg-green-600 text-white rounded-lg mt-2"
            onClick={addLesson}
          >
            + Add Lesson
          </button>
        </div>

        {/* Publish */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isPublished"
            checked={formData.isPublished}
            onChange={handleChange}
          />
          <label className="text-sm font-medium">Publish Course</label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            {initialData ? "Update" : "Create"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
