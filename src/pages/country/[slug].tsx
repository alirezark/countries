import { loadCountry } from "@/api";
import { Meta } from "@/components/meta/Meta";
import Detail from "@/layouts/detail";
import Main from "@/templates/main";
import { Country } from "@/types";

// export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
//   return {
//     paths: [...Array(10)].map((_, index) => ({
//       params: { slug: `blog-${index}` },
//     })),
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
//   params,
// }) => {
//   return {
//     props: {
//       slug: params!.slug,
//     },
//   };
// };

type BlogProps = {
  data: Country;
};

const Blog = ({ data }: BlogProps) => {
  return (
    <Main meta={<Meta title={data.name.common} description="Lorem ipsum" />}>
      <Detail data={data} />
    </Main>
  );
};

export async function getServerSideProps({ query }: any) {
  const { slug } = query;
  try {
    const countriesData = await loadCountry({ name: slug });

    return {
      props: {
        data: countriesData.data,
      }, // will be passed to the page component as props
    };
  } catch (e) {
    // return to home page if country not found
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default Blog;
