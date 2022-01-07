import { useState, useEffect } from "react";
import Stats from "./Stats";
import StatBlock from "./StatBlock";
import axios from "axios";

const Header = () => {
  const [stats, setStats] = useState({
    mutationCount: 0,
    nonMutationCount: 0,
    ratio: 0.0,
  });

  useEffect(() => {
    const getStats = async () => {
      try {
        const response = await axios.get(`http://victorolvera.net:3000/stats`);
        setStats((previousStats) => {
          return {
            ...previousStats,
            mutationCount: response.data.count_mutations,
            nonMutationCount: response.data.count_no_mutation,
            ratio: response.data.ratio,
          };
        });
      } catch (error) {
        console.error(error);
      }
    };

    getStats();
  }, [stats]);

  return (
    <Stats>
      <StatBlock name="Mutations" data={stats.mutationCount} />

      <StatBlock name="Negatives" data={stats.nonMutationCount} />

      <StatBlock name="Ratio" data={stats.ratio} />
    </Stats>
  );
};

export default Header;
