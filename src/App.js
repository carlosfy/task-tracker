import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'

import { useState, useEffect } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'React',
        day: 'Feb 6th at 1:15pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Node.js',
        day: 'Feb 9th at 5:30pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Next.js',
        day: 'Feb 10th at 11:30pm',
        reminder: true,
      },
      {
        id: 4,
        text: 'Resting API',
        day: 'Feb 7th at 1:30pm',
        reminder: false,
      },
    ]
  )

  // const fetchTasks = async () => {
  //   const res = await fetch('http://192.168.0.24:5000');
  //   const data = await res.json()

  //   return data;
  // }

  // useEffect(() => {
  //   const getTasks = async () => {
  //     const taskFromServer = await fetchTasks();
  //     setTasks(taskFromServer);
  //   }


  //   getTasks();
  // }, [])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  }

  const toggleShow = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header onButton={toggleShow} open={showAddTask} />

        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

// Delete task 


export default App;
