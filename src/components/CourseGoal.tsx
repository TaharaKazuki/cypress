import classes from './CourseGoal.module.css';

type Props = {
  icon: string;
  text: string;
};

export const CourseGoal = ({ icon, text }: Props) => {
  return (
    <li className={classes.goal}>
      <span className={classes.icon}>{icon}</span>
      <span>{text}</span>
    </li>
  );
};
