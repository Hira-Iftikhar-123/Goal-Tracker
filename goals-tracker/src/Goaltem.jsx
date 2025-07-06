import { motion } from "framer-motion";

const GoalItem = ({ goal, onToggle, onDelete }) => {
  return (
    <motion.li
      className={goal.completed ? "completed" : ""}
      onClick={() => onToggle(goal.id)}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span>{goal.text}</span>
      <button style = {{color: 'red'}} onClick={(e) => { e.stopPropagation(); onDelete(goal.id); }}>X</button>
    </motion.li>
  );
};

export default GoalItem;
