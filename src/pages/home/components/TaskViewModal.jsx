import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { resetTaskViewData } from "../../../features/taskViewSlice";

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

const TaskViewModal = () => {
  const { showTaskViewModal, taskData } = useSelector(
    (state) => state.taskView
  );

  const dispatch = useDispatch();

  return (
    <Modal
      open={showTaskViewModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="">Task Title : {taskData?.text}</div>
        <div className="">Task Description : {taskData?.description}</div>
        <div className="">Start Date : {taskData?.start_date}</div>
        <div className="">End Date : {taskData?.end_date}</div>
        <div className="">Priority : {taskData?.priority}</div>
        <br />

        <Button
          variant="outlined"
          onClick={() => dispatch(resetTaskViewData())}
        >
          CLOSE
        </Button>
      </Box>
    </Modal>
  );
};

export default TaskViewModal;
