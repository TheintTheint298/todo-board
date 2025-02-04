import { useState } from "react";
import Input from "./components/input";

function App() {
  const [taskList, setTaskList] = useState([]);

  console.log(taskList);
  return (
    <div className="flex flex-col items-center justify-center py-8 gap-4">
      <h2 className="text-xl font-semibold">Todo Board</h2>
      <Input taskList={taskList} setTaskList={setTaskList}></Input>
      <div>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
