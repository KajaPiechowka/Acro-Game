import { createContext } from 'react';

export interface PoseInterface {
  id: number;
  name: string;
  difficulty: number;
  type?: number;
  image_url?: string;
  people_count?: number;
}

const SettingsContext = createContext<PoseInterface[] | null>(null);

export default SettingsContext;
