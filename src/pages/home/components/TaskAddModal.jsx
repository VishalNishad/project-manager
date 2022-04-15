import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addNewTask } from "../../../features/taskSlice";

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

const TaskAddModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [task, setTask] = React.useState({
    userId: user._id,
    text: "",
    description: "",
    start_date: "",
    end_date: "",
    priority: 0,
  });

  const addTaskHandler = async () => {
    try {
      const response = await axios.post("https://mern-task-management.herokuapp.com/task/add", task);
      dispatch(addNewTask(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="" style={{ marginBottom: "20px" }}>
          <TextField
            required
            id="outlined-required"
            label="Task Title"
            defaultValue=""
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
            defaultValue=""
            fullWidth={true}
            onChange={(e) =>
              setTask((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
        </div>

        <div className="" style={{ marginBottom: "20px" }}>
          <div className="">
            <Typography>Start Date</Typography>
            <input
              type="date"
              onChange={(e) =>
                setTask((prevState) => ({
                  ...prevState,
                  start_date: String(
                    new Date(e.target.value).getDate() +
                      "-" +
                      new Date(e.target.value).getMonth() +
                      "-" +
                      new Date(e.target.value).getFullYear()
                  ),
                }))
              }
            />
          </div>
          <div className="">
            <Typography>End Date</Typography>
            <input
              type="date"
              onChange={(e) =>
                setTask((prevState) => ({
                  ...prevState,
                  end_date: String(
                    new Date(e.target.value).getDate() +
                      "-" +
                      new Date(e.target.value).getMonth() +
                      "-" +
                      new Date(e.target.value).getFullYear()
                  ),
                }))
              }
            />
          </div>
        </div>

        <div className="" style={{ marginBottom: "20px" }}>
          <TextField
            type="number"
            label="Priority"
            defaultValue={1}
            onChange={(e) =>
              setTask((prevState) => ({
                ...prevState,
                priority: parseInt(e.target.value),
              }))
            }
          />
        </div>

        <Button
          variant="contained"
          style={{ marginRight: "20px" }}
          onClick={addTaskHandler}
        >
          ADD TASK
        </Button>
        <Button
          variant="outlined"
          onClick={() => handleClose({ taskAdd: false })}
        >
          CANCEL
        </Button>
      </Box>
    </Modal>
  );
};

export default TaskAddModal;
