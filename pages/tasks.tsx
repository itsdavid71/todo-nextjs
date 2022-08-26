import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { db } from "../app/firestoreApp";
import { collection, query, orderBy } from "firebase/firestore";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";

import Task from "../components/Task";
const Tasks = () => {
  const tasksRef = collection(db, "tasks");
  const [tasks] = useCollectionData(
    query(tasksRef, orderBy("createdAt", "desc"))
  );
  return (
    <div>
      <TableContainer component={Paper} sx={{ mt: 5 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tasks</TableCell>
              <TableCell align="center">Deadline</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks && (
              <div>
                {tasks.map((task) => (
                  <Task key={task.text} task={task} />
                ))}
              </div>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Tasks;
