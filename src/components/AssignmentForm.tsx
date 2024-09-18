import { useState, useEffect } from 'react';
import { Assignment } from '../interfaces/Assignment';

interface AssignmentFormProps {
  onSubmit: (assignment: Assignment) => void;
  existingAssignment?: Assignment;
}

const AssignmentForm: React.FC<AssignmentFormProps> = ({ onSubmit, existingAssignment }) => {
  const [title, setTitle] = useState(existingAssignment?.title || '');
  const [description, setDescription] = useState(existingAssignment?.description || '');
  const [dueDate, setDueDate] = useState(existingAssignment?.dueDate || '');

  useEffect(() => {
    if (existingAssignment) {
      setTitle(existingAssignment.title);
      setDescription(existingAssignment.description);
      setDueDate(existingAssignment.dueDate);
    }
  }, [existingAssignment]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAssignment: Assignment = {
      id: existingAssignment?.id || new Date().toISOString(),
      title,
      description,
      dueDate,
      completed: existingAssignment?.completed || false,
    };
    onSubmit(newAssignment);
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 shadow-sm rounded-md bg-transparent focus:outline-blue-400 border border-gray-400 font-semibold"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 shadow-sm rounded-md bg-transparent focus:outline-blue-400 border border-gray-400 font-medium"
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="w-full p-2 shadow-sm rounded-md bg-transparent focus:outline-blue-400 border border-gray-400 font-medium"
        required
      />
      <button type="submit" className="w-full bg-sky-400 text-white px-4 py-2 rounded-md uppercase font-medium shadow-md">
        {existingAssignment ? 'Update Assignment' : 'Add Assignment'}
      </button>
    </form>
  );
};

export default AssignmentForm;