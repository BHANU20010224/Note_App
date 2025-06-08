import React from 'react';

const AddEditNotes = () => {
  return (
    <div>
      {/* Title Input */}
      <div className="flex flex-col gap-2">
        <label className="input-label">TITLE</label>
        <input
          type="text"
          className="text-2xl text-slate-950 outline-none"
          placeholder="Go To Gym At 5"
        />
      </div>

      {/* Content Input */}
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="Content"
          rows={10}
        />
      </div>

      {/* Tags Input */}
      <div className="mt-4 flex flex-col gap-2">
        <label className="input-label">TAGS</label>
        <input
          type="text"
          className="text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded"
          placeholder="e.g. work, personal"
        />
      </div>

      {/* Submit Button */}
      <button
        className="btn-primary font-medium mt-5 p-3 rounded-4xl bg-blue-500 text-white hover:bg-blue-600 transition-all"
        onClick={() => {}}
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
