import React from 'react';

const TodoFooter = ({ count, filter, setFilter, clearCompleted }) => {
  return (
    <div className="mt-3">
      <p>Total Tasks: {count}</p>
      <div className="btn-group">
        <button
          onClick={() => setFilter('all')}
          className={`btn btn-outline-secondary ${filter === 'all' ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`btn btn-outline-secondary ${filter === 'active' ? 'active' : ''}`}
        >
          Active Tasks
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`btn btn-outline-secondary ${filter === 'completed' ? 'active' : ''}`}
        >
          Completed Tasks
        </button>
      </div>
      <button
        onClick={clearCompleted}
        className="btn btn-outline-danger ml-2"
      >
        Clear Completed Tasks
      </button>
    </div>
  );
};

export default TodoFooter;