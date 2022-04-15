import React, { Component } from "react";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";

class Gantt extends Component {
  componentDidMount() {
    gantt.config.date_format = "%Y-%n-%d";
    gantt.config.sort = true;

    gantt.config.columns = [
      {
        name: "_id",
        label: "Id",
        width: "*",
      },
      {
        name: "text",
        label: "Title",
        width: "*",
        min_width: 180,
      },

      {
        name: "start_date",
        label: "Start date",
        align: "center",
        width: "*",
        min_width: 80,
      },
      {
        name: "end_date",
        label: "End date",
        align: "center",
        width: "*",
        min_width: 80,
      },
      { name: "priority", label: "Priority", align: "center" },
    ];

    const { tasks, setAddChartStyle } = this.props;
    setAddChartStyle(true);
    gantt.init(this.ganttContainer);
    gantt.parse(tasks);
  }

  render() {
    return (
      <div
        ref={(input) => {
          this.ganttContainer = input;
        }}
        style={{ width: "100%", height: "50%" }}
      ></div>
    );
  }
}

export default Gantt;
