import Bird from '../../assets/images/poses/Bird.JPEG';

interface PoseProps {
  name: string;
  index: number;
}

const Pose = ({ name, index }: PoseProps) => (
  <li className="pose">
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
