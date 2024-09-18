import { Assignment } from '../interfaces/Assignment';

export const getAssignments = (): Assignment[] => {
  const data = localStorage.getItem('assignments');
  return data ? JSON.parse(data) : [];
};

export const saveAssignments = (assignments: Assignment[]) => {
  localStorage.setItem('assignments', JSON.stringify(assignments));
};