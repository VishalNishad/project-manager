import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { setTaskData } from "../../../features/taskViewSlice";
import { addTasks, removeTask } from "../../../features/taskSlice";
import { setTaskUpdateData } from "../../../features/taskUpdateSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    axios
      .get(`https://mern-task-management.herokuapp.com/task/by-user/${user._id}`)
      .then((response) => {
        dispatch(addTasks(response.data));
        setFetching(false);
      })
      .catch((error) => {
        setFetching(false);
      });

    return () => {
      setFetching(false);
    };
  }, [user._id, dispatch]);

  const { tasks } = useSelector((state) => state.tasksList);

  return (
    <Container>
      <div className="heading">
        <div className="serialNo">
          <Typography variant="body2" gutterBottom>
            Serial No{" "}
          </Typography>
        </div>
        <div className="taskTitle">
          <Typography variant="body2" gutterBottom>
            Task Title{" "}
          </Typography>
        </div>
        <div className="action">
          <Typography variant="body2" gutterBottom>
            Actions{" "}
          </Typography>
        </div>
      </div>

      {fetching ? (
        "Loading..."
      ) : (
        <>
          {tasks.map((task, index) => (
            <Task task={task} index={index} key={task._id} />
          ))}
        </>
      )}
    </Container>
  );
};

export default TaskList;

const Task = ({ task, index }) => {
  const dispatch = useDispatch();
  const taskViewHandler = () => {
    dispatch(setTaskData({ task }));
  };

  const taskDeleteHandler = async () => {
    try {
      await axios.delete(`https://mern-task-management.herokuapp.com/task/delete/${task._id}`);
      dispatch(removeTask(task._id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="task" key={task._id}>
        <div className="serialNo">
          <Typography variant="subtitle1" gutterBottom>
            {index + 1}
          </Typography>
        </div>
        <div className="taskTitle">
          <Typography variant="subtitle1" gutterBottom>
            {task.text}
          </Typography>
        </div>
        <div className="action">
          <IconButton onClick={taskViewHandler}>
            <VisibilityIcon />
          </IconButton>
          <IconButton onClick={() => dispatch(setTaskUpdateData(task))}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={taskDeleteHandler}>
            <ClearIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

const Container = styled.div`
  .heading {
    width: 100%;
    display: flex;
    gap: 0 12px;
    padding: 12px 8px;
    .serialNo {
      flex: 0.2;
    }
    .taskTitle {
      flex: 1;
    }
    .action {
      flex: 0.2;
    }
  }

  .task {
    display: flex;
    gap: 0 12px;
    padding: 12px 8px;
    background-color: transparent;
    cursor: default;

    .serialNo {
      flex: 0.2;
    }
    .taskTitle {
      flex: 1;
    }
    .action {
      flex: 0.3;
      display: flex;
      justify-content: flex-end;
    }
  }

  .btnAction {
    border: none;
    background-color: transparent;
    display: flex;
    width: 26px;
    height: 26px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.1s linear;
    cursor: pointer;
    &:hover {
      background-color: tomato;
      color: white;
    }
  }
`;
