import { useState, useEffect } from 'react';
import AssignmentForm from './components/AssignmentForm';
import AssignmentList from './components/AssignmentList';
import { getAssignments, saveAssignments } from './utils/localStorageUtils';
import { Assignment } from './interfaces/Assignment';
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";

const App = () => {
  const [assignments, setAssignments] = useState<Assignment[]>(getAssignments());
  const [currentAssignment, setCurrentAssignment] = useState<Assignment | undefined>(undefined);

  useEffect(() => {
    saveAssignments(assignments);
  }, [assignments]);

  const addOrUpdateAssignment = (assignment: Assignment) => {
    if (currentAssignment) {
      setAssignments((prev) =>
        prev.map((item) => (item.id === assignment.id ? assignment : item))
      );
    } else {
      setAssignments((prev) => [...prev, assignment]);
    }
    setCurrentAssignment(undefined);
  };

  const deleteAssignment = (id: string) => {
    setAssignments((prev) => prev.filter((assignment) => assignment.id !== id));
  };

  const toggleCompleteAssignment = (id: string) => {
    setAssignments((prev) =>
      prev.map((assignment) =>
        assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
      )
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-neutral-100">
      <h1 className="text-xl uppercase font-bold mb-4 text-gray-800">Student Assignment Tracker</h1>
      <AssignmentForm onSubmit={addOrUpdateAssignment} existingAssignment={currentAssignment} />
      <AssignmentList
        assignments={assignments}
        onEdit={setCurrentAssignment}
        onDelete={deleteAssignment}
        onToggleComplete={toggleCompleteAssignment}
      />
      <footer className='w-full text-center py-2 my-4'>
        <p className='text-md font-medium text-gray-700'>© {new Date().getFullYear()} ZernCodes. All Rights Reserved.</p>
        <p className='text-md font-medium text-gray-600 py-2'>Follow Me On!</p>
        <div className='w-full flex justify-center gap-4 text-3xl text-gray-800'>
          <a href="https://github.com/renzpajarito" target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>
          <a href="https://facebook.com/renz.codes" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;