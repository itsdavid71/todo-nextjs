import type TaskType from "../types/task";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { FC } from "react";

type TaskProps = {
  task: TaskType;
};
const Task: FC<TaskProps> = ({ task }) => {
  const deadline = task.deadline;

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {task.text}
      </TableCell>
      <TableCell align="center">{deadline?.seconds}</TableCell>
      <TableCell align="center">{task.status}</TableCell>
      <TableCell align="center">
        <IconButton aria-label="delete" size="small">
          <CheckIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Task;
