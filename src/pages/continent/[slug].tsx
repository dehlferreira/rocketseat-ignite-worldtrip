import { GetStaticProps } from 'next';

export default function Continent() {
  return <h1>Continentes</h1>;
}

// export const getStaticProps: GetStaticProps = async ({ req, params }) => {
//   const { slug } = params;

//   console.log('[slug]:', slug);

//   return {
//     props: {
//       // continent,
//     },
//     revalidate: 60 * 60, // 1 hour
//   };
// };
