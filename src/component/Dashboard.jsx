import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask, deleteTask } from '../redux/taskSlice';

const Dashboard = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddTask = () => {
    if (taskText.trim() === '') return;
    if (editId) {
      dispatch(editTask({ id: editId, text: taskText }));
      setEditId(null);
    } else {
      dispatch(addTask({ id: Date.now(), text: taskText }));
    }
    setTaskText('');
  };

  const handleEdit = (task) => {
    setTaskText(task.text);
    setEditId(task.id);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Type Your Name</h1>
      <input
        className="border p-2 mr-2"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask} className="bg-green-500 text-white px-4 py-2">
        {editId ? 'Update' : 'Add'}
      </button>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center">
            <span className="flex-1">{task.text}</span>
            <button
              onClick={() => handleEdit(task)}
              className="bg-blue-500 text-white px-2 py-1 mx-1"
            >
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTask(task.id))}
              className="bg-red-500 text-white px-2 py-1"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;