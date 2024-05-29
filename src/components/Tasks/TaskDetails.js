import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Tasks.css'; // New CSS file for tasks

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`/api/tasks/${id}`)
      .then(res => {
        setTask(res.data);
        setComments(res.data.comments);
      })
      .catch(err => {
        console.error(err);
      });
  }, [id]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/tasks/comment/${id}`, { text: comment })
      .then(res => {
        setComments(res.data);
        setComment('');
      })
      .catch(err => {
        console.error(err);
      });
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tasks-container">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment.text} - by {comment.user}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TaskDetails;
