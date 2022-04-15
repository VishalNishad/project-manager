import React, { useState } from "react";
import ProfileHeader from "./components/ProfileHeader";
import TaskList from "./components/TaskList";
import styled from "styled-components";
import { useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import TaskAddModal from "./components/TaskAddModal";
import TaskViewModal from "./components/TaskViewModal";
import { Button } from "@mui/material";
import TaskUpdateModal from "./components/TaskUpdateModal";
import { Link } from "react-router-dom";

const Home = () => {
  const { showTaskViewModal } = useSelector((state) => state.taskView);
  const { showTaskUpdateModal } = useSelector((state) => state.taskUpdate);

  const [openTaskAddModal, setOpenTaskAddModal] = useState(false);

  const handleOpenTaskAddModal = () => setOpenTaskAddModal(true);
  const handleCloseTaskAddModal = () => setOpenTaskAddModal(false);

  return (
    <>
      <Container>
        <ProfileHeader />

        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleOpenTaskAddModal}
        >
          Add Task
        </Button>

        <TaskList />

        <TaskAddModal
          open={openTaskAddModal}
          handleClose={handleCloseTaskAddModal}
        />

        {showTaskViewModal && <TaskViewModal />}

        {showTaskUpdateModal && <TaskUpdateModal />}

        <Link to="/chart">View Chart</Link>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 50%;
  margin: 2% auto;
  .btnNewTask {
    display: flex;
    align-items: center;
    gap: 0 12px;
    font-size: 18px;
    background-color: transparent;
    border: none;
    color: dodgerblue;
    cursor: pointer;
  }
`;
