type Task = {
  uid: string;
  id: string;
  text: string;
  createdAt: Date | null;
  status: string;
  deadline: Date | null;
};

export default Task;
