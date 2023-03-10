import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

import Card from "../components/Card";

const AnimeDetail = () => {
  const { id } = useParams();
  const [requestAnime] = useOutletContext();
  const filterData = requestAnime.data?.anime.filter(
    (animeSingle) => animeSingle._id == id,
  );

  return (
    <>
      <Card key={filterData[0]._id} data={filterData[0]} />
    </>
  );
};

export default AnimeDetail;
