import { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material';

import Pose from '../../components/Poses/Pose';
import SettingsContext from '../../assets/context/SettingsContext';

require('dotenv').config();

const api = process.env.REACT_APP_API;

const GeneratedPage = () => {
  const { context, setContext } = useContext(SettingsContext);
  const [data, setData] = useState(false);

  const resetContext = () => {
    setContext({ difficulty: '1', poses: '5' });
  };

  const generateSequence = () => {
    fetch(
      `${api}sequence/generate?difficulty=${context.difficulty}&length=${context.poses}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then((resp) => resp.json())
      .then((poses) => {
        setData(poses);
      })
      .catch((error) => {
        console.log(error); // ** :TODO */
      });
  };

  useEffect(() => {
    generateSequence();
  }, []);

  if (!data) {
    return <h1>Wait...</h1>;
  }
  return (
    <div className="content">
      <div className="content__wrapper">
        <div className="content__rouned-border" />

        <ul className="poses__list">
          {data.data.map(({ id, name }, index) => (
            <Pose name={name} key={id} index={index} />
          ))}
        </ul>
        <div className="poses__links">
          <Button onClick={generateSequence}>Generate New</Button>
          <Button href="/" onClick={resetContext}>
            Change Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GeneratedPage;
