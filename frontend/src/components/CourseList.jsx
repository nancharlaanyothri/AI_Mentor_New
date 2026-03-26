const CourseList = ({ courses }) => {
  if (!courses || courses.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No courses found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold">
            {course.title}
          </h2>

          {course.subtitle && (
            <p className="text-sm text-gray-500 mt-1">
              {course.subtitle}
            </p>
          )}

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-3">
            {course.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-200 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-3 text-sm text-gray-600">
            ⭐ {course.rating} • {course.students} students
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;