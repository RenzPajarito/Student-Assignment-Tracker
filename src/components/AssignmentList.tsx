import AssignmentCard from './AssignmentCard';
import { Assignment } from '../interfaces/Assignment';

interface AssignmentListProps {
  assignments: Assignment[];
  onEdit: (assignment: Assignment) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const AssignmentList: React.FC<AssignmentListProps> = ({ assignments, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className='mt-4'>
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default AssignmentList;