import css from './styles.module.scss';

const Welcome: React.FC<{}> = () => {
  return (
    <div className={css.container}>
      <h1>Welcome !</h1>
      <div className={css.seperator} />
      <div className={css.copy}>
      Discombobulator is your one stop shop for managing every-day tasks.
        Feel like saving paper, time & the environment ? sick of forgetting
        things ? Get your life back on track today!
      </div>
    </div>
  );
};

export default Welcome;
