import { Assignment } from '../interfaces/Assignment';

interface AssignmentCardProps {
  assignment: Assignment;
  onEdit: (assignment: Assignment) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg space-y-2">
      <div className="flex justify-between items-center">
        <h3 className={`text-xl text-gray-800 font-medium ${assignment.completed ? 'line-through text-green-400' : ''}`}>{assignment.title}</h3>
        <button
          className={`px-2 py-1 text-md font-medium text-gray-700 rounded ${assignment.completed ? 'bg-green-400 text-gray-50' : 'bg-gray-300'}`}
          onClick={() => onToggleComplete(assignment.id)}
        >
          {assignment.completed ? 'Completed' : 'Incomplete'}
        </button>
      </div>
      <p className='text-md text-gray-700 font-medium border border-gray-300 rounded-md px-2 py-3'>{assignment.description}</p>
      <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
      <div className="flex justify-between">
        <button className="text-blue-500 text-md font-medium opacity-90" onClick={() => onEdit(assignment)}>
          Edit
        </button>
        <button className="text-red-500 text-md font-medium opacity-90" onClick={() => onDelete(assignment.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default AssignmentCard;