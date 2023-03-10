import { useRef, useState, MouseEvent } from 'react'
import "./index.css"

type TaskData = {
  title: string,
  summary: string,
  category: string,
}

type Props = {
  onAddTask: (taskData: TaskData) => void,
  onCancel: () => void
}

export const NewTask = ({onAddTask, onCancel}: Props) => {
  const titleRef = useRef<any>()
  const summaryRef = useRef<any>()
  const categoryRef = useRef<any>()

  const [formInvalid, setFormInvalid] = useState(false)

  const submitHandler = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const enteredTitle = titleRef.current.value
    const enteredSummary = summaryRef.current.value
    const choseCategory = categoryRef.current.value

    if (enteredTitle.trim().length === 0 || enteredSummary.trim().length === 0){
      return setFormInvalid(true)
    }

    const taskData = {
      title: enteredTitle,
      summary: enteredSummary,
      category: choseCategory
    }

    onAddTask(taskData)
  }

  return (
    <form id="new-task-form" onSubmit={submitHandler}>
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </p>
      <p>
        <label htmlFor="summary">Summary</label>
        <textarea id="summary" rows={5} ref={summaryRef} />
      </p>
      <p>
        <label htmlFor="category">Category</label>
        <select id="category" ref={categoryRef} defaultValue="moderate">
        <option value="urgent">🚨 Urgent</option>
          <option value="important">🔴 Important</option>
          <option value="moderate">🔵 Moderate</option>
          <option value="low">🟢 Low</option>
        </select>
      </p>
    </form>
  )
}