import GoalItem from './Goaltem'

const GoalList = ({ goals, onComplete, onDelete }) => {
  if (!goals.length) return <p style={{ textAlign: "center" }}>No goals yet</p>;

  return (
    <ul>
      {goals.map((goal) => (
        <GoalItem
          key={goal.id}
          goal={goal}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default GoalList;