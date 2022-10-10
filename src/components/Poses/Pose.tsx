import Bird from '../../assets/images/poses/Bird.JPEG';
import { colors } from '../../utils';

interface PoseProps {
  name: string;
  index: number;
  colorIndex: 1 | 2 | 3;
}

const poseColors: string[] = [colors.blue, colors.yellow, colors.red];

const Pose = ({ name, index, colorIndex }: PoseProps) => (
  <li className="pose" style={{ backgroundColor: poseColors[colorIndex - 1] }}>
    <div className="pose__wrapper">
      <p className="pose__text">
        <span>{index + 1}. </span>
        {name}
      </p>
      <img src={Bird} className="pose__img" alt="bird" />
    </div>
  </li>
);
export default Pose;
