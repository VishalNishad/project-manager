import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { resetTaskUpdateData } from "../../../features/taskUpdateSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const TaskUpdateModal = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { taskData: taskUpdateData, showTaskUpdateModal } = useSelector(
    (state) => state.taskUpdate
  );

  const [task, setTask] = React.useState({
    userId: user._id,
    text: taskUpdateData.title,
    description: taskUpdateData.description,
    start_date: taskUpdateData.startDate,
    end_date: taskUpdateData.endDate,
    priority: taskUpdateData.priority,
  });

  const updateTaskHandler = async () => {
    try {
      const response = await axios.put(
        `https://mern-task-management.herokuapp.com/task/update/${taskUpdateData._id}`,
        task
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Modal
      open={showTaskUpdateModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="" style={{ marginBottom: "20px" }}>
          <TextField
            required
            id="outlined-required"
            label="Task Title"
            defaultValue={task.text}
            value={task.text}
            fullWidth={true}
            onChange={(e) =>
              setTask((prevState) => ({ ...prevState, text: e.target.value }))
            }
          />
        </div>

        <div className="" style={{ marginBottom: "20px" }}>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            defaultValue={task.description}
            fullWidth={true}
            onChange={(e) =>
              setTask((prevState) => ({
                ...prevState,
                description: e.target.value || taskUpdateData.description,
              }))
            }
          />
        </div>

        <div className="" style={{ marginBottom: "20px" }}>
          <div className="">
            <Typography>Start Date</Typography>
            <input
              type="date"
              defaultValue={"" || taskUpdateData.startDate}
              onChange={(e) =>
                setTask((prevState) => ({
                  ...prevState,
                  startDate: e.target.value,
                }))
              }
            />
          </div>
          <div className="">
            <Typography>End Date</Typography>
            <input
              type="date"
              defaultValue={"" || taskUpdateData.endDate}
              onChange={(e) =>
                setTask((prevState) => ({
                  ...prevState,
                  endDate: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className="" style={{ marginBottom: "20px" }}>
          <TextField
            type="number"
            label="Priority"
            defaultValue={"" || taskUpdateData.priority}
            onChange={(e) =>
              setTask((prevState) => ({
                ...prevState,
                priority: parseInt(
                  e.target.value || taskUpdateData.description
                ),
              }))
            }
          />
        </div>

        <Button
          variant="contained"
          style={{ marginRight: "20px" }}
          onClick={updateTaskHandler}
        >
          UPDATE TASK
        </Button>

        <Button
          variant="outlined"
          onClick={() => dispatch(resetTaskUpdateData())}
        >
          CANCEL
        </Button>
      </Box>
    </Modal>
  );
};

export default TaskUpdateModal;
