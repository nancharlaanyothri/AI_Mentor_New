const TagFilter = ({ tags, selectedTag, setSelectedTag }) => {
  return (
    <div className="flex gap-2 mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setSelectedTag(tag)}
          className={`px-3 py-1 rounded-full border ${
            selectedTag === tag
              ? "bg-teal-500 text-white"
              : "bg-gray-100"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;