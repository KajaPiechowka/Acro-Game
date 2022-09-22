import SettingsForm from '../components/SettingsForm/SettingsForm';

const MainPage = () => (
  <div className="content">
    <div className="content__wrapper">
      <div className="content__rouned-border" />
      <h1 className="content__title">
        Welcome in <br />
        Acro Game!
      </h1>
      <SettingsForm />
    </div>
  </div>
);

export default MainPage;
