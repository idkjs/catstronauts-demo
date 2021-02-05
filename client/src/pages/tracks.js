import React from 'react';
import { Layout } from '../components';
import { useQuery, gql } from '@apollo/client';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';
/**
 * Tacks Page is Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
/** TRACKS query to retrieve all tracks */
export const TRACKS = gql`
 query getTracks {
   tracksForHome {
     id
     title
     thumbnail
     length
     modulesCount
     author {
       name
       photo
     }
   }
 }
`;
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;
  return (
    <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
  {data?.tracksForHome?.map((track) => (
    <TrackCard key={track.id} track={track} />
  ))}
</QueryResult>
    </Layout>
  );
};
// const Tracks2 = () => {
//   const { loading, error, data } = useQuery(TRACKS);

//   if (loading) return 'Loading...';

//   if (error) return `Error! ${error.message}`;
//   return (
//     <Layout grid>
//         {data?.tracksForHome?.map((track) => (
//     <TrackCard key={track.id} track={track} />
//   ))}
//     </Layout>
//   );
// };

export default Tracks;
