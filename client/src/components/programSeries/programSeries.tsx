import { useEffect, useState } from "react";
import { fetchSeries } from "../../services/fetchSeriesProgram/fetSeries";
import type { SerieProps } from "../../types/serieProps";

export default function ProgramSeries() {
  const [series, setSeries] = useState<SerieProps[]>([]);
  useEffect(() => {
    const fetchProgram = async () => {
      const data = await fetchSeries();
      setSeries(data);
    };
    fetchProgram();
  }, []);
  return (
    <>
      {series.map((serie) => (
        <article key={serie.id}>
          <h1>{serie.title}</h1>
          <img src={serie.poster} alt={serie.title} />
          <p>Synopsie: {serie.synopsis}</p>
        </article>
      ))}
    </>
  );
}
